import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">AbacusCyber</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("cybersecurity")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Cybersecurity
            </button>
            <button
              onClick={() => scrollToSection("ai-strategy")}
              className="text-foreground hover:text-accent transition-colors"
            >
              AI Strategy
            </button>
            <button
              onClick={() => scrollToSection("assessment")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Free Assessment
            </button>
            <Button onClick={() => scrollToSection("contact")}>Get in Touch</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("cybersecurity")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Cybersecurity
            </button>
            <button
              onClick={() => scrollToSection("ai-strategy")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              AI Strategy
            </button>
            <button
              onClick={() => scrollToSection("assessment")}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Free Assessment
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full">
              Get in Touch
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
