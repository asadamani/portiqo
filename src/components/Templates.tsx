import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const templates = [
  {
    name: "Minimal Studio",
    category: "Clean & Professional",
    color: "from-slate-400 to-slate-600",
  },
  {
    name: "Creative Bold",
    category: "Vibrant & Energetic",
    color: "from-rose-400 to-orange-500",
  },
  {
    name: "Dark Elegance",
    category: "Sophisticated & Modern",
    color: "from-violet-500 to-purple-700",
  },
  {
    name: "Photography Focus",
    category: "Image-First Layout",
    color: "from-emerald-400 to-teal-600",
  },
  {
    name: "Designer Showcase",
    category: "Grid & Masonry",
    color: "from-blue-400 to-indigo-600",
  },
  {
    name: "Illustrator Pro",
    category: "Artistic & Playful",
    color: "from-amber-400 to-pink-500",
  },
];

export const Templates = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Beautiful Templates for Every{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Creative Style
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose from over 120 professionally designed templates. Fully customizable to match your brand.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {templates.map((template, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-custom-lg transition-all duration-300 group cursor-pointer border-border hover:border-primary/30"
            >
              <div className={`h-64 bg-gradient-to-br ${template.color} relative`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Preview
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {template.name}
                </h3>
                <p className="text-sm text-muted-foreground">{template.category}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Browse All Templates
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
