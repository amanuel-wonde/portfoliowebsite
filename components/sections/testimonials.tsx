import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Exceptional work quality and attention to detail. Delivered our project ahead of schedule with outstanding results.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    avatar: "/professional-woman-headshot.png",
    rating: 5,
  },
  {
    quote: "A true professional who understands both technical requirements and business needs. Highly recommended!",
    author: "Michael Chen",
    role: "CTO",
    company: "InnovateLab",
    avatar: "/professional-man-headshot.png",
    rating: 5,
  },
  {
    quote: "Incredible problem-solving skills and clean code. Made our complex project seem effortless.",
    author: "Emily Rodriguez",
    role: "Lead Designer",
    company: "CreativeStudio",
    avatar: "/professional-woman-designer-headshot.png",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-balance px-2">
            What Clients Say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-2">
            Feedback from the amazing people I've had the pleasure to work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-2 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-4 sm:p-6">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-foreground text-sm sm:text-base">{testimonial.author}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
