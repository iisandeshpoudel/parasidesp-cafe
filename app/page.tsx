import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { MenuSection } from '@/components/menu-section'
import { GallerySection } from '@/components/gallery-section'
import { LocationSection } from '@/components/location-section'
import { AboutSection } from '@/components/about-section'
import { Footer } from '@/components/footer'
import { OrderButton } from '@/components/order-button'

export const metadata: Metadata = {
  title: 'Paradise SP Cafe | Premium Coffee & Dining Experience',
  description: 'Experience the ultimate artisan cafe with premium coffee, breakfast, lunch, dinner, and desserts in a cozy, sophisticated atmosphere.',
  keywords: 'cafe, coffee shop, artisan coffee, breakfast, lunch, dinner, desserts, premium dining',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-espresso text-almond-cream">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <GallerySection />
      <LocationSection />
      <AboutSection />
      <Footer />
      <OrderButton />
    </main>
  )
}