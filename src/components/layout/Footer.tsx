import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
        <div className="flex items-center gap-6">
          <p>© Copyright 2025 by TRAR</p>
          <Link href="/privacy" className="hover:text-gray-900 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="hover:text-gray-900 transition-colors">
            Cookie Policy
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span>Created in</span>
          <span className="text-blue-600">🌍 Framer</span>
        </div>
      </div>
    </footer>
  );
}