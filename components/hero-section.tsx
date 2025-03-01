"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown, Coffee } from "lucide-react";

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate movement based on distance from center
      const centerX = windowWidth / 2;
      const centerY = windowHeight / 2;
      const moveX = (mouseX - centerX) / 25; // Increased sensitivity
      const moveY = (mouseY - centerY) / 25;

      const layers = document.querySelectorAll(".parallax-layer");
      layers.forEach((layer) => {
        const el = layer as HTMLElement;
        const depth = parseFloat(el.getAttribute("data-depth") || "0");
        const translateX = moveX * depth;
        const translateY = moveY * depth;
        el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden grain">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 parallax-layer" data-depth="0.1">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-60"
          poster="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-pouring-coffee-in-a-cup-seen-from-above-21520-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-espresso/70 via-dark-espresso/50 to-dark-espresso"></div>
      </div>

      {/* Parallax Content */}
      <div
        ref={parallaxRef}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 parallax"
      >
        <div className="parallax-layer" data-depth="0.4">
          <h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-reveal"
            style={{ animationDelay: "0.3s" }}
          >
            Paradise <span className="gradient-text">SP</span> Cafe
          </h1>
        </div>

        <div className="parallax-layer" data-depth="0.6">
          <p
            className="text-xl md:text-2xl text-almond-cream/90 max-w-2xl mx-auto mb-16 text-reveal-delayed hover-transition"
            style={{ animationDelay: "0.6s" }}
          >
            Experience the ultimate artisan coffee and dining in a warm,
            sophisticated atmosphere
          </p>
        </div>

        <div className="parallax-layer mt-12" data-depth="0.8">
          <div className="relative">
            {/* Enhanced Steam animation container */}
            <div className="steam-container">
              <div className="steam-particle"></div>
              <div className="steam-particle"></div>
              <div className="steam-particle"></div>
            </div>

            <Link
              href="#order"
              className="bg-cinnamon-rose hover:bg-cinnamon-rose/90 text-almond-cream font-bold px-10 py-4 rounded-full inline-flex items-center gap-3 shadow-lg premium-button border-glow shimmer-effect ripple-effect magnetic-button pulsating-aura animated-arrow-parent hover-transition relative group scale-on-hover coffee-icon-parent"
              style={{ animationDelay: "0.9s" }}
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                <Coffee
                  className="h-6 w-6 transition-transform coffee-icon"
                  strokeWidth={2.5}
                />
                <span className="font-bold tracking-wide">Order Now</span>
                <ArrowRight
                  className="h-6 w-6 transition-transform animated-arrow"
                  strokeWidth={2.5}
                />
              </span>
            </Link>
          </div>
        </div>

        <div
          className="parallax-layer absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator"
          data-depth="0.3"
        >
          <a
            href="#menu"
            className="flex flex-col items-center text-almond-cream/80 hover:text-almond-cream hover-transition"
          >
            <span className="text-sm mb-2">Explore Menu</span>
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
