import Link from "next/link"
import { BriefcaseIcon } from "@heroicons/react/24/outline"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-rose-500 rounded-xl flex items-center justify-center">
                <BriefcaseIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">KaamKhoj</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Empowering Nepali youth to find meaningful work and build successful careers. Your journey to the perfect
              job starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs" className="text-slate-400 hover:text-white transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-slate-400 hover:text-white transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-slate-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 KaamKhoj. Made with ❤️ for Nepali youth.</p>
        </div>
      </div>
    </footer>
  )
}
