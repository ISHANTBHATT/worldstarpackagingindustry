// "use client";

// import * as React from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";
// import { Chrome } from "lucide-react";
// import { auth, googleProvider } from "@/lib/firebase.config";
// import {
//   onAuthStateChanged,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";
// // import { useToast } from "@/hooks/use-toast";

// export default function LoginForm() {
//   const router = useRouter();
//   // const { toast } = useToast();
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [loading, setLoading] = React.useState(false);

//   React.useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         router.replace("/admin/uploadItem");
//       } else {
//         router.replace("/admin");
//       }
//     });
//     return () => unsub();
//   }, [router]);

//   async function handleEmailSignIn(e) {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       // toast({ title: "Signed in", description: "Welcome back!" });
//       router.replace("/admin/uploadItem");
//     } catch (err) {
//       const message =
//         err?.message?.split("Firebase: ")?.[1] ?? "Sign in failed";
//       // toast({ title: "Error", description: message });
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleGoogleSignIn() {
//     setLoading(true);
//     try {
//       await signInWithPopup(auth, googleProvider);
//       // toast({ title: "Signed in with Google" });
//       router.replace("/admin/uploadItem");
//     } catch (err) {
//       const message =
//         err?.message?.split("Firebase: ")?.[1] ?? "Google sign in failed";
//       // toast({ title: "Error", description: message });
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleForgotPassword(e) {
//     e.preventDefault();
//     if (!email) {
//       // toast({
//       //   title: "Add your email",
//       //   description: "Enter your email above to reset your password.",
//       // });
//       return;
//     }
//     try {
//       await sendPasswordResetEmail(auth, email);
//       // toast({
//       //   title: "Reset email sent",
//       //   description: "Check your inbox to continue.",
//       // });
//     } catch (err) {
//       // toast({
//       //   title: "Error",
//       //   description: err?.message ?? "Unable to send reset email.",
//       // });
//     }
//   }

//   return (
//     <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-300 via-zinc-400 to-zinc-500 flex items-center justify-center py-40">
//       <main
//         className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl md:grid-cols-2"
//         role="main"
//         aria-label="Lovebirds login"
//       >
//         {/* Left panel */}
//         <section
//           className="relative hidden h-full min-h-[620px] md:block"
//           aria-label="Illustration panel"
//           style={{ backgroundColor: "#A9CFC2" }}
//         >
//           <div className="absolute inset-0 flex flex-col items-center justify-center px-10">
//             <Image
//               src="/images/lovebirds-illustration.png"
//               alt="Illustration of a bird with flowers"
//               width={420}
//               height={420}
//               className="h-auto w-[420px] max-w-full"
//               priority
//             />
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 px-10 py-10 text-center text-white/95">
//             <h2 className="mb-2 text-xl font-semibold">
//               {"Maecenas mattis egestas"}
//             </h2>
//             <p className="mx-auto max-w-xs text-sm text-white/90">
//               {
//                 "Erdum et malesuada fames ac ante ipsum primis in faucibus suspendisse porta."
//               }
//             </p>
//             <div className="mt-6 flex items-center justify-center gap-2">
//               <span className="h-2 w-2 rounded-full bg-white/60" />
//               <span className="h-2 w-2 rounded-full bg-white/60" />
//               <span className="h-2 w-2 rounded-full bg-white/60" />
//               <span
//                 className="h-2 w-5 rounded-full"
//                 style={{ backgroundColor: "#6FAE9E" }}
//               />
//             </div>
//           </div>
//         </section>

//         {/* Right panel (form) */}
//         <section className="flex min-h-[620px] items-center justify-center bg-white px-8 py-12">
//           <div className="w-full max-w-sm">
//             <div className="mb-10 text-center">
//               <div
//                 className="font-serif text-3xl"
//                 style={{ fontFamily: "cursive" }}
//               >
//                 {"World Star Packaging"}
//               </div>
//               <p className="mt-6 text-sm text-muted-foreground">
//                 {"Welcome to World Star Packaging"}
//               </p>
//             </div>

//             <form onSubmit={handleEmailSignIn} className="space-y-6">
//               <div className="space-y-2">
//                 <Label
//                   htmlFor="email"
//                   className="text-xs text-muted-foreground"
//                 >
//                   {"Users name or Email"}
//                 </Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="name@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="rounded-none border-0 border-b bg-transparent focus-visible:ring-0"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <div className="flex items-center">
//                   <Label
//                     htmlFor="password"
//                     className="text-xs text-muted-foreground"
//                   >
//                     {"Password"}
//                   </Label>
//                   <button
//                     onClick={handleForgotPassword}
//                     type="button"
//                     className="ml-auto text-[11px] text-muted-foreground underline"
//                   >
//                     {"Forgot password?"}
//                   </button>
//                 </div>
//                 <Input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="rounded-none border-0 border-b bg-transparent focus-visible:ring-0"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className="mt-4 w-full rounded-full bg-zinc-600 text-white hover:bg-zinc-700"
//               >
//                 {loading ? "Signing in..." : "Sign in"}
//               </Button>
//             </form>

//             <div className="my-8 flex items-center gap-4">
//               <Separator className="flex-1" />
//               <span className="text-xs text-muted-foreground">{"or"}</span>
//               <Separator className="flex-1" />
//             </div>

//             <Button
//               variant="outline"
//               type="button"
//               onClick={handleGoogleSignIn}
//               disabled={loading}
//               className="w-full justify-center bg-transparent"
//             >
//               <Chrome className="mr-2 h-4 w-4" aria-hidden="true" />
//               {"Sign in with Google"}
//             </Button>

//             <p className="mt-10 text-center text-xs text-muted-foreground">
//               {"New Lovebirds? "}
//               <a href="/register" className="underline">
//                 {"Create Account"}
//               </a>
//             </p>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Chrome } from "lucide-react";
import { auth, googleProvider } from "@/lib/firebase.config";
import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false); // loading for form actions
  const [authLoading, setAuthLoading] = React.useState(true); // loading for initial auth check

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/admin/uploadItem");
      } else {
        router.replace("/admin");
        setAuthLoading(false); // show form if not logged in
      }
    });
    return () => unsub();
  }, [router]);

  async function handleEmailSignIn(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/admin/uploadItem");
    } catch (err) {
      console.error("Sign-in error:", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      router.replace("/admin/uploadItem");
    } catch (err) {
      console.error("Google sign-in error:", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword(e) {
    e.preventDefault();
    if (!email) return alert("Enter your email first");
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent");
    } catch (err) {
      console.error("Reset password error:", err);
    }
  }

  // ✅ Show loading until Firebase finishes checking auth
  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg">
        Checking authentication...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-300 via-zinc-400 to-zinc-500 flex items-center justify-center py-40">
      <main className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl md:grid-cols-2">
        {/* Left panel */}
        <section
          className="relative hidden h-full min-h-[620px] md:block"
          style={{ backgroundColor: "#A9CFC2" }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center object-cover">
            <Image
              src="/images/bg1.jpg"
              alt="Illustration"
              width={420}
              height={420}
              priority
              className="w-full h-full"
            />
          </div>
        </section>

        {/* Right panel (form) */}
        <section className="flex min-h-[620px] items-center justify-center bg-white px-8 py-12">
          <div className="w-full max-w-sm">
            <div className="mb-10 text-center">
              <div
                className="font-serif text-3xl"
                style={{ fontFamily: "cursive" }}
              >
                World Star Packaging
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Welcome to World Star Packaging
              </p>
            </div>

            <form onSubmit={handleEmailSignIn} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-xs text-muted-foreground"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-none border-0 border-b bg-transparent focus-visible:ring-0"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Label
                    htmlFor="password"
                    className="text-xs text-muted-foreground"
                  >
                    Password
                  </Label>
                  <button
                    onClick={handleForgotPassword}
                    type="button"
                    className="ml-auto text-[11px] underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-none border-0 border-b bg-transparent focus-visible:ring-0"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="mt-4 w-full rounded-full bg-zinc-600 text-white hover:bg-zinc-700"
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <div className="my-8 flex items-center gap-4">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">or</span>
              <Separator className="flex-1" />
            </div>

            <Button
              variant="outline"
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full justify-center bg-transparent"
            >
              <Chrome className="mr-2 h-4 w-4" /> Sign in with Google
            </Button>

            <p className="mt-10 text-center text-xs text-muted-foreground">
              New Lovebirds?{" "}
              <a href="/register" className="underline">
                Create Account
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
