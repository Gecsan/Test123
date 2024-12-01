import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, X } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid gap-8 px-4 py-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">MoveMate</h3>
          <p className="text-sm text-muted-foreground">
            Professional and reliable moving services for local and long-distance moves.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <X className="h-5 w-5" />
              <span className="sr-only">X</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="text-muted-foreground hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/quote" className="text-muted-foreground hover:text-primary">
                Get a Quote
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-muted-foreground hover:text-primary">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services#local" className="text-muted-foreground hover:text-primary">
                Local Moving
              </Link>
            </li>
            <li>
              <Link href="/services#long-distance" className="text-muted-foreground hover:text-primary">
                Long Distance Moving
              </Link>
            </li>
            <li>
              <Link href="/services#packing" className="text-muted-foreground hover:text-primary">
                Packing Services
              </Link>
            </li>
            <li>
              <Link href="/services#storage" className="text-muted-foreground hover:text-primary">
                Storage Solutions
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">123 Moving St, City, State 12345</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <Link href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                (123) 456-7890
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <Link href="mailto:info@movemate.com" className="text-muted-foreground hover:text-primary">
                info@movemate.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col gap-2 px-4 py-6 text-center text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>© 2024 MoveMate. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

