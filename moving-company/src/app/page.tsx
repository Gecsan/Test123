import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Truck, Package, Home, Shield, Calendar, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Moving Made Simple
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Professional and reliable moving services for local and long-distance moves. Get your free quote today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <Image
              alt="Moving truck and movers"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square"
              height="600"
              src="/placeholder.svg"
              width="600"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Services</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Comprehensive moving solutions tailored to your needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <Truck className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Local Moving</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Professional local moving services with experienced movers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <Home className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Long Distance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Safe and reliable long-distance moving solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <Package className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Packing Services</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Professional packing and unpacking services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Customer Testimonials</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We deliver excellence in every move
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Licensed & Insured</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Fully licensed and insured moving services for your peace of mind.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Calendar className="h-8 w-8 text-primary" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Flexible Scheduling</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Choose a moving date that works best for your schedule.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Package className="h-8 w-8 text-primary" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Expert Packing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Professional packing services to protect your valuable items.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Truck className="h-8 w-8 text-primary" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Modern Fleet</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Well-maintained moving trucks equipped with proper tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Customer Reviews</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                See what our customers are saying about us
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="flex gap-1">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                </div>
                <blockquote className="text-center text-sm text-muted-foreground">
                  "Excellent service! The team was professional and handled our belongings with care."
                </blockquote>
                <div className="text-sm font-semibold">John Smith</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="flex gap-1">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 text-muted-foreground" />
                </div>
                <blockquote className="text-center text-sm text-muted-foreground">
                  "Very satisfied with the moving service. Would recommend to others."
                </blockquote>
                <div className="text-sm font-semibold">Sarah Johnson</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="flex gap-1">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <Star className="h-5 w-5 fill-primary text-primary" />
                </div>
                <blockquote className="text-center text-sm text-muted-foreground">
                  "The movers were punctual, efficient, and friendly. Great experience!"
                </blockquote>
                <div className="text-sm font-semibold">Michael Brown</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">Ready to Move?</h2>
              <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed">
                Get your free quote today and experience the MoveMate difference.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/quote" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

