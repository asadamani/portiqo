import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-subtle">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Portfolio Builder</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Build Your Creative{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Portfolio
              </span>{" "}
              in Minutes
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              The fastest way for designers and artists to create stunning portfolios and professional resumes. 
              No coding required. No design skills needed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-6 h-auto group"
              >
                Get Started Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 h-auto"
              >
                View Examples
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Portfolios Created</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">120+</div>
                <div className="text-sm text-muted-foreground">Templates</div>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative lg:h-[600px] rounded-2xl overflow-hidden shadow-custom-lg">
            <img 
              src={heroImage} 
              alt="Designer working on portfolio" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};
