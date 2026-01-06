import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { Card, CardContent, Badge } from './ui'

// Experience data
const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Support Staff',
    organization: 'Commission on Audit, National Irrigation Administration',
    location: 'Philippines',
    period: '2020 – Present',
    description: 'Providing administrative and technical support for government audit operations.',
    achievements: [
      'Manage documents and data from agency reports such as Report of Checks Issued, Liquidations, and IARs',
      'Automated data computations using APIs and algorithms, reducing manual processing from a week to 2–3 days',
      'Handle multiple urgent tasks simultaneously, prioritizing strategically and ensuring accuracy',
      'Provide proactive updates and clarifications to supervisors',
    ],
    skills: ['Data Management', 'Process Automation', 'Excel', 'Documentation'],
  },
  {
    id: 2,
    type: 'project',
    title: 'Personal Project – SariStorePOS',
    organization: 'Point of Sale System for Micro-Enterprise Entrepreneurs',
    location: 'Remote',
    period: 'Ongoing',
    description: 'Developing a functional POS system based on real user feedback and requirements.',
    achievements: [
      'Developing a functional POS system based on real user feedback',
      'Focused on feature planning, workflow logic, and process optimization',
      'Leveraging AI for coding efficiency while ensuring quality',
      'Test and refine functionalities for usability by clients with minimal tech knowledge',
    ],
    skills: ['React', 'TypeScript', 'UX Design', 'Product Development'],
  },
  {
    id: 3,
    type: 'education',
    title: 'Bachelor of Science in Information Technology',
    organization: 'University Name',
    location: 'Philippines',
    period: '2016 – 2020',
    description: 'Comprehensive IT education with focus on software development and systems analysis.',
    achievements: [
      'Graduated with honors',
      'Specialized in web development and database management',
      'Completed capstone project on process automation',
      'Active member of IT student organization',
    ],
    skills: ['Programming', 'Database', 'Web Development', 'Systems Analysis'],
  },
]

/**
 * Experience Section - Timeline-style work history and education
 */
const Experience: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Briefcase
      case 'education':
        return GraduationCap
      default:
        return Briefcase
    }
  }

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">My Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience & Education
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and educational background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5 hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type)
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                      <CardContent className="p-0 space-y-4">
                        {/* Header */}
                        <div className={`flex items-start gap-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className={`flex-1 ${isEven ? 'md:text-right' : ''}`}>
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {exp.title}
                            </h3>
                            <p className="text-primary font-medium">{exp.organization}</p>
                          </div>
                        </div>

                        {/* Meta Info */}
                        <div className={`flex flex-wrap items-center gap-4 text-sm text-muted-foreground ${isEven ? 'md:justify-end' : ''}`}>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground">{exp.description}</p>

                        {/* Achievements */}
                        <ul className={`space-y-2 ${isEven ? 'md:text-right' : ''}`}>
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-2 text-sm text-muted-foreground ${
                                isEven ? 'md:flex-row-reverse' : ''
                              }`}
                            >
                              <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills Tags */}
                        <div className={`flex flex-wrap gap-2 pt-2 ${isEven ? 'md:justify-end' : ''}`}>
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.2 }}
                      className="w-4 h-4 rounded-full bg-primary ring-4 ring-background"
                    />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
