"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    })
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="container py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with us for any questions about our moving services.
            </p>
          </div>

          <div className="mt-8 grid gap-6">
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-base">Address</CardTitle>
                  <CardDescription>123 Moving St, City, State 12345</CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-base">Phone</CardTitle>
                  <CardDescription>(123) 456-7890</CardDescription>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-base">Email</CardTitle>
                  <CardDescription>info@movemate.com</CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

