"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Coffee, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
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
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
      scrolled ? "bg-dark-espresso/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-burnt-sienna" />
          <span className="font-serif text-xl font-bold tracking-tight">Paradise <span className="accent-text">SP</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#menu" className="text-almond-cream/90 hover:text-almond-cream transition-colors">
            Menu
          </Link>
          <Link href="#gallery" className="text-almond-cream/90 hover:text-almond-cream transition-colors">
            Gallery
          </Link>
          <Link href="#location" className="text-almond-cream/90 hover:text-almond-cream transition-colors">
            Location
          </Link>
          <Link href="#about" className="text-almond-cream/90 hover:text-almond-cream transition-colors">
            About
          </Link>
          <Button variant="premium" size="sm" className="ml-4 rounded-full subtle-border">
            Order Now
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-almond-cream"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-espresso/95 backdrop-blur-lg">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link 
              href="#menu" 
              className="text-lg py-2 border-b border-copper-rose/20 text-almond-cream/90 hover:text-almond-cream"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link 
              href="#gallery" 
              className="text-lg py-2 border-b border-copper-rose/20 text-almond-cream/90 hover:text-almond-cream"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="#location" 
              className="text-lg py-2 border-b border-copper-rose/20 text-almond-cream/90 hover:text-almond-cream"
              onClick={() => setIsOpen(false)}
            >
              Location
            </Link>
            <Link 
              href="#about" 
              className="text-lg py-2 border-b border-copper-rose/20 text-almond-cream/90 hover:text-almond-cream"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Button variant="premium" size="lg" className="mt-4 w-full rounded-full subtle-border">
              Order Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}