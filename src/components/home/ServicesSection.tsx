import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Ambulance,
  Video,
  TestTube,
  Pill,
  FileText,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    name: "Emergency Care",
    description: "24/7 emergency services with rapid response and trauma care",
    icon: Ambulance,
    href: "/services/emergency",
    color: "bg-emergency/10 text-emergency",
  },
  {
    name: "Telemedicine",
    description: "Virtual consultations from the comfort of your home",
    icon: Video,
    href: "/services/telemedicine",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Lab & Diagnostics",
    description: "Advanced diagnostic services with quick turnaround",
    icon: TestTube,
    href: "/services/lab",
    color: "bg-success/10 text-success",
  },
  {
    name: "Pharmacy",
    description: "In-house pharmacy with home delivery options",
    icon: Pill,
    href: "/services/pharmacy",
    color: "bg-warning/10 text-warning",
  },
  {
    name: "Health Records",
    description: "Secure digital access to your medical history",
    icon: FileText,
    href: "/patient-portal/records",
    color: "bg-info/10 text-info",
  },
  {
    name: "Insurance & Billing",
    description: "Cashless treatment and easy claim processing",
    icon: CreditCard,
    href: "/services/billing",
    color: "bg-secondary/20 text-secondary-foreground",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider mb-2">
            Patient Services
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Healthcare Made Simple
          </h2>
          <p className="text-primary-foreground/80">
            From emergency care to digital health records, we provide seamless 
            healthcare experiences at every touchpoint.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.name}
              to={service.href}
              className="group relative rounded-xl bg-primary-foreground/10 p-6 backdrop-blur transition-all duration-300 hover:bg-primary-foreground/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${service.color} mb-4`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
              <p className="text-sm text-primary-foreground/70">{service.description}</p>
              <ArrowRight className="absolute right-6 bottom-6 h-5 w-5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="secondary">
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
