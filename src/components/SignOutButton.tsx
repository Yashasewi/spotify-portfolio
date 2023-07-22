"use client";
import { Loader2 } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function SignOut_Button() {
  const [isSignedIn, setIsSignedIn] = useState<Boolean>(false);

  const handleSignOut = async () => {
    setIsSignedIn(true);
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSignedIn(false);
    }
  };

  return (
    <button
      onClick={() => handleSignOut()}
      className="px-8 py-2 mt-4 text-base  bg-green-600 rounded-full hover:text-black hover:bg-white "
    >
      {isSignedIn ? (
        <Loader2 className="text-green-400  animate-spin" />
      ) : (
        "Logout"
      )}
    </button>
  );
}
