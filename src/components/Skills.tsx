import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FileText,
  Database,
  Code2,
  Users,
  Target,
  Lightbulb,
  MessageSquare,
  Clock,
  Shield,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, Badge, Progress } from './ui'

// Hard skills with proficiency levels
const hardSkills = [
  {
    category: 'Administrative & Executive Support',
    icon: FileText,
    color: 'text-blue-500',
    skills: [
      { name: 'Email Management & Filtering', level: 95 },
      { name: 'Calendar Management & Scheduling', level: 90 },
      { name: 'Task Tracking & Follow-up', level: 92 },
      { name: 'Document Preparation & Formatting', level: 88 },
    ],
  },
  {
    category: 'Data Management & Automation',
    icon: Database,
    color: 'text-green-500',
    skills: [
      { name: 'Excel/Google Sheets Expertise', level: 95 },
      { name: 'Data Analysis & Reporting', level: 88 },
      { name: 'Workflow Optimization', level: 90 },
      { name: 'Process Automation', level: 85 },
    ],
  },
  {
    category: 'Technical & Creative Support',
    icon: Code2,
    color: 'text-purple-500',
    skills: [
      { name: 'Technical Troubleshooting', level: 85 },
      { name: 'API Integrations', level: 80 },
      { name: 'Canva & Photoshop Design', level: 82 },
      { name: 'Presentation & Report Design', level: 88 },
    ],
  },
]

// Soft skills
const softSkills = [
  { name: 'Communication', icon: MessageSquare, description: 'Clear and professional written/verbal communication' },
  { name: 'Time Management', icon: Clock, description: 'Efficient prioritization and deadline management' },
  { name: 'Problem Solving', icon: Lightbulb, description: 'Creative and analytical approach to challenges' },
  { name: 'Team Collaboration', icon: Users, description: 'Effective remote and cross-functional teamwork' },
  { name: 'Attention to Detail', icon: Target, description: 'Meticulous accuracy in all deliverables' },
  { name: 'Reliability', icon: Shield, description: 'Consistent, dependable, and trustworthy' },
]

/**
 * Skills Section - Showcases hard and soft skills with progress indicators
 */
const Skills: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">What I Offer</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technical and interpersonal skills honed through years of experience
          </p>
        </motion.div>

        {/* Hard Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {hardSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-accent ${category.color}`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + skillIndex * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={isInView ? skill.level : 0} />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-semibold text-foreground">Soft Skills</h3>
          <p className="text-muted-foreground mt-2">
            The interpersonal qualities that make collaboration seamless
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-4 text-center h-full hover:border-primary/50 transition-colors cursor-default group">
                <CardContent className="p-0 space-y-3">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground text-sm">{skill.name}</h4>
                  <p className="text-xs text-muted-foreground hidden md:block">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
