import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { firestore } from "../lib/firebase.config";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "items", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "items"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};

export const deleteItemById = async (id) => {
  await deleteDoc(doc(firestore, "items", id));
};
