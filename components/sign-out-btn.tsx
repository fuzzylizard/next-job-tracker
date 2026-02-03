"use client";

import { signOut } from "@/lib/auth/auth-client";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function SignOutBtn() {
  const router = useRouter();

  async function signOutHandler() {
    const result = await signOut();
    if (result.data) {
      router.push("/sign-in");
    } else {
      alert("Error signing out. Please try again.");
    }
  }

  return <DropdownMenuItem onClick={signOutHandler}>Log Out</DropdownMenuItem>;
}
