import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <Briefcase />
          Next Job Tracker
        </Link>
        <div>
          <Link href="/sign-in">Sign In</Link>
          <Link
            href="/sign-up"
            className="ml-auto rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
          >
            Start for free
          </Link>
        </div>
      </div>
    </nav>
  );
}
