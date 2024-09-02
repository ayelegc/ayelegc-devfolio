"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const previousScrollYProgress = useRef(scrollYProgress.get());

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - previousScrollYProgress.current;
      previousScrollYProgress.current = current;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-gray-300 shadow-lg items-center justify-center space-x-4 bg-white",
            className
          )}
          style={{
            backdropFilter: "blur(8px) saturate(180%)",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={idx}
              href={navItem.link}
              className="relative flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-bold transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              {navItem.icon && <span className="block">{navItem.icon}</span>}
              <span className="text-sm">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
