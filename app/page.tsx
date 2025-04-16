"use client"
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";

export default function Home() {
  const { user } = useAuth();
  return (
    <main className="text-center">
      <h1 className="font-bold text-center mb-5">Login form for One Stop Lease</h1>
      
      {user ? (
        <h2>Welcome to the App as logged in as User {user?.uid}</h2>
      ) : (
        <h2>You are not logged in</h2>
      )}

      {user ? (
        <Button onClick={() => signOut(auth)} className="mt-10">Sign Out</Button>
      ) : (
        <Link href="/login">
          <Button className="mt-10">Sign In</Button>
        </Link>
      )}
    </main>
  );
}
