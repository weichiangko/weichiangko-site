"use client";

import { NAVIGATION, PERSONAL_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Mail, FileText, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const iconMap = {
  Home,
  User,
  Briefcase,
  Mail,
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-6 top-6 bottom-6 w-64 md:w-[96px] lg:w-64 bg-white border border-gray-200 rounded-xl flex flex-col shadow-sm">
      {/* Profile Section */}
      <div className="p-6 md:p-4 lg:p-6 border-b border-gray-200 md:border-b-0 lg:border-b">
        <div className="flex items-center gap-3 md:justify-center md:mb-0 lg:justify-start">
          <div className="w-12 h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-200 overflow-hidden">
            <Image
              src="/images/avatar.jpg"
              alt={PERSONAL_INFO.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="md:hidden lg:block">
            <h2 className="font-semibold text-gray-900">{PERSONAL_INFO.name}</h2>
            <p className="text-sm text-gray-600">{PERSONAL_INFO.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 md:p-2 lg:p-4">
        <ul className="space-y-2 md:space-y-3 lg:space-y-2">
          {NAVIGATION.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const isActive = pathname === item.href;
            
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors md:justify-center md:p-3 lg:justify-start lg:gap-3 lg:px-3 lg:py-2",
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="md:hidden lg:inline">{item.name}</span>
                  {isActive && <div className="ml-auto w-1 h-1 bg-white rounded-full md:hidden lg:block" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Links */}
      <div className="p-4 md:p-2 lg:p-4 space-y-2 md:space-y-3 lg:space-y-2">
        <Link
          href="/resume.pdf"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors md:justify-center md:p-3 lg:justify-start lg:gap-3 lg:px-3 lg:py-2"
        >
          <FileText className="w-5 h-5" />
          <span className="md:hidden lg:inline">Resume</span>
        </Link>
        <Link
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors md:justify-center md:p-3 lg:justify-start lg:gap-3 lg:px-3 lg:py-2"
        >
          <Linkedin className="w-5 h-5" />
          <span className="md:hidden lg:inline">LinkedIn</span>
        </Link>
      </div>
    </aside>
  );
}