"use client"

import { useState } from "react"
import { Star, StarHalf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

// Example reviews data
const initialReviews = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    comment: "Excellent service! The team was professional and handled our belongings with care.",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 4,
    comment: "Very satisfied with the moving service. Would recommend to others.",
    date: "2024-01-10"
  },
  {
    id: 3,
    name: "Michael Brown",
    rating: 5,
    comment: "The movers were punctual, efficient, and friendly. Great experience!",
    date: "2024-01-05"
  }
]

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews)
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const review = {
      id: reviews.length + 1,
      ...newReview,
      date: new Date().toISOString().split('T')[0]
    }
    setReviews([review, ...reviews])
    setNewReview({ name: "", rating: 5, comment: "" })
    toast({
      title: "Review submitted",
      description: "Thank you for your feedback!"
    })
  }

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<Star key={i} className="h-4 w-4 fill-primary text-primary" />)
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        stars.push(<StarHalf key={i} className="h-4 w-4 fill-primary text-primary" />)
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-muted-foreground" />)
      }
    }
    return stars
  }

  return (
    <div className="container py-12">
      <div className="grid gap-12 md:grid-cols-[1fr_400px]">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter mb-8">Customer Reviews</h1>
          <div className="grid gap-6">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{review.name}</CardTitle>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="md:sticky md:top-20">
          <Card>
            <CardHeader>
              <CardTitle>Write a Review</CardTitle>
              <CardDescription>Share your experience with us</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rating">Rating</Label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <Button
                        key={rating}
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="p-0 h-8 w-8"
                        onClick={() => setNewReview({ ...newReview, rating })}
                      >
                        <Star
                          className={`h-6 w-6 ${
                            rating <= newReview.rating
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment">Comment</Label>
                  <Textarea
                    id="comment"
                    required
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full">Submit Review</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

