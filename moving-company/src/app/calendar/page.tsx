"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

// Example booked dates
const bookedDates = [
  new Date(2024, 0, 15),
  new Date(2024, 0, 16),
  new Date(2024, 0, 20),
  new Date(2024, 1, 5),
]

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const isBooked = bookedDates.some(
        (bookedDate) => bookedDate.toDateString() === date.toDateString()
      )
      if (!isBooked) {
        setSelectedDate(date)
        setIsDialogOpen(true)
      } else {
        toast({
          title: "Date Unavailable",
          description: "This date is already booked. Please select another date.",
          variant: "destructive",
        })
      }
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast({
      title: "Booking Submitted",
      description: "We'll contact you shortly to confirm your moving date.",
    })
    setIsDialogOpen(false)
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tighter">Job Calendar</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Select an available date for your move
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Schedule Your Move</CardTitle>
            <CardDescription>
              Red dates are already booked. Click on an available date to schedule your move.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={(date) =>
                bookedDates.some(
                  (bookedDate) => bookedDate.toDateString() === date.toDateString()
                )
              }
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Schedule Your Move</DialogTitle>
              <DialogDescription>
                Fill out the form below to request your moving date.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instructions">Special Instructions</Label>
                <Textarea id="instructions" />
              </div>
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

