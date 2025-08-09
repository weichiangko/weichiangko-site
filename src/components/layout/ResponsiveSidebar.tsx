"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Mail, FileText, Linkedin, Github } from "lucide-react";
import { NAVIGATION, PERSONAL_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Sidebar from "./Sidebar";

const iconMap = {
  Home,
  User,
  Briefcase,
  Mail,
};

export default function ResponsiveSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background jank on iOS Safari
  useEffect(() => {
    if (!isMobile) return;
    const originalOverflow = document.body.style.overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen, isMobile]);


  if (!isMobile) {
    return <Sidebar />;
  }

  return (
    <>
      {/* Mobile Header Card */}
      <div className="fixed top-4 left-4 right-4 z-40 md:hidden">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src="/images/avatar.jpg"
                  alt={PERSONAL_INFO.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">{PERSONAL_INFO.name}</h2>
                <p className="text-sm text-gray-600">{PERSONAL_INFO.title}</p>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <MotionConfig transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}>
        <AnimatePresence mode="wait" initial={false}>
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.24 }}
                className="absolute inset-0 bg-black bg-opacity-50"
                style={{ willChange: "opacity" }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
              />
              
              {/* Background surface - transform-based for smoother perf */}
              <motion.div
                initial={{ borderRadius: 12, opacity: 0.98, scale: 0.98, y: -8 }}
                animate={{ borderRadius: 0, opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 8 }}
                className="absolute inset-0 bg-white"
                style={{ willChange: "transform, opacity" }}
              />
              
              {/* Content overlay that fades/moves independently */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="relative w-full h-full flex flex-col"
                style={{ willChange: "transform, opacity" }}
              >
            {/* Header with profile and close button */}
            <motion.div 
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ delay: 0.08 }}
              className="p-8 border-b border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <Image
                      src="/images/avatar.jpg"
                      alt={PERSONAL_INFO.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900">{PERSONAL_INFO.name}</h2>
                    <p className="text-sm text-gray-600">{PERSONAL_INFO.title}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                setIsMobileMenuOpen(false);
              }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </motion.div>

            {/* Navigation - Scrollable */}
            <nav className="flex-1 overflow-y-auto p-8">
              <ul className="space-y-4">
                {NAVIGATION.map((item, index) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap];
                  const isActive = pathname === item.href;
                  
                  return (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.12 + (index * 0.04) }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                setIsMobileMenuOpen(false);
              }}
                        className={cn(
                          "flex items-center gap-4 px-4 py-3 rounded-lg text-base font-medium transition-colors",
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        )}
                      >
                        <Icon className="w-6 h-6" />
                        <span>{item.name}</span>
                        {isActive && <div className="ml-auto w-2 h-2 bg-white rounded-full" />}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Footer Links */}
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.28 }}
                >
                  <Link
                    href="https://www.cake.me/weichiangko"
                    target="_blank"
                    onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                    className="flex items-center gap-4 px-4 py-3 text-base text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                  >
                    <FileText className="w-6 h-6" />
                    <span>Resume</span>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.32 }}
                >
                  <Link
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                    className="flex items-center gap-4 px-4 py-3 text-base text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span>LinkedIn</span>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.36 }}
                >
                  <Link
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                    className="flex items-center gap-4 px-4 py-3 text-base text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                  >
                    <Github className="w-6 h-6" />
                    <span>GitHub</span>
                  </Link>
                </motion.li>
              </ul>
            </nav>

            {/* Available for Projects & Contact - Fixed Bottom */}
            <div className="p-8 space-y-4 border-t border-gray-200 bg-white">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.36 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2 text-sm text-gray-600 px-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Available for Projects
                </div>
                <Link
                  href="/contact"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                  className="block bg-black text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-900 transition-colors text-center"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
            </motion.div>
          </div>
        )}
        </AnimatePresence>
      </MotionConfig>
    </>
  );
}