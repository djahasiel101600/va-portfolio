import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Folder, Calendar, Tag } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Badge, Button, Tabs, TabsList, TabsTrigger, TabsContent } from './ui'

// Projects data
const projects = [
  {
    id: 1,
    title: 'Automated Report Generation System',
    description: 'Developed an automated system that reduced manual report processing time from one week to 2-3 days using APIs and custom algorithms.',
    category: 'automation' as const,
    tags: ['Python', 'API', 'Excel', 'Automation'],
    date: '2024',
    status: 'Completed',
    image: '/project1.jpg',
  },
  {
    id: 2,
    title: 'SariStorePOS System',
    description: 'Personal project developing a Point of Sale system for micro-enterprise entrepreneurs based on real user feedback and requirements.',
    category: 'automation' as const,
    tags: ['React', 'TypeScript', 'POS', 'UX Design'],
    date: 'Ongoing',
    status: 'In Progress',
    image: '/project2.jpg',
  },
  {
    id: 3,
    title: 'Email Management System',
    description: 'Implemented a comprehensive email filtering and organization system that improved response time by 40%.',
    category: 'admin' as const,
    tags: ['Gmail', 'Automation', 'Organization'],
    date: '2024',
    status: 'Completed',
    image: '/project3.jpg',
  },
  {
    id: 4,
    title: 'Client Presentation Templates',
    description: 'Designed professional presentation templates and branding materials for multiple clients using Canva and PowerPoint.',
    category: 'design' as const,
    tags: ['Canva', 'PowerPoint', 'Design', 'Branding'],
    date: '2024',
    status: 'Completed',
    image: '/project4.jpg',
  },
  {
    id: 5,
    title: 'Data Dashboard Creation',
    description: 'Built interactive Excel dashboards for tracking KPIs and generating insights for management decision-making.',
    category: 'automation' as const,
    tags: ['Excel', 'Dashboard', 'Data Analysis', 'Reporting'],
    date: '2023',
    status: 'Completed',
    image: '/project5.jpg',
  },
  {
    id: 6,
    title: 'Calendar & Task Management System',
    description: 'Developed a comprehensive scheduling system that improved team coordination and meeting efficiency by 30%.',
    category: 'admin' as const,
    tags: ['Google Calendar', 'Notion', 'Scheduling'],
    date: '2024',
    status: 'Completed',
    image: '/project6.jpg',
  },
]

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'automation', label: 'Automation' },
  { value: 'design', label: 'Design' },
  { value: 'admin', label: 'Admin' },
]

/**
 * Projects Section - Portfolio display with category tabs
 */
const Projects: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filterProjects = (category: string) => {
    if (category === 'all') return projects
    return projects.filter(project => project.category === category)
  }

  return (
    <section id="projects" className="py-24 bg-accent/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">My Work</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects and tasks that demonstrate my skills and problem-solving abilities
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-fit">
                {categories.map((cat) => (
                  <TabsTrigger key={cat.value} value={cat.value}>
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((cat) => (
              <TabsContent key={cat.value} value={cat.value}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterProjects(cat.value).map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                        {/* Project Image Placeholder */}
                        <div className="relative h-48 bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                          <Folder className="h-16 w-16 text-primary/30 group-hover:scale-110 transition-transform duration-300" />
                          <div className="absolute top-3 right-3">
                            <Badge 
                              variant={project.status === 'Completed' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {project.status}
                            </Badge>
                          </div>
                        </div>

                        <CardHeader>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                            <Calendar className="h-3 w-3" />
                            <span>{project.date}</span>
                          </div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {project.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                <Tag className="h-2.5 w-2.5 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <Button variant="outline" size="sm" className="w-full group/btn">
                            View Details
                            <ExternalLink className="h-3 w-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
