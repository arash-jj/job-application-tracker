import { Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
        <nav className="border-b border-gray-200">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2 gap-2 text-lg font-semibold text-primary">
                    <Briefcase/>
                    Job Tracker
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/sign-in" className="hover:text-black">
                        <Button variant="ghost">Log In</Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button className="hover:bg-primary/90">Start for free</Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar