import { Link } from "react-router-dom";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Ambulance,
  Video,
  TestTube,
  Pill,
  FileText,
  CreditCard,
  Stethoscope,
  Heart,
  Brain,
  Microscope,
  Bed,
  Shield,
  ArrowRight,
  Clock,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    category: "Emergency & Critical Care",
    items: [
      {
        name: "24/7 Emergency Care",
        description: "Round-the-clock emergency medical services with rapid response teams",
        icon: Ambulance,
        features: ["Trauma Care", "Cardiac Emergency", "Stroke Response", "Pediatric Emergency"],
        color: "bg-emergency/10 text-emergency",
      },
      {
        name: "Intensive Care Unit",
        description: "State-of-the-art ICU with advanced life support systems",
        icon: Heart,
        features: ["Cardiac ICU", "Neuro ICU", "Surgical ICU", "Neonatal ICU"],
        color: "bg-primary/10 text-primary",
      },
    ],
  },
  {
    category: "Outpatient Services",
    items: [
      {
        name: "Telemedicine",
        description: "Virtual consultations with our specialists from anywhere",
        icon: Video,
        features: ["Video Consults", "E-Prescriptions", "Follow-up Care", "Specialist Access"],
        color: "bg-info/10 text-info",
      },
      {
        name: "Health Checkups",
        description: "Comprehensive preventive health screening packages",
        icon: Stethoscope,
        features: ["Executive Checkup", "Cardiac Screening", "Cancer Screening", "Women's Health"],
        color: "bg-success/10 text-success",
      },
    ],
  },
  {
    category: "Diagnostics",
    items: [
      {
        name: "Laboratory Services",
        description: "Advanced diagnostic testing with quick turnaround",
        icon: TestTube,
        features: ["Blood Tests", "Pathology", "Microbiology", "Genetic Testing"],
        color: "bg-warning/10 text-warning",
      },
      {
        name: "Imaging & Radiology",
        description: "Complete range of medical imaging services",
        icon: Microscope,
        features: ["MRI", "CT Scan", "X-Ray", "Ultrasound"],
        color: "bg-secondary/20 text-secondary-foreground",
      },
    ],
  },
  {
    category: "Specialty Centers",
    items: [
      {
        name: "Cardiac Center",
        description: "Comprehensive heart care from prevention to surgery",
        icon: Heart,
        features: ["Angioplasty", "Bypass Surgery", "Valve Replacement", "Cardiac Rehab"],
        color: "bg-emergency/10 text-emergency",
      },
      {
        name: "Neuroscience Center",
        description: "Expert care for brain and spine conditions",
        icon: Brain,
        features: ["Brain Surgery", "Spine Surgery", "Stroke Care", "Epilepsy Treatment"],
        color: "bg-primary/10 text-primary",
      },
    ],
  },
  {
    category: "Support Services",
    items: [
      {
        name: "Pharmacy",
        description: "In-house pharmacy with home delivery options",
        icon: Pill,
        features: ["24/7 Service", "Home Delivery", "Generic Options", "Insurance Billing"],
        color: "bg-success/10 text-success",
      },
      {
        name: "Insurance & Billing",
        description: "Hassle-free billing and insurance processing",
        icon: CreditCard,
        features: ["Cashless Treatment", "TPA Desk", "Online Payments", "EMI Options"],
        color: "bg-info/10 text-info",
      },
    ],
  },
];

const Services = () => {
  return (
    <PublicLayout>
      <div className="bg-primary/5 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From emergency care to preventive health checkups, MedCare offers comprehensive healthcare services designed to meet all your medical needs.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="border-b border-border py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, value: "24/7", label: "Emergency Care" },
              { icon: CheckCircle, value: "100+", label: "Services" },
              { icon: Shield, value: "100+", label: "Insurance Partners" },
              { icon: Bed, value: "500+", label: "Beds" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Sections */}
      <div className="container py-12">
        {services.map((section, sectionIndex) => (
          <div key={section.category} className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">{section.category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((service, index) => (
                <Card
                  key={service.name}
                  className="group overflow-hidden transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${(sectionIndex * 2 + index) * 0.05}s` }}
                >
                  <CardHeader>
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-lg ${service.color} mb-2`}>
                      <service.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-success" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing a Service?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Our patient care coordinators are here to help you find the right service for your needs.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="tel:1-800-MEDCARE">Call 1-800-MEDCARE</a>
            </Button>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Services;
