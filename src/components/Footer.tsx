import { motion } from 'framer-motion'
import { ArrowUp, Heart, Linkedin, Github, Twitter, Mail } from 'lucide-react'
import { Button, Separator } from './ui'

// Navigation links
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

// Social links
const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:youremail@example.com', label: 'Email' },
]

/**
 * Footer Component - Site footer with navigation, social links, and copyright
 */
const Footer: React.FC = () => {
  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
              className="text-2xl font-bold text-foreground inline-block"
            >
              Jahasiel<span className="text-primary">VA</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Virtual Assistant specializing in administrative support, process automation, 
              and workflow optimization. Let's transform your operations together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-lg bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Ready to Start?</h3>
            <p className="text-muted-foreground text-sm">
              I'm currently available for new opportunities. Let's discuss how I can help!
            </p>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
            <div className="pt-4 space-y-2 text-sm text-muted-foreground">
              <p>📧 youremail@example.com</p>
              <p>📍 Philippines</p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Jahasiel VA. Made with 
            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> 
            in the Philippines
          </p>

          {/* Back to Top Button */}
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="gap-2"
            >
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
