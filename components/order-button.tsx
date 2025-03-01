"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Coffee, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function OrderButton() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-500",
        scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="relative">
        {/* Steam animation container */}
        <div className="steam-container">
          <div className="steam-particle"></div>
          <div className="steam-particle"></div>
          <div className="steam-particle"></div>
        </div>

        <Link
          href="#order"
          className="bg-cinnamon-rose hover:bg-cinnamon-rose/90 text-almond-cream font-bold px-8 py-3 rounded-full shadow-lg flex items-center gap-3 border-glow premium-button shimmer-effect ripple-effect magnetic-button pulsating-aura animated-arrow-parent scale-on-hover coffee-icon-parent"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Coffee
              className="h-5 w-5 transition-transform coffee-icon"
              strokeWidth={2.5}
            />
            <span className="font-bold tracking-wide">Order Now</span>
            <ArrowRight
              className="h-5 w-5 transition-transform animated-arrow"
              strokeWidth={2.5}
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
