"use client";

import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn_Button() {
  const [isSignedIn, setIsSignedIn] = useState<Boolean>(false);

  const handleSignIn = async () => {
    setIsSignedIn(true);
    try {
      await signIn("spotify");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSignedIn(false);
    }
  };

  return (
    <button
      onClick={() => handleSignIn()}
      className="px-6 py-2 mt-4 text-white bg-green-500 rounded-full hover:bg-green-600"
    >
      {isSignedIn ? <Loader2 className="text-white  animate-spin" /> : "Login"}
    </button>
  );
}
