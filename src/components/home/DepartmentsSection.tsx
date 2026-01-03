import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Bone, 
  Baby, 
  Stethoscope, 
  Eye,
  ArrowRight
} from "lucide-react";

const departments = [
  {
    name: "Cardiology",
    description: "Complete heart care with advanced cardiac procedures and monitoring",
    icon: Heart,
    href: "/departments/cardiology",
    color: "text-emergency",
    bgColor: "bg-emergency/10",
  },
  {
    name: "Neurology",
    description: "Expert care for brain, spine, and nervous system conditions",
    icon: Brain,
    href: "/departments/neurology",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    name: "Orthopedics",
    description: "Bone, joint, and muscle care with minimally invasive surgery",
    icon: Bone,
    href: "/departments/orthopedics",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    name: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents",
    icon: Baby,
    href: "/departments/pediatrics",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    name: "General Medicine",
    description: "Comprehensive primary care and preventive health services",
    icon: Stethoscope,
    href: "/departments/general-medicine",
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    name: "Ophthalmology",
    description: "Advanced eye care including laser surgery and vision correction",
    icon: Eye,
    href: "/departments/ophthalmology",
    color: "text-secondary",
    bgColor: "bg-secondary/20",
  },
];

export function DepartmentsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Our Departments
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Specialized Care Across All Disciplines
          </h2>
          <p className="text-muted-foreground">
            Our multi-specialty hospital offers comprehensive healthcare services 
            across 20+ departments, each led by renowned specialists.
          </p>
        </div>

        {/* Department Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <Card
              key={dept.name}
              className="group relative overflow-hidden transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${dept.bgColor} mb-2`}>
                  <dept.icon className={`h-6 w-6 ${dept.color}`} />
                </div>
                <CardTitle className="text-xl">{dept.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {dept.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  to={dept.href}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/departments">
              View All Departments
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
