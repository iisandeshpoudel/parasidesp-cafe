"use client";

import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function LocationSection() {
  const [openDialog, setOpenDialog] = useState(false);

  // Location details
  const lat = "-33.8165651";
  const lng = "151.2253199";
  const address = "Shop 7/332 Military Rd, Cremorne NSW 2090, Australia";
  const label = "Paradise SP Cafe";

  // Create URLs for different map applications
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=ChIJN7PdvdgRsGoRlm9MCV7SnfQ`;
  const appleMapsUrl = `maps://maps.apple.com/?daddr=${lat},${lng}&dname=${encodeURIComponent(
    label
  )}`;
  const universalUrl = `https://maps.google.com/?q=${encodeURIComponent(
    address
  )}`;

  // Function to detect if user is on iOS
  const isIOSDevice = () => /iPad|iPhone|iPod/.test(navigator.userAgent);

  // Handle opening directions based on platform
  const handleGetDirections = () => {
    // If on iOS, show the option dialog
    if (isIOSDevice()) {
      setOpenDialog(true);
    } else {
      // For Android and other devices, use Google Maps directly
      window.location.href = googleMapsUrl;

      // Fallback to universal URL if the above doesn't work
      setTimeout(() => {
        window.open(universalUrl, "_blank");
      }, 1000);
    }
  };

  // Handle map app selection
  const openMapApp = (mapType: "google" | "apple") => {
    setOpenDialog(false);

    if (mapType === "apple") {
      window.location.href = appleMapsUrl;
    } else {
      window.location.href = googleMapsUrl;
    }
  };

  return (
    <section
      id="location"
      className="py-20 px-4 bg-dark-espresso relative grain"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-almond-cream">
            Visit Us
          </h2>
          <p className="text-lg text-almond-cream/80 max-w-2xl mx-auto">
            Find us in the heart of the city, ready to serve you the perfect cup
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="glass rounded-lg p-6 depth-shadow">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold mb-4 text-almond-cream">
                Hours & Location
              </h3>

              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-burnt-sienna mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-almond-cream">Shop 7/332 Military Rd</p>
                  <p className="text-almond-cream">
                    Cremorne NSW 2090, Australia
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <Clock className="h-5 w-5 text-burnt-sienna mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-almond-cream">
                    Monday - Friday: 7 AM–3 PM
                  </p>
                  <p className="text-almond-cream">Saturday: 7:30 AM–3 PM</p>
                  <p className="text-almond-cream">Sunday: 8 AM–3 PM</p>
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

            <Button
              variant="premium"
              className="w-full"
              onClick={handleGetDirections}
            >
              Get Directions
            </Button>

            {/* Map app selection dialog for iOS users */}
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-center mb-4">
                    Choose Maps App
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={() => openMapApp("apple")}
                    variant="outline"
                    className="w-full"
                  >
                    Open in Apple Maps
                  </Button>
                  <Button
                    onClick={() => openMapApp("google")}
                    variant="default"
                    className="w-full"
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-lg overflow-hidden depth-shadow h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.046087785427!2d151.2253199!3d-33.8165651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aed08bd7d337%3A0xf4d4985e094c6f96!2sShop%207%2F332%20Military%20Rd%2C%20Cremorne%20NSW%202090%2C%20Australia!5e0!3m2!1sen!2s!4v1698651294777!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Paradise SP Cafe Location - Cremorne Plaza"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
