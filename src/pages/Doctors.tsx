import { useState } from "react";
import { Link } from "react-router-dom";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Search, Calendar, Filter } from "lucide-react";

const allDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    experience: "15+ years",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
    available: true,
    education: "Harvard Medical School",
    languages: ["English", "Spanish"],
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
    education: "Johns Hopkins University",
    languages: ["English", "Mandarin"],
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
    education: "Stanford University",
    languages: ["English", "Spanish"],
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
    education: "Yale Medical School",
    languages: ["English"],
  },
  {
    id: 5,
    name: "Dr. Priya Patel",
    specialty: "Dermatology",
    experience: "10+ years",
    rating: 4.8,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80",
    available: true,
    education: "Columbia University",
    languages: ["English", "Hindi"],
  },
  {
    id: 6,
    name: "Dr. David Kim",
    specialty: "General Medicine",
    experience: "14+ years",
    rating: 4.6,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
    available: true,
    education: "UCLA Medical School",
    languages: ["English", "Korean"],
  },
  {
    id: 7,
    name: "Dr. Amanda Foster",
    specialty: "Oncology",
    experience: "16+ years",
    rating: 4.9,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&w=400&q=80",
    available: false,
    education: "Mayo Clinic",
    languages: ["English"],
  },
  {
    id: 8,
    name: "Dr. Robert Singh",
    specialty: "Cardiology",
    experience: "22+ years",
    rating: 4.8,
    reviews: 389,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80",
    available: true,
    education: "Cleveland Clinic",
    languages: ["English", "Hindi", "Punjabi"],
  },
];

const specialties = [
  "All Specialties",
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Dermatology",
  "General Medicine",
  "Oncology",
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filteredDoctors = allDoctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "All Specialties" || doctor.specialty === selectedSpecialty;
    const matchesAvailability = !showAvailableOnly || doctor.available;
    return matchesSearch && matchesSpecialty && matchesAvailability;
  });

  return (
    <PublicLayout>
      <div className="bg-primary/5 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-foreground mb-4">Find a Doctor</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Search our network of experienced physicians and book an appointment with the right specialist for your needs.
          </p>
        </div>
      </div>

      <div className="container py-8">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-card rounded-lg border border-border">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              {specialties.map((specialty) => (
                <SelectItem key={specialty} value={specialty}>
                  {specialty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant={showAvailableOnly ? "default" : "outline"}
            onClick={() => setShowAvailableOnly(!showAvailableOnly)}
          >
            <Filter className="mr-2 h-4 w-4" />
            Available Today
          </Button>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredDoctors.length} doctors
        </p>

        {/* Doctor Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDoctors.map((doctor, index) => (
            <Card
              key={doctor.id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={doctor.available ? "default" : "secondary"}
                    className={doctor.available ? "bg-success hover:bg-success" : ""}
                  >
                    {doctor.available ? "Available Today" : "Next Week"}
                  </Badge>
                </div>

                <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <Button asChild className="w-full" size="sm">
                    <Link to={`/book-appointment?doctor=${doctor.id}`}>
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                <p className="text-sm text-primary font-medium">{doctor.specialty}</p>
                <p className="text-xs text-muted-foreground mt-1">{doctor.experience} experience</p>
                <p className="text-xs text-muted-foreground">{doctor.education}</p>
                
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({doctor.reviews} reviews)
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mt-2">
                  {doctor.languages.map((lang) => (
                    <Badge key={lang} variant="outline" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No doctors found matching your criteria.</p>
            <Button variant="link" onClick={() => { setSearchTerm(""); setSelectedSpecialty("All Specialties"); setShowAvailableOnly(false); }}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </PublicLayout>
  );
};

export default Doctors;
