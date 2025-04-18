// components/ProfileDropdown.tsx
"use client";
import { Button } from "@/components/ui/button";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useAuth } from "@/components/AuthProvider";
import { ChevronDown } from "lucide-react";

const ProfileDropdown = () => {
  const { user } = useAuth();

  return (
   <div className="relative">
   {user ? (
     <DropdownMenu.Root>
       <DropdownMenu.Trigger asChild>
         <Button variant="outline" className="flex items-center gap-2">
           Profile <ChevronDown className="w-4 h-4" />
         </Button>
       </DropdownMenu.Trigger>

       <DropdownMenu.Content className="bg-white shadow-md rounded-md p-2 mt-2 min-w-[160px] text-left">
         <DropdownMenu.Item asChild>
           <Link href="/account" className="block px-2 py-1 hover:bg-gray-100 rounded-md">My Account</Link>
         </DropdownMenu.Item>
         <DropdownMenu.Item asChild>
           <Link href="/wishlist" className="block px-2 py-1 hover:bg-gray-100 rounded-md">Wishlist</Link>
         </DropdownMenu.Item>
         <DropdownMenu.Item asChild>
           <Link href="/settings" className="block px-2 py-1 hover:bg-gray-100 rounded-md">Settings</Link>
         </DropdownMenu.Item>
         <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
         <DropdownMenu.Item>
           <button
             onClick={() => signOut(auth)}
             className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded-md"
           >
             Logout
           </button>
         </DropdownMenu.Item>
       </DropdownMenu.Content>
     </DropdownMenu.Root>
   ) : (
     <Link href="/login">
       <Button variant="outline">Sign In</Button>
     </Link>
   )}
 </div>
  );
};

export default ProfileDropdown;
