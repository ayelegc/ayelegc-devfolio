"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 2000, // Default duration
  className,
  ...otherProps
}: ButtonProps) {
  return (
    <Component
      className={cn(
        "relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1 transition-transform transform hover:scale-105 active:scale-95",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0 rounded-[1.75rem]"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/10 border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased transition-transform transform hover:scale-105 active:scale-95",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: MovingBorderProps) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
          border: "2px solid rgba(0, 0, 0, 0.2)", // Light border for a subtle effect
          transition: "border-color 0.3s ease",
        }}
        whileHover={{ borderColor: "#CBACF9" }} // Change border color on hover
        whileTap={{ borderColor: "#A678D1" }} // Change border color on click
      >
        {children}
      </motion.div>
    </>
  );
};
