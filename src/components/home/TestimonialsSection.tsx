import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Robert Martinez",
    role: "Heart Surgery Patient",
    content: "The cardiac team at MedCare saved my life. From diagnosis to recovery, the care I received was exceptional. Dr. Johnson and her team made me feel confident throughout my bypass surgery.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Lisa Thompson",
    role: "Pediatrics Parent",
    content: "When my daughter was diagnosed with a rare condition, the pediatric specialists here went above and beyond. Their patience, expertise, and genuine care for children is remarkable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Orthopedic Patient",
    content: "After my knee replacement surgery, I was walking pain-free within weeks. The rehabilitation team was incredibly supportive, and the online portal made tracking my recovery so easy.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Patient Stories
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-muted-foreground">
            Real experiences from patients who trusted us with their healthcare journey.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
