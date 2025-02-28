import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Paradise SP Cafe | Premium Coffee & Dining Experience',
  description: 'Experience the ultimate artisan cafe with premium coffee, breakfast, lunch, dinner, and desserts in a cozy, sophisticated atmosphere.',
  keywords: 'cafe, coffee shop, artisan coffee, breakfast, lunch, dinner, desserts, premium dining',
  openGraph: {
    title: 'Paradise SP Cafe | Premium Coffee & Dining Experience',
    description: 'Experience the ultimate artisan cafe with premium coffee, breakfast, lunch, dinner, and desserts in a cozy, sophisticated atmosphere.',
    url: 'https://paradisespcafe.com',
    siteName: 'Paradise SP Cafe',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Paradise SP Cafe - Premium Coffee Experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${playfair.variable} ${cormorant.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}