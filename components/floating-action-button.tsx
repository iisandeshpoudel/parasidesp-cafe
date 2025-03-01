import Link from "next/link";
import { ArrowRight, Coffee } from "lucide-react";

export default function FloatingActionButton() {
  return (
    <div className="relative">
      {/* Steam animation container */}
      <div className="steam-container">
        <div className="steam-particle"></div>
        <div className="steam-particle"></div>
        <div className="steam-particle"></div>
      </div>

      <Link
        href="#order"
        className="fixed bottom-6 right-6 z-50 bg-cinnamon-rose hover:bg-cinnamon-rose/90 text-almond-cream font-bold px-8 py-3 rounded-full shadow-lg flex items-center gap-3 border-glow premium-button shimmer-effect ripple-effect magnetic-button pulsating-aura animated-arrow-parent scale-on-hover coffee-icon-parent"
      >
        <span className="relative z-10 flex items-center gap-3">
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
  );
}
