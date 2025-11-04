import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  details: string;
  image: string;
}

const ServiceCard = ({ title, description, details, image }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-border/50">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        <CardDescription className="text-base text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground leading-relaxed">{details}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
