import { Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { getSession } from "@/lib/auth/auth"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar"
import SignOutBtn from "./SignOutBtn"

const Navbar = async () => {
    const session = await getSession()
    return (
        <nav className="border-b border-gray-200">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2 gap-2 text-lg font-semibold text-primary">
                    <Briefcase/>
                    Job Tracker
                </Link>
                <div className="flex items-center gap-4">
                    {session?.user ? (
                        <>
                        <Link href="/dashboard">
                            <Button
                                variant="ghost"
                                className="text-gray-700 hover:text-black"
                                >
                                Dashboard
                            </Button>
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button
                                    variant="ghost"
                                    className="relative h-8 w-8 rounded-full bg-primary"
                                >
                                    <Avatar className="h-8 w-8 flex items-center justify-center">
                                        <AvatarFallback className=" text-white">
                                            {session.user.name[0].toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-white mt-2 flex flex-col gap-1.5 p-2 rounded-2xl border-gray-600/50 border shadow-2xs" align="end">
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="font-medium leading-none text-xl text-gray-600">
                                            {session.user.name}
                                        </p>
                                        <p className="leading-none text-muted-foreground text-lg">
                                            {session.user.email}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <SignOutBtn />
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </>
                    ) : (
                        <>
                            <Link href="/sign-in" className="hover:text-black">
                                <Button variant="ghost">Log In</Button>
                            </Link>
                            <Link href="/sign-up">
                                <Button className="hover:bg-primary/90">Start for free</Button>
                            </Link>
                        </>
                    )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar