import Link from 'next/link'
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark-espresso py-12 px-4 relative grain">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8 text-burnt-sienna" />
              <span className="font-serif text-xl font-bold tracking-tight">Paradise <span className="accent-text">SP</span></span>
            </Link>
            
            <p className="text-almond-cream/70 text-sm mb-6">
              Premium artisan coffee and dining experience in the heart of San Francisco.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-almond-cream/70 hover:text-burnt-sienna transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-almond-cream/70 hover:text-burnt-sienna transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-almond-cream/70 hover:text-burnt-sienna transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-almond-cream">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#menu" className="text-almond-cream/70 hover:text-burnt-sienna transition-colors text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-almond-cream/70 hover:text-burnt-sienna transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-almond-cream/70 hover:text-burnt-sienna transition-colors text-sm">
                  Location
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-almond-cream/70 hover:text-burnt-sienna transition-colors text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-almond-cream">Hours</h3>
            <ul className="space-y-2">
              <li className="text-almond-cream/70 text-sm">Monday - Friday: 7am - 8pm</li>
              <li className="text-almond-cream/70 text-sm">Saturday - Sunday: 8am - 9pm</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-almond-cream">Contact</h3>
            <ul className="space-y-2">
              <li className="text-almond-cream/70 text-sm">123 Coffee Street</li>
              <li className="text-almond-cream/70 text-sm">San Francisco, CA 94103</li>
              <li className="text-almond-cream/70 text-sm">(555) 123-4567</li>
              <li className="text-almond-cream/70 text-sm">hello@paradisespcafe.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-copper-rose/20 mt-12 pt-8 text-center">
          <p className="text-almond-cream/60 text-sm">
            &copy; {currentYear} Paradise <span className="accent-text">SP</span> Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}