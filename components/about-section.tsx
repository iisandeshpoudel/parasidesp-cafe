export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-charcoal-roast relative grain">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-almond-cream">Our Story</h2>
          <p className="text-lg text-almond-cream/80 max-w-2xl mx-auto">
            Crafting exceptional coffee experiences since 2010
          </p>
        </div>
        
        <div className="glass rounded-lg p-8 depth-shadow">
          <div className="prose prose-invert max-w-none">
            <p className="text-almond-cream/90 mb-6">
              Paradise SP Cafe was born from a passion for exceptional coffee and a desire to create a space where people could gather, connect, and enjoy artisanal food and beverages in a warm, inviting atmosphere.
            </p>
            
            <p className="text-almond-cream/90 mb-6">
              Our journey began in 2010 when our founder, after years of traveling the world and experiencing diverse coffee cultures, decided to bring those experiences back home. Starting with a small roastery, we quickly expanded to our current location, where we've been serving the community ever since.
            </p>
            
            <p className="text-almond-cream/90 mb-6">
              At Paradise SP, we believe in sourcing only the finest ingredients. Our coffee beans are ethically sourced from small-scale farmers around the world, and we roast them in-house to ensure peak freshness and flavor. Our food menu features locally sourced, seasonal ingredients whenever possible, prepared with care by our talented culinary team.
            </p>
            
            <p className="text-almond-cream/90">
              Whether you're stopping by for your morning coffee, meeting friends for brunch, or enjoying a quiet dinner, we strive to make every visit to Paradise SP Cafe a memorable experience. We're more than just a cafe – we're a community hub, a workspace, a meeting place, and a sanctuary for coffee lovers and food enthusiasts alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}