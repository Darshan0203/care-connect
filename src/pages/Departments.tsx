import { Link } from "react-router-dom";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Eye,
  Syringe,
  Microscope,
  Pill,
  Activity,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

const departments = [
  {
    name: "Cardiology",
    description: "Comprehensive heart care including interventional cardiology, cardiac surgery, and rehabilitation programs.",
    icon: Heart,
    href: "/departments/cardiology",
    color: "text-emergency",
    bgColor: "bg-emergency/10",
    doctors: 12,
    services: ["ECG & Echo", "Angioplasty", "Heart Surgery", "Pacemaker"],
  },
  {
    name: "Neurology",
    description: "Advanced treatment for brain, spine, and nervous system disorders with cutting-edge neurosurgery.",
    icon: Brain,
    href: "/departments/neurology",
    color: "text-primary",
    bgColor: "bg-primary/10",
    doctors: 8,
    services: ["Brain Surgery", "Stroke Care", "Epilepsy Treatment", "Spine Surgery"],
  },
  {
    name: "Orthopedics",
    description: "Complete bone, joint, and muscle care with sports medicine and minimally invasive procedures.",
    icon: Bone,
    href: "/departments/orthopedics",
    color: "text-warning",
    bgColor: "bg-warning/10",
    doctors: 10,
    services: ["Joint Replacement", "Arthroscopy", "Spine Surgery", "Sports Medicine"],
  },
  {
    name: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents with pediatric specialists.",
    icon: Baby,
    href: "/departments/pediatrics",
    color: "text-success",
    bgColor: "bg-success/10",
    doctors: 15,
    services: ["Vaccinations", "Growth Monitoring", "Pediatric Surgery", "NICU"],
  },
  {
    name: "General Medicine",
    description: "Comprehensive primary care and preventive health services for adults of all ages.",
    icon: Stethoscope,
    href: "/departments/general-medicine",
    color: "text-info",
    bgColor: "bg-info/10",
    doctors: 20,
    services: ["Health Checkups", "Chronic Care", "Vaccinations", "Preventive Care"],
  },
  {
    name: "Ophthalmology",
    description: "Advanced eye care including laser surgery, cataract treatment, and vision correction.",
    icon: Eye,
    href: "/departments/ophthalmology",
    color: "text-secondary-foreground",
    bgColor: "bg-secondary",
    doctors: 6,
    services: ["LASIK", "Cataract Surgery", "Glaucoma Treatment", "Retina Care"],
  },
  {
    name: "Oncology",
    description: "Comprehensive cancer care with chemotherapy, radiation therapy, and surgical oncology.",
    icon: Shield,
    href: "/departments/oncology",
    color: "text-emergency",
    bgColor: "bg-emergency/10",
    doctors: 9,
    services: ["Chemotherapy", "Radiation", "Surgery", "Immunotherapy"],
  },
  {
    name: "Dermatology",
    description: "Expert skin care for all conditions including cosmetic dermatology and skin cancer treatment.",
    icon: Activity,
    href: "/departments/dermatology",
    color: "text-primary",
    bgColor: "bg-primary/10",
    doctors: 5,
    services: ["Skin Cancer", "Cosmetic", "Laser Treatment", "Allergy Testing"],
  },
  {
    name: "Gastroenterology",
    description: "Digestive system care including endoscopy, liver diseases, and GI surgery.",
    icon: Microscope,
    href: "/departments/gastroenterology",
    color: "text-success",
    bgColor: "bg-success/10",
    doctors: 7,
    services: ["Endoscopy", "Colonoscopy", "Liver Care", "IBD Treatment"],
  },
  {
    name: "Pulmonology",
    description: "Respiratory care for lung diseases, sleep disorders, and critical care medicine.",
    icon: Zap,
    href: "/departments/pulmonology",
    color: "text-info",
    bgColor: "bg-info/10",
    doctors: 6,
    services: ["Asthma Care", "COPD", "Sleep Study", "Bronchoscopy"],
  },
  {
    name: "Endocrinology",
    description: "Hormone disorders including diabetes, thyroid conditions, and metabolic diseases.",
    icon: Syringe,
    href: "/departments/endocrinology",
    color: "text-warning",
    bgColor: "bg-warning/10",
    doctors: 4,
    services: ["Diabetes Care", "Thyroid", "Hormonal Disorders", "Obesity"],
  },
  {
    name: "Nephrology",
    description: "Kidney care including dialysis, transplant evaluation, and hypertension management.",
    icon: Pill,
    href: "/departments/nephrology",
    color: "text-emergency",
    bgColor: "bg-emergency/10",
    doctors: 5,
    services: ["Dialysis", "Transplant Prep", "Kidney Stones", "Hypertension"],
  },
];

const Departments = () => {
  return (
    <PublicLayout>
      <div className="bg-primary/5 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Departments</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            MedCare Hospital offers comprehensive healthcare services across 20+ specialized departments, each equipped with state-of-the-art technology and expert medical professionals.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <Card
              key={dept.name}
              className="group overflow-hidden transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-lg ${dept.bgColor} mb-2`}>
                  <dept.icon className={`h-7 w-7 ${dept.color}`} />
                </div>
                <CardTitle className="text-xl">{dept.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {dept.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-medium text-primary">{dept.doctors} Specialists</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {dept.services.map((service) => (
                      <span
                        key={service}
                        className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link to={dept.href}>
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="flex-1">
                      <Link to={`/book-appointment?dept=${dept.name.toLowerCase()}`}>
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PublicLayout>
  );
};

export default Departments;
