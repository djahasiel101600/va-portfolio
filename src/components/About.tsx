import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react'
import { Card, CardContent, Avatar, AvatarImage, AvatarFallback, Badge } from './ui'

// Highlights data
const highlights = [
  { icon: Briefcase, label: 'Years Experience', value: '5+' },
  { icon: Award, label: 'Projects Completed', value: '50+' },
  { icon: CheckCircle2, label: 'Happy Clients', value: '20+' },
  { icon: GraduationCap, label: 'Certifications', value: '10+' },
]

// Core strengths
const strengths = [
  'Administrative Excellence',
  'Process Automation',
  'Data Analysis & Reporting',
  'Technical Troubleshooting',
  'Calendar & Email Management',
  'Workflow Optimization',
]

/**
 * About Section - Professional summary with avatar and highlights
 */
const About: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-accent/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">About Me</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Professional Summary
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Avatar & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8">
              <CardContent className="p-0 space-y-6">
                {/* Avatar */}
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24 border-4 border-primary/20">
                    <AvatarImage src="/avatar.jpg" alt="Jahasiel" />
                    <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                      JV
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Jahasiel</h3>
                    <p className="text-primary font-medium">Virtual Assistant</p>
                    <p className="text-sm text-muted-foreground mt-1">📍 Philippines</p>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a detail-oriented virtual assistant with a strong IT background 
                    and extensive administrative experience. My expertise lies in streamlining 
                    processes, optimizing workflows, and delivering measurable results.
                  </p>
                  <p>
                    With a Bachelor's degree in Information Technology and hands-on experience 
                    in government administration, I bring a unique blend of technical skills 
                    and practical know-how to every project.
                  </p>
                  <p>
                    I'm passionate about leveraging technology to solve problems and create 
                    efficient systems that save time and reduce errors.
                  </p>
                </div>

                {/* Strengths Badges */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={strength}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <Badge variant="outline" className="text-sm">
                        {strength}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 text-center hover:border-primary/50 transition-colors cursor-default group">
                  <CardContent className="p-0 space-y-3">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">{item.value}</div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
