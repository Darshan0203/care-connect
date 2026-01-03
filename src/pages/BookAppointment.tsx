import { useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Check, Clock, User, Stethoscope, CalendarDays } from "lucide-react";

const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "General Medicine",
  "Ophthalmology",
  "Dermatology",
  "Gastroenterology",
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
];

const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    department: "",
    appointmentType: "new",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    timeSlot: "",
    symptoms: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    toast.success("Appointment booked successfully!", {
      description: "You will receive a confirmation email shortly.",
    });
    setStep(4);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.department && formData.appointmentType;
      case 2:
        return date && formData.timeSlot;
      case 3:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      default:
        return true;
    }
  };

  return (
    <PublicLayout>
      <div className="bg-primary/5 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-foreground mb-4">Book an Appointment</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Schedule your visit with our experienced medical professionals in just a few easy steps.
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-medium transition-colors ${
                  s < step
                    ? "bg-success text-success-foreground"
                    : s === step
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {s < step ? <Check className="h-5 w-5" /> : s}
              </div>
              {s < 4 && (
                <div
                  className={`h-1 w-16 mx-2 ${
                    s < step ? "bg-success" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Step 1: Department Selection */}
          {step === 1 && (
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Select Department & Type</CardTitle>
                <CardDescription>
                  Choose the department and appointment type for your visit
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Department</Label>
                  <Select
                    value={formData.department}
                    onValueChange={(value) => handleInputChange("department", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept.toLowerCase()}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Appointment Type</Label>
                  <RadioGroup
                    value={formData.appointmentType}
                    onValueChange={(value) => handleInputChange("appointmentType", value)}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div>
                      <RadioGroupItem value="new" id="new" className="peer sr-only" />
                      <Label
                        htmlFor="new"
                        className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                      >
                        <User className="mb-2 h-6 w-6" />
                        <span className="font-medium">New Patient</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="followup" id="followup" className="peer sr-only" />
                      <Label
                        htmlFor="followup"
                        className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                      >
                        <CalendarDays className="mb-2 h-6 w-6" />
                        <span className="font-medium">Follow-up</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Date & Time Selection */}
          {step === 2 && (
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Select Date & Time</CardTitle>
                <CardDescription>
                  Choose your preferred appointment date and time slot
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    className="rounded-lg border"
                  />
                </div>

                {date && (
                  <div className="space-y-2">
                    <Label>Available Time Slots</Label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <Button
                          key={slot}
                          variant={formData.timeSlot === slot ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleInputChange("timeSlot", slot)}
                          className="text-xs"
                        >
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 3: Patient Information */}
          {step === 3 && (
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Patient Information</CardTitle>
                <CardDescription>
                  Please provide your contact details and symptoms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="symptoms">Symptoms / Reason for Visit</Label>
                  <Textarea
                    id="symptoms"
                    value={formData.symptoms}
                    onChange={(e) => handleInputChange("symptoms", e.target.value)}
                    placeholder="Please describe your symptoms or reason for the appointment..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <Card className="animate-fade-in text-center">
              <CardContent className="pt-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 mx-auto mb-4">
                  <Check className="h-8 w-8 text-success" />
                </div>
                <CardTitle className="text-2xl mb-2">Appointment Confirmed!</CardTitle>
                <CardDescription className="text-base mb-6">
                  Your appointment has been successfully scheduled. A confirmation email has been sent to {formData.email}.
                </CardDescription>

                <div className="bg-muted rounded-lg p-4 space-y-2 text-left mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Department:</span>
                    <span className="font-medium capitalize">{formData.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium">{date?.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium">{formData.timeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Patient:</span>
                    <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                  </div>
                </div>

                <Badge variant="outline" className="mb-6">
                  Confirmation #: APT-{Date.now().toString().slice(-8)}
                </Badge>

                <div className="flex gap-4 justify-center">
                  <Button variant="outline" onClick={() => window.print()}>
                    Print Details
                  </Button>
                  <Button asChild>
                    <a href="/">Back to Home</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          {step < 4 && (
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => setStep((prev) => prev - 1)}
                disabled={step === 1}
              >
                Previous
              </Button>
              <Button
                onClick={() => (step === 3 ? handleSubmit() : setStep((prev) => prev + 1))}
                disabled={!canProceed()}
              >
                {step === 3 ? "Confirm Booking" : "Continue"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </PublicLayout>
  );
};

export default BookAppointment;
