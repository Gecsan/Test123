import { Truck, Package, Home, Box, Shield, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Truck,
    title: "Local Moving",
    description: "Professional local moving services within your city or state.",
    features: [
      "Experienced local movers",
      "Proper equipment and tools",
      "Flexible scheduling",
      "Careful handling of items"
    ]
  },
  {
    icon: Home,
    title: "Long Distance Moving",
    description: "Safe and reliable long-distance moving solutions across the country.",
    features: [
      "Interstate moving expertise",
      "Dedicated truck service",
      "Real-time shipment tracking",
      "Climate-controlled transport"
    ]
  },
  {
    icon: Package,
    title: "Packing Services",
    description: "Professional packing and unpacking services for a stress-free move.",
    features: [
      "Quality packing materials",
      "Systematic packing process",
      "Fragile item handling",
      "Unpacking assistance"
    ]
  },
  {
    icon: Box,
    title: "Storage Solutions",
    description: "Secure storage options for short-term and long-term needs.",
    features: [
      "Climate-controlled units",
      "24/7 security monitoring",
      "Flexible storage terms",
      "Easy access to items"
    ]
  },
  {
    icon: Shield,
    title: "Specialty Items",
    description: "Expert handling of valuable and delicate items.",
    features: [
      "Piano moving",
      "Art and antiques",
      "Safe and vault moving",
      "Custom crating"
    ]
  },
  {
    icon: Clock,
    title: "Express Moving",
    description: "Quick and efficient moving services for urgent relocations.",
    features: [
      "Same-day service",
      "Priority scheduling",
      "Rapid response team",
      "Emergency moving"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Comprehensive moving solutions tailored to your needs
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <Icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

