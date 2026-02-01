"use client";

import { signOut } from "@/lib/auth/auth-client";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

const SignOutBtn = () => {
    const router = useRouter();
    return (
        <DropdownMenuItem
        className="bg-primary text-sm text-white"
        onClick={async () => {
            const result = await signOut();
            if (result.data?.success) {
            router.push("/sign-in");
            } else {
            alert(result.error?.message ?? "Error signing out");
            }
        }}
        >
        Log out
        </DropdownMenuItem>
    );
}

export default SignOutBtn