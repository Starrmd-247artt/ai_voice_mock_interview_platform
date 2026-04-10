/*"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  // Check auth state
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) router.replace("/dashboard");
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) router.replace("/dashboard");
    });

    return () => subscription.unsubscribe();
  }, [router]);

  // Sign in with Google
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}` },
    });
    if (error) console.error("Error signing in:", error.message);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center border border-white border-4 shadow-[0_0_25px_rgba(255,255,255,0.4)] rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
          <h2 className="text-primary-500">PrepWise</h2>
        </div>

        <Image
          src="/robot.png"
          alt="robot"
          width={600}
          height={400}
          className="w-[400px] h-[250px] rounded-3xl"
        />

        <h2 className="text-2xl font-bold text-center mt-5">Welcome to PrepWise</h2>
        <p className="text-gray-500 text-center">Sign In With Google Authentication</p>

        <Button className="mt-7 w-full" onClick={signInWithGoogle}>
          Login with Google
        </Button>
      </div>
    </div>
  );
}*/

"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";

export default function Login() {

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
        queryParams: {
          prompt: "select_account", // forces Google account chooser
        },
      },
    });

    if (error) console.error("Error signing in:", error.message);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center border border-white border-4 shadow-[0_0_25px_rgba(255,255,255,0.4)] rounded-2xl p-8">
        
        <div className="flex items-center gap-3 mb-6">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
          <h2 className="text-primary-500">VoxHire</h2>
        </div>

        <Image
          src="/robot.png"
          alt="robot"
          width={600}
          height={400}
          className="w-[400px] h-[250px] rounded-3xl"
        />

        <h2 className="text-2xl font-bold text-center mt-5">
          Welcome to VoxHire
        </h2>

        <p className="text-gray-500 text-center">
          Sign In With Google Authentication
        </p>

        <Button className="mt-7 w-full" onClick={signInWithGoogle}>
          Login with Google
        </Button>

      </div>
    </div>
  );
}