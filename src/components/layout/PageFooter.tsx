import Link from "next/link";

export default function PageFooter() {
  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
          <span>© Copyright 2025 by Ben Ko</span>
        </div>
      </div>
    </footer>
  );
}