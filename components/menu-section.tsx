"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: "coffee",
    name: "Coffee",
    items: [
      {
        id: "espresso",
        name: "Signature Espresso",
        description: "Our house blend with notes of chocolate and caramel",
        price: "$3.50",
        image:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "latte",
        name: "Artisan Latte",
        description: "Smooth espresso with velvety steamed milk and latte art",
        price: "$4.75",
        image:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "cappuccino",
        name: "Classic Cappuccino",
        description: "Equal parts espresso, steamed milk, and silky foam",
        price: "$4.50",
        image:
          "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "pour-over",
        name: "Single Origin Pour Over",
        description: "Hand-poured coffee highlighting unique flavor profiles",
        price: "$5.25",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: "breakfast",
    name: "Breakfast",
    items: [
      {
        id: "avocado-toast",
        name: "Artisan Avocado Toast",
        description:
          "Sourdough bread with smashed avocado, poached egg, and microgreens",
        price: "$12.50",
        image:
          "https://images.unsplash.com/photo-1603046891744-76e6300f82ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "breakfast-bowl",
        name: "Paradise Breakfast Bowl",
        description:
          "Quinoa, roasted vegetables, poached egg, and house dressing",
        price: "$14.75",
        image:
          "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "french-toast",
        name: "Brioche French Toast",
        description:
          "Thick-cut brioche with maple syrup, berries, and whipped mascarpone",
        price: "$13.50",
        image:
          "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "breakfast-sandwich",
        name: "Gourmet Breakfast Sandwich",
        description:
          "House-made English muffin with egg, aged cheddar, and bacon",
        price: "$11.25",
        image:
          "https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: "lunch",
    name: "Lunch",
    items: [
      {
        id: "chicken-sandwich",
        name: "Crispy Chicken Sandwich",
        description: "Buttermilk fried chicken with house slaw and spicy aioli",
        price: "$15.50",
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "grain-bowl",
        name: "Ancient Grain Bowl",
        description: "Farro, roasted vegetables, avocado, and tahini dressing",
        price: "$14.75",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "burger",
        name: "Paradise Burger",
        description:
          "Grass-fed beef, aged cheddar, caramelized onions, and special sauce",
        price: "$16.50",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "salad",
        name: "Seasonal Market Salad",
        description: "Local greens, seasonal vegetables, house vinaigrette",
        price: "$13.25",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: "dinner",
    name: "Dinner",
    items: [
      {
        id: "steak",
        name: "Grass-Fed Ribeye",
        description:
          "Locally sourced ribeye with herb butter and roasted vegetables",
        price: "$32.00",
        image:
          "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "salmon",
        name: "Cedar Plank Salmon",
        description:
          "Wild-caught salmon with lemon herb sauce and seasonal sides",
        price: "$28.75",
        image:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "pasta",
        name: "Handmade Pasta",
        description:
          "Fresh pasta with seasonal vegetables and house-made sauce",
        price: "$24.50",
        image:
          "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "chicken",
        name: "Roasted Half Chicken",
        description: "Free-range chicken with herb jus and root vegetables",
        price: "$26.25",
        image:
          "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: "chocolate-cake",
        name: "Dark Chocolate Cake",
        description: "Rich chocolate cake with espresso ganache and sea salt",
        price: "$9.50",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "cheesecake",
        name: "Vanilla Bean Cheesecake",
        description: "Creamy cheesecake with seasonal fruit compote",
        price: "$8.75",
        image:
          "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "tiramisu",
        name: "Classic Tiramisu",
        description: "Espresso-soaked ladyfingers with mascarpone cream",
        price: "$8.50",
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "affogato",
        name: "Artisan Affogato",
        description: "House-made vanilla gelato with a shot of espresso",
        price: "$7.25",
        image:
          "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("coffee");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section id="menu" className="py-20 px-4 bg-dark-espresso relative grain">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-almond-cream">
            Our Menu
          </h2>
          <p className="text-lg text-almond-cream/80 max-w-2xl mx-auto">
            Carefully crafted dishes and beverages using the finest ingredients
          </p>
        </div>

        <Tabs
          defaultValue="coffee"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8 bg-transparent">
            {menuData.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className={cn(
                  "data-[state=active]:bg-burnt-sienna data-[state=active]:text-almond-cream",
                  "data-[state=active]:border-burnt-sienna data-[state=active]:shadow-md",
                  "data-[state=active]:scale-105 data-[state=active]:font-semibold",
                  "border border-copper-rose/30 hover:border-copper-rose/60 transition-all",
                  "text-almond-cream/80 hover:text-almond-cream",
                  "transform transition-all duration-200 ease-in-out"
                )}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuData.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <Card
                    key={item.id}
                    className={cn(
                      "overflow-hidden hover-lift glass border-copper-rose/20",
                      "transition-all duration-300 group cursor-pointer",
                      "flex flex-col md:flex-row h-full"
                    )}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div
                      className="relative h-48 md:w-1/3 md:h-auto overflow-hidden"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transform:
                          hoveredItem === item.id ? "scale(1.05)" : "scale(1)",
                        transition: "transform 0.5s ease-out",
                      }}
                    ></div>

                    <div className="p-5 md:w-2/3 flex flex-col justify-between">
                      <div>
                        <h3 className="font-menu text-xl font-semibold mb-2 text-almond-cream">
                          {item.name}
                        </h3>
                        <p className="text-sm text-almond-cream/70 mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-auto">
                        <p
                          className={cn(
                            "text-lg font-menu font-semibold text-golden-amber",
                            "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            hoveredItem === item.id ? "opacity-100" : ""
                          )}
                        >
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
