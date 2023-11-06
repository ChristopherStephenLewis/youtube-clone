"use client";

import Image from "next/image";
import Link from "next/link";
import SignIn from "./sign-in";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import Upload from "./upload";

export default function Navbar() {
  //Init user state
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    });

    // Cleanup sobscription on unmount
    return () => unsubscribe();
  });

  return (
    <nav className="flex justify-between items-center p-4">
      <Link className="w-24 h-5 relative" href="/">
        <Image src="/youtube-logo.svg" alt="YouTube Logo" fill />
      </Link>
      {user && <Upload />}
      <SignIn user={user}></SignIn>
    </nav>
  );
}
