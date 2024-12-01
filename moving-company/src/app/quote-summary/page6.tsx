"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { format } from "date-fns"

type QuoteDetails = {
  startLocation: string
  destination: string
  date: string
  weight: string
  selectedServices: string[]
  total: number
}

export default function QuoteSummaryPage() {
  const [quoteDetails, setQuoteDetails] = useState<QuoteDetails | null>(null)
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  })
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()

  useEffect(() => {
    const quoteParam = searchParams.get("quote")
    if (quoteParam) {
      setQuoteDetails(JSON.parse(quoteParam))
    }
  }, [searchParams])

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log("Submitting:", { ...contactFormData, quoteDetails })
    toast({
      title: "Quote Submitted",
      description: "Your quote has been submitted! A representative will contact you shortly to finalize your move.",
    })
    setShowContactForm(false)
  }

  if (!quoteDetails) {
    return <div>Loading...</div>
  }

  return (
    <div className="container max-w-4xl py-12">
      <Card>
        <CardHeader>
          <CardTitle>Quote Summary</CardTitle>
          <CardDescription>Review your moving quote details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Starting Location</Label>
              <div className="font-medium">{quoteDetails.startLocation}</div>
            </div>
            <div>
              <Label>Destination</Label>
              <div className="font-medium">{quoteDetails.destination}</div>
            </div>
            <div>
              <Label>Moving Date</Label>
              <div className="font-medium">{format(new Date(quoteDetails.date), "PPP")}</div>
            </div>
            <div>
              <Label>Estimated Weight</Label>
              <div className="font-medium">{quoteDetails.weight} lbs</div>
            </div>
          </div>
          <div>
            <Label>Selected Services</Label>
            <ul className="list-disc list-inside">
              {quoteDetails.selectedServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="text-2xl font-bold">
            Total Estimated Cost: ${quoteDetails.total.toFixed(2)}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.back()}>Edit Quote</Button>
          <Button onClick={() => setShowContactForm(true)}>Get in Contact</Button>
        </CardFooter>
      </Card>

      {showContactForm && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Provide your details to finalize your quote</CardDescription>
          </CardHeader>
          <form onSubmit={handleContactSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  required
                  value={contactFormData.name}
                  onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={contactFormData.email}
                  onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={contactFormData.phone}
                  onChange={(e) => setContactFormData({ ...contactFormData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={contactFormData.notes}
                  onChange={(e) => setContactFormData({ ...contactFormData, notes: e.target.value })}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Submit Quote Request</Button>
            </CardFooter>
          </form>
        </Card>
      )}
    </div>
  )
}

