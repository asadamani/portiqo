import { Card } from "@/components/ui/card";
import { Palette, FileText, Sparkles, Users, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Portfolio Builder",
    description: "Upload your work, organize projects, and create stunning case studies with our intuitive drag-and-drop interface.",
    gradient: "from-primary to-primary-light",
  },
  {
    icon: FileText,
    title: "Resume Generator",
    description: "Auto-generate professional resumes from your profile. Export as PDF or display directly on your portfolio site.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Sparkles,
    title: "AI Assistant",
    description: "Get smart suggestions for project descriptions, bio writing, and even color scheme recommendations powered by AI.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Globe,
    title: "Instant Publishing",
    description: "Get your personal portfolio link instantly. Share it with clients, on social media, or in job applications.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Users,
    title: "Discovery Network",
    description: "Browse portfolios from designers worldwide. Get inspired and connect with other creatives in your field.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Build and publish your portfolio in under 10 minutes. No technical knowledge required. Just your creativity.",
    gradient: "from-accent to-secondary",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Showcase Your Work
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed specifically for creative professionals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-custom-lg transition-all duration-300 border-border hover:border-primary/30 group cursor-pointer bg-card"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
