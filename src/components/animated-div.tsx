"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type HTMLAttributes } from "react";

interface AnimatedDivProps extends HTMLAttributes<HTMLDivElement> {
  animationClass: string;
  delay?: number;
}

export function AnimatedDiv({
  children,
  className,
  animationClass,
  delay = 0,
  ...props
}: AnimatedDivProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000",
        isVisible ? animationClass : "opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
