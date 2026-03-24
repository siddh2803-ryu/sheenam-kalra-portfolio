import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href="#home"
              className="text-2xl font-serif font-bold tracking-tight text-white hover:text-stone-300 transition-colors"
            >
              SK.
            </Link>
            <p className="mt-2 text-sm">
              © {new Date().getFullYear()} Sheenam Kalra. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-white transition-colors">
              Skills
            </Link>
            <Link
              href="#portfolio"
              className="hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="#home"
              className="inline-flex items-center justify-center w-10 h-10 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors group"
            >
              <ArrowUp className="h-5 w-5 text-white group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
