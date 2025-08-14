// export const fetchUser = () => {
//   const userInfo =
//     localStorage.getItem("user") !== "undefined"
//       ? JSON.parse(localStorage.getItem("user"))
//       : localStorage.clear();

//   return userInfo;
// };

export const fetchUser = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    if (user && user !== "undefined") {
      return JSON.parse(user);
    } else {
      localStorage.clear();
      return null;
    }
  }
  return null; // Return null on server side
};
