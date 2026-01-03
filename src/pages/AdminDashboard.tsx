import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Heart,
  Users,
  Calendar,
  DollarSign,
  Activity,
  Bed,
  Clock,
  TrendingUp,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  LayoutDashboard,
  UserCog,
  FileText,
  Pill,
  TestTube,
  Ambulance,
} from "lucide-react";

const stats = [
  { name: "Total Patients", value: "12,453", change: "+12%", icon: Users, color: "text-primary" },
  { name: "Appointments Today", value: "148", change: "+5%", icon: Calendar, color: "text-success" },
  { name: "Revenue (MTD)", value: "$284K", change: "+18%", icon: DollarSign, color: "text-warning" },
  { name: "Bed Occupancy", value: "76%", change: "-3%", icon: Bed, color: "text-info" },
];

const recentAppointments = [
  { id: 1, patient: "John Smith", doctor: "Dr. Sarah Johnson", department: "Cardiology", time: "09:00 AM", status: "confirmed" },
  { id: 2, patient: "Emily Davis", doctor: "Dr. Michael Chen", department: "Neurology", time: "09:30 AM", status: "in-progress" },
  { id: 3, patient: "Robert Wilson", doctor: "Dr. Emily Rodriguez", department: "Pediatrics", time: "10:00 AM", status: "pending" },
  { id: 4, patient: "Lisa Brown", doctor: "Dr. James Williams", department: "Orthopedics", time: "10:30 AM", status: "confirmed" },
];

const sidebarItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/admin", active: true },
  { name: "Appointments", icon: Calendar, href: "/admin/appointments" },
  { name: "Patients", icon: Users, href: "/admin/patients" },
  { name: "Doctors", icon: UserCog, href: "/admin/doctors" },
  { name: "Medical Records", icon: FileText, href: "/admin/records" },
  { name: "Pharmacy", icon: Pill, href: "/admin/pharmacy" },
  { name: "Laboratory", icon: TestTube, href: "/admin/lab" },
  { name: "Emergency", icon: Ambulance, href: "/admin/emergency" },
  { name: "Reports", icon: Activity, href: "/admin/reports" },
  { name: "Settings", icon: Settings, href: "/admin/settings" },
];

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-card border-r border-border transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center gap-2 px-6 border-b border-border">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Heart className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">MedCare</span>
            <span className="text-xs text-muted-foreground">Admin Portal</span>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">Super Admin</p>
            </div>
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-card/95 backdrop-blur px-4 lg:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <div className="flex-1">
            <h1 className="text-lg font-semibold">Dashboard Overview</h1>
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-emergency" />
          </Button>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 lg:p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={stat.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-muted`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <Badge variant={stat.change.startsWith("+") ? "default" : "secondary"} className={stat.change.startsWith("+") ? "bg-success hover:bg-success" : ""}>
                      <TrendingUp className="mr-1 h-3 w-3" />
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Today's Appointments */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle>Today's Appointments</CardTitle>
                <CardDescription>Real-time appointment updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAppointments.map((apt) => (
                    <div
                      key={apt.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{apt.patient}</p>
                          <p className="text-sm text-muted-foreground">
                            {apt.doctor} • {apt.department}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{apt.time}</p>
                        <Badge
                          variant={
                            apt.status === "confirmed"
                              ? "default"
                              : apt.status === "in-progress"
                              ? "secondary"
                              : "outline"
                          }
                          className={apt.status === "confirmed" ? "bg-success hover:bg-success" : apt.status === "in-progress" ? "bg-primary hover:bg-primary" : ""}
                        >
                          {apt.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Department Performance */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
                <CardDescription>Patient load by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Cardiology", value: 85, color: "bg-emergency" },
                    { name: "Neurology", value: 72, color: "bg-primary" },
                    { name: "Orthopedics", value: 68, color: "bg-warning" },
                    { name: "Pediatrics", value: 91, color: "bg-success" },
                    { name: "General Medicine", value: 78, color: "bg-info" },
                  ].map((dept) => (
                    <div key={dept.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{dept.name}</span>
                        <span className="text-muted-foreground">{dept.value}%</span>
                      </div>
                      <Progress value={dept.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Add Patient</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                  <Calendar className="h-6 w-6 text-success" />
                  <span>New Appointment</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                  <FileText className="h-6 w-6 text-warning" />
                  <span>Generate Report</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                  <Ambulance className="h-6 w-6 text-emergency" />
                  <span>Emergency Alert</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
