import { PublicLayout } from "@/components/layout/PublicLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { DepartmentsSection } from "@/components/home/DepartmentsSection";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <PublicLayout>
      <HeroSection />
      <DepartmentsSection />
      <DoctorsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </PublicLayout>
  );
};

export default Index;
