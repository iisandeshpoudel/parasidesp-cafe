"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'

export function OrderButton() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 300) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <div 
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-500",
        scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <Button 
        variant="premium" 
        size="lg" 
        className="rounded-full shadow-lg elegant-glow subtle-border hover-lift flex items-center gap-2"
      >
        <ShoppingBag className="h-5 w-5" />
        <span>Order Now</span>
      </Button>
    </div>
  )
}