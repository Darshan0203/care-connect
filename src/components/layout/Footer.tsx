import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">MedCare</span>
                <span className="text-xs text-primary-foreground/70">Hospital & Health</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Providing exceptional healthcare services with compassion and cutting-edge medical technology for over 25 years.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link to="/book-appointment" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/patient-portal" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <span className="text-primary-foreground/80">
                  123 Healthcare Avenue,<br />Medical District, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-primary-foreground/80">1-800-MEDCARE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-primary-foreground/80">info@medcare.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-primary-foreground/80">
              Subscribe to our newsletter for health tips and updates.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 MedCare Hospital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
