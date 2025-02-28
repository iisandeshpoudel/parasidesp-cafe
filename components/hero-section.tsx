"use client"

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return
      
      const layers = parallaxRef.current.querySelectorAll('.parallax-layer')
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const mouseX = e.clientX
      const mouseY = e.clientY
      
      const moveX = (mouseX - centerX) / 50
      const moveY = (mouseY - centerY) / 50
      
      layers.forEach((layer) => {
        const el = layer as HTMLElement
        const depth = parseFloat(el.getAttribute('data-depth') || '0')
        const translateX = moveX * depth
        const translateY = moveY * depth
        
        el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`
      })
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  return (
    <section className="relative h-screen w-full overflow-hidden grain">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-60"
          poster="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-pouring-coffee-in-a-cup-seen-from-above-21520-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-espresso/70 via-dark-espresso/50 to-dark-espresso"></div>
      </div>
      
      {/* Parallax Content */}
      <div ref={parallaxRef} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 parallax">
        <div className="parallax-layer" data-depth="0.2">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-almond-cream animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Paradise <span className="accent-text">SP</span> Cafe
          </h1>
        </div>
        
        <div className="parallax-layer" data-depth="0.4">
          <p className="text-xl md:text-2xl text-almond-cream/90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Experience the ultimate artisan coffee and dining in a warm, sophisticated atmosphere
          </p>
        </div>
        
        <div className="parallax-layer" data-depth="0.6">
          <Button 
            variant="premium" 
            size="xl" 
            className="rounded-full elegant-glow subtle-border animate-fade-in hover-lift"
            style={{ animationDelay: '0.9s' }}
          >
            Order Now
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <a href="#menu" className="flex flex-col items-center text-almond-cream/80 hover:text-almond-cream transition-colors">
            <span className="text-sm mb-2">Explore Menu</span>
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}