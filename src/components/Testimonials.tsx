import { useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Card, CardContent, Avatar, AvatarImage, AvatarFallback, Badge, Button } from './ui'

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechStart Inc.',
    image: '/testimonial1.jpg',
    rating: 5,
    text: "Jahasiel has been an incredible asset to our team. Their attention to detail and ability to automate our reporting processes saved us countless hours. Highly recommended for any business looking for reliable VA support.",
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'Digital Solutions Co.',
    image: '/testimonial2.jpg',
    rating: 5,
    text: "Working with Jahasiel was a game-changer for our operations. Their technical skills combined with excellent communication made every project seamless. They consistently delivered ahead of schedule.",
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Operations Manager',
    company: 'Global Ventures',
    image: '/testimonial3.jpg',
    rating: 5,
    text: "I was impressed by Jahasiel's proactive approach and problem-solving abilities. They don't just complete tasks—they find ways to improve processes and add value. A true professional.",
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Small Business Owner',
    company: 'Park Consulting',
    image: '/testimonial4.jpg',
    rating: 5,
    text: "As a small business owner, I needed someone reliable and versatile. Jahasiel exceeded all expectations with their data management skills and ability to handle multiple priorities efficiently.",
  },
]

/**
 * Testimonials Section - Client feedback carousel
 */
const Testimonials: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-accent/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Feedback from clients I've had the pleasure of working with
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Main Testimonial Card */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-8 md:p-12 relative overflow-hidden">
                  {/* Quote Icon Background */}
                  <Quote className="absolute top-6 right-6 h-24 w-24 text-primary/5" />
                  
                  <CardContent className="p-0 relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                      "{testimonials[currentIndex].text}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14 border-2 border-primary/20">
                        <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                          {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary w-6'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Additional Testimonials Grid (for larger screens) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 hidden lg:grid grid-cols-4 gap-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`p-4 rounded-lg text-left transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card hover:bg-accent border border-border'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className={index === currentIndex ? 'bg-primary-foreground text-primary' : 'bg-primary/10 text-primary'}>
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className={`text-xs ${index === currentIndex ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
