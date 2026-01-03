import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 lg:p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" />
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative grid gap-8 lg:grid-cols-2 items-center">
            {/* Content */}
            <div className="text-primary-foreground">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                Ready to Take Control of Your Health?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-6">
                Book an appointment today and experience healthcare that puts you first. 
                Our team is ready to help you on your journey to better health.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/book-appointment">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <a href="tel:1-800-MEDCARE">
                    <Phone className="mr-2 h-5 w-5" />
                    1-800-MEDCARE
                  </a>
                </Button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-primary-foreground/10 backdrop-blur p-4">
                <p className="text-3xl font-bold text-primary-foreground">24/7</p>
                <p className="text-sm text-primary-foreground/80">Emergency Services</p>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 backdrop-blur p-4">
                <p className="text-3xl font-bold text-primary-foreground">15min</p>
                <p className="text-sm text-primary-foreground/80">Avg Wait Time</p>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 backdrop-blur p-4">
                <p className="text-3xl font-bold text-primary-foreground">100+</p>
                <p className="text-sm text-primary-foreground/80">Insurance Partners</p>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 backdrop-blur p-4">
                <p className="text-3xl font-bold text-primary-foreground">4.9★</p>
                <p className="text-sm text-primary-foreground/80">Patient Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
