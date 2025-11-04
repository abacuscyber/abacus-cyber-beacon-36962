import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible."
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  return <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Contact Form */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
          <CardDescription>Fill out the form and we'll respond promptly</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                Name *
              </label>
              <Input id="contact-name" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} placeholder="Your name" required />
            </div>

            <div>
              <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                Email *
              </label>
              <Input id="contact-email" type="email" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} placeholder="your@email.com" required />
            </div>

            <div>
              <label htmlFor="contact-subject" className="text-sm font-medium text-foreground">
                Subject
              </label>
              <Input id="contact-subject" value={formData.subject} onChange={e => setFormData({
              ...formData,
              subject: e.target.value
            })} placeholder="How can we help?" />
            </div>

            <div>
              <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                Message *
              </label>
              <Textarea id="contact-message" value={formData.message} onChange={e => setFormData({
              ...formData,
              message: e.target.value
            })} placeholder="Your message..." rows={4} required />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <div className="space-y-6">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
            <CardDescription>Reach out through any of these channels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <a href="mailto:info@abacuscyber.com" className="text-accent hover:underline">
                  info@abacuscyber.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              
              <div>
                <h4 className="font-semibold text-foreground mb-1">
              </h4>
                <a href="tel:+15551234567" className="text-accent hover:underline"></a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                <p className="text-muted-foreground text-sm">24/7 Emergency Response Available</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Button onClick={() => window.location.href = "mailto:info@abacuscyber.com"} variant="default" className="w-full" size="lg">
            <Mail className="mr-2 h-5 w-5" />
            Email Us
          </Button>
          
        </div>
      </div>
    </div>;
};
export default ContactSection;