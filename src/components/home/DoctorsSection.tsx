import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Calendar } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    experience: "15+ years",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
    available: true,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    experience: "20+ years",
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
    available: true,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    experience: "12+ years",
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
    available: false,
  },
  {
    id: 4,
    name: "Dr. James Williams",
    specialty: "Orthopedics",
    experience: "18+ years",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
    available: true,
  },
];

export function DoctorsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Our Experts
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Meet Our Top Doctors
            </h2>
            <p className="text-muted-foreground">
              Board-certified physicians with decades of experience providing 
              exceptional patient care.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/doctors">
              View All Doctors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Doctor Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <Card
              key={doctor.id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                
                {/* Availability Badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={doctor.available ? "default" : "secondary"}
                    className={doctor.available ? "bg-success hover:bg-success" : ""}
                  >
                    {doctor.available ? "Available Today" : "Next Week"}
                  </Badge>
                </div>

                {/* Quick Book Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <Button asChild className="w-full" size="sm">
                    <Link to={`/book-appointment?doctor=${doctor.id}`}>
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Now
                    </Link>
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                <p className="text-sm text-primary font-medium">{doctor.specialty}</p>
                <p className="text-xs text-muted-foreground mt-1">{doctor.experience} experience</p>
                
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({doctor.reviews} reviews)
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
