"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Mail, FileText, Linkedin, Github } from "lucide-react";
import { NAVIGATION, PERSONAL_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.25, 
                ease: "easeOut"
              }}
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            />
            
            {/* Background Card that scales */}
            <motion.div
              initial={{ 
                borderRadius: "12px",
                x: "16px",
                y: "16px",
                width: "calc(100vw - 32px)",
                height: "80px"
              }}
              animate={{ 
                borderRadius: "0px",
                x: 0,
                y: 0,
                width: "100vw",
                height: "100vh"
              }}
              exit={{ 
                scale: 0.85,
                opacity: 0,
                transition: { duration: 0.15, ease: "easeOut" }
              }}
              transition={{ 
                duration: 0.15, 
                ease: "easeOut"
              }}
              className="absolute bg-white"
            />
            
            {/* Content overlay that fades independently */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.2, 
                ease: "easeOut"
              }}
              className="relative w-full h-full flex flex-col"
            >
            {/* Header with profile and close button */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                delay: 0.15,
                duration: 0.2, 
                ease: "easeOut"
              }}
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
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        delay: 0.2 + (index * 0.05), 
                        duration: 0.2, 
                        ease: "easeOut"
                      }}
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    delay: 0.4, 
                    duration: 0.2, 
                    ease: "easeOut"
                  }}
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    delay: 0.45, 
                    duration: 0.2, 
                    ease: "easeOut"
                  }}
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    delay: 0.5, 
                    duration: 0.2, 
                    ease: "easeOut"
                  }}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  delay: 0.5, 
                  duration: 0.2, 
                  ease: "easeOut"
                }}
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
    </>
  );
}