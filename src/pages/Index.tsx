import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import AssessmentForm from "@/components/AssessmentForm";
import ContactSection from "@/components/ContactSection";
import { Shield, Cloud, FileCheck, Lightbulb, Users, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cyber.jpg";
import mdrImage from "@/assets/mdr-security.jpg";
import cloudImage from "@/assets/cloud-security.jpg";
import complianceImage from "@/assets/compliance.jpg";
import aiStrategyImage from "@/assets/ai-strategy.jpg";
const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: `linear-gradient(rgba(21, 50, 91, 0.85), rgba(21, 50, 91, 0.85)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            AbacusCyber Consulting
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">Enterprise-Grade Cybersecurity & AI Strategy Solutions 
 for Medium to Large Enterprises</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" onClick={() => scrollToSection("assessment")} className="bg-accent hover:bg-accent/90 text-white">
              Get Free Assessment
            </Button>
            <Button size="lg" variant="secondary" onClick={() => scrollToSection("cybersecurity")}>
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Cybersecurity Services */}
      <section id="cybersecurity" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Cybersecurity Offerings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security solutions to protect your enterprise from evolving threats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title="Managed Detection & Response (MDR)" description="SOC-as-a-Service" details="24/7/365 threat monitoring, detection, and response capabilities with expert security analysts and advanced technology. We act as your outsourced Security Operations Center, providing proactive defense against sophisticated cyberattacks, ensuring threats are identified and neutralized in real-time." image={mdrImage} />
            <ServiceCard title="Cloud Security & DevSecOps" description="Secure Cloud Transformation" details="End-to-end guidance for secure cloud adoption, integrating security controls into your entire development lifecycle. From secure architecture design for AWS and Azure to implementing automated security testing, ensuring your cloud-native applications are protected from the outset." image={cloudImage} />
            <ServiceCard title="Compliance & Advisory" description="ISO 27001, SOC 2, Regional Regulations" details="Navigate the complex landscape of federal, state, and industry-specific regulations from HIPAA to SOC 2. We perform compliance gap analyses and build robust, strategic security postures that meet your unique regulatory obligations, protecting your reputation and avoiding costly penalties." image={complianceImage} />
          </div>
        </div>
      </section>

      {/* AI Strategy Services */}
      <section id="ai-strategy" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              AI Business Strategy & Advisory
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your business with strategic AI implementation and expert guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">AI Business Strategy Workshops</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Demystify artificial intelligence and identify tangible AI opportunities within your organization. Through collaborative workshops, we guide you in understanding AI's strategic potential, assessing current capabilities, and building a practical roadmap for business growth.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg border border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">Strategic Planning Sessions</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Expert-led sessions focused on developing clear, actionable plans for AI initiatives. We help define objectives, align AI projects with core business goals, and create phased implementation strategies ensuring measurable results and competitive advantage.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border/50 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 z-0" style={{
              backgroundImage: `url(${aiStrategyImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }} />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <BarChart className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">Tech Tool Advisory & Analysis</h3>
                </div>
                <p className="text-foreground leading-relaxed">
                  The AI tools landscape is vast and rapidly evolving. Our advisory service provides clear analysis of technology options best suited to your specific needs and strategic goals. We help you evaluate, select, and integrate the right AI tools, saving time and money while optimizing your technology stack for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Assessment Section */}
      <section id="assessment" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AssessmentForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to secure your business? Contact us today for a consultation
            </p>
          </div>
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">AbacusCyber Consulting</h3>
              <p className="text-primary-foreground/80">
                Enterprise cybersecurity and AI strategy solutions for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection("cybersecurity")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Cybersecurity Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("ai-strategy")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    AI Strategy
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("assessment")} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Free Assessment
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>info@abacuscyber.com</li>
                
                <li>24/7 Emergency Response</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 AbacusCyber Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;