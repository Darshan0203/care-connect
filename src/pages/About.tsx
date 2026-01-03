import { PublicLayout } from "@/components/layout/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  Heart,
  Clock,
  Building,
  Globe,
  Target,
  Eye,
  ArrowRight,
} from "lucide-react";

const milestones = [
  { year: "1999", title: "Founded", description: "MedCare was established with a vision to provide accessible healthcare" },
  { year: "2005", title: "JCI Accreditation", description: "Received our first Joint Commission International accreditation" },
  { year: "2012", title: "Multi-Specialty Expansion", description: "Expanded to 15+ specialized departments" },
  { year: "2018", title: "Digital Transformation", description: "Launched patient portal and telemedicine services" },
  { year: "2024", title: "50,000+ Patients", description: "Celebrated serving over 50,000 patients annually" },
];

const values = [
  { icon: Heart, title: "Compassion", description: "We treat every patient with empathy, dignity, and respect" },
  { icon: Award, title: "Excellence", description: "We strive for the highest standards in medical care and service" },
  { icon: Users, title: "Teamwork", description: "Collaborative care between patients, families, and medical teams" },
  { icon: Target, title: "Innovation", description: "Embracing cutting-edge technology and treatment methods" },
];

const About = () => {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
                25 Years of <span className="text-primary">Healing</span> Lives
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 1999, MedCare Hospital has been at the forefront of medical excellence, 
                providing comprehensive healthcare services to our community with compassion and cutting-edge technology.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link to="/book-appointment">
                    Book Appointment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                alt="MedCare Hospital Building"
                className="rounded-2xl shadow-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, value: "25+", label: "Years of Service" },
              { icon: Users, value: "200+", label: "Expert Doctors" },
              { icon: Building, value: "5", label: "Hospital Branches" },
              { icon: Globe, value: "50K+", label: "Patients Served" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional, patient-centered healthcare that improves the health 
                  and well-being of our community. We are committed to delivering the highest 
                  quality medical services with compassion, integrity, and innovation.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/20 mb-4">
                  <Eye className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading healthcare provider in the region, recognized for 
                  excellence in patient care, medical education, and research. We envision 
                  a healthier community where everyone has access to world-class healthcare.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at MedCare
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in MedCare's history of excellence
            </p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border" />
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center gap-8 mb-8 animate-fade-in ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-card p-4 rounded-lg border border-border shadow-soft">
                    <span className="text-sm font-bold text-primary">{milestone.year}</span>
                    <h3 className="font-semibold mt-1">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-primary border-4 border-background" />
                </div>
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience MedCare?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Join the thousands of patients who trust MedCare for their healthcare needs.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/book-appointment">
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default About;
