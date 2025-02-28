"use client"

import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LocationSection() {
  return (
    <section id="location" className="py-20 px-4 bg-dark-espresso relative grain">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-almond-cream">Visit Us</h2>
          <p className="text-lg text-almond-cream/80 max-w-2xl mx-auto">
            Find us in the heart of the city, ready to serve you the perfect cup
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="glass rounded-lg p-6 depth-shadow">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold mb-4 text-almond-cream">Hours & Location</h3>
              
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-burnt-sienna mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-almond-cream">123 Coffee Street</p>
                  <p className="text-almond-cream">San Francisco, CA 94103</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Clock className="h-5 w-5 text-burnt-sienna mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-almond-cream">Monday - Friday: 7am - 8pm</p>
                  <p className="text-almond-cream">Saturday - Sunday: 8am - 9pm</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Phone className="h-5 w-5 text-burnt-sienna mr-3 mt-1 flex-shrink-0" />
                <p className="text-almond-cream">(555) 123-4567</p>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-burnt-sienna mr-3 mt-1 flex-shrink-0" />
                <p className="text-almond-cream">hello@paradisespcafe.com</p>
              </div>
            </div>
            
            <Button variant="premium" className="w-full">
              Get Directions
            </Button>
          </div>
          
          <div className="rounded-lg overflow-hidden depth-shadow h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.77791667087!2d-122.43913217412456!3d37.76200627908396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Paradise SP Cafe Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}