"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from 'lucide-react'
import { useRouter } from "next/navigation"

type AdditionalService = {
  id: string
  label: string
  price: number
}

const additionalServices: AdditionalService[] = [
  { id: "packing", label: "Packing/Unpacking", price: 50 },
  { id: "storage", label: "Storage (per day)", price: 20 },
  { id: "heavy", label: "Heavy Items (pianos, safes)", price: 100 },
]

export default function QuotePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    startLocation: "",
    destination: "",
    date: new Date(),
    weight: "",
    selectedServices: [] as string[],
  })
  const [quote, setQuote] = useState<number | null>(null)

  const calculateQuote = () => {
    // Base price
    let total = 100

    // Distance calculation (simplified - you would need a real distance API)
    const estimatedDistance = 50 // Example: 50 miles
    total += estimatedDistance * 1

    // Weight calculation
    const weight = parseFloat(formData.weight)
    if (!isNaN(weight)) {
      total += weight * 0.5
    }

    // Additional services
    formData.selectedServices.forEach((serviceId) => {
      const service = additionalServices.find((s) => s.id === serviceId)
      if (service) {
        total += service.price
      }
    })

    setQuote(total)

    // Redirect to summary page with quote details
    router.push(`/quote-summary?quote=${JSON.stringify({
      startLocation: formData.startLocation,
      destination: formData.destination,
      date: formData.date.toISOString(),
      weight: formData.weight,
      selectedServices: formData.selectedServices,
      total: total
    })}`)
  }

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: checked
        ? [...prev.selectedServices, serviceId]
        : prev.selectedServices.filter((id) => id !== serviceId),
    }))
  }

  return (
    <div className="container max-w-4xl py-12">
      <Card>
        <CardHeader>
          <CardTitle>Get a Moving Quote</CardTitle>
          <CardDescription>
            Fill out the form below to receive an estimated quote for your move.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="startLocation">Starting Location</Label>
              <Input
                id="startLocation"
                placeholder="Enter city or zip code"
                value={formData.startLocation}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, startLocation: e.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                placeholder="Enter city or zip code"
                value={formData.destination}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, destination: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Moving Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !formData.date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={(date) =>
                    setFormData((prev) => ({ ...prev, date: date || new Date() }))
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight">Estimated Weight (lbs)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="Enter estimated weight"
              value={formData.weight}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, weight: e.target.value }))
              }
            />
          </div>

          <div className="space-y-4">
            <Label>Additional Services</Label>
            {additionalServices.map((service) => (
              <div key={service.id} className="flex items-center space-x-2">
                <Checkbox
                  id={service.id}
                  checked={formData.selectedServices.includes(service.id)}
                  onCheckedChange={(checked) =>
                    handleServiceChange(service.id, checked as boolean)
                  }
                />
                <Label htmlFor={service.id}>
                  {service.label} (+${service.price})
                </Label>
              </div>
            ))}
          </div>

          <Button onClick={calculateQuote} className="w-full">
            Calculate Quote
          </Button>

          {quote !== null && (
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold">Estimated Quote</h3>
              <p className="text-3xl font-bold text-primary">${quote.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground mt-2">
                This is an estimated price. Final price may vary based on actual weight and
                distance.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

