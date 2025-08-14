// import AdminDashboard from "@/app/components/admin";
// import React from "react";

// function Page() {
//   return (
//     <div>
//       <AdminDashboard />
//     </div>
//   );
// }

// export default Page;

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import AdminDashboard from "@/app/components/admin";
import { auth } from "@/lib/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

function Page() {
  const router = useRouter();
  const [authLoading, setAuthLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setAuthLoading(false);
      } else {
        router.replace("/admin"); // redirect to login if not signed in
      }
    });

    return () => unsub();
  }, [router]);

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg">
        Checking authentication...
      </div>
    );
  }

  return (
    <div>
      <AdminDashboard />
    </div>
  );
}

export default Page;
