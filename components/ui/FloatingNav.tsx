"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", () => {
    const currentScrollPos = scrollYProgress.get();
    const previousScrollPos = scrollYProgress.getPrevious() ?? 0; // Fallback to 0 if undefined
    const direction = currentScrollPos - previousScrollPos;

    if (currentScrollPos < 0.05) {
      setVisible(false);
    } else {
      setVisible(direction < 0);
    }
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed top-10 inset-x-0 mx-auto max-w-fit px-8 py-2 flex items-center justify-center space-x-4 border dark:border-white/[0.2] rounded-full bg-white dark:bg-black shadow-lg z-50",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={idx}
              href={navItem.link}
              className="flex items-center space-x-1 text-sm text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </Link>
          ))}
          <button className="px-4 py-2 text-sm font-medium text-black dark:text-white border rounded-full border-neutral-200 dark:border-white/[0.2] relative">
            Login
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
