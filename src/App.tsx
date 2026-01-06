import './App.css'
import { 
  Header, 
  Hero, 
  About, 
  Skills, 
  Projects, 
  Experience, 
  Testimonials, 
  Contact, 
  Footer, 
  ThemeProvider 
} from './components'

/**
 * Main App Component
 * Virtual Assistant Portfolio with dark/light mode support
 */
function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="va-portfolio-theme">
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        {/* Navigation Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section - Landing area with intro */}
          <Hero />
          
          {/* About Section - Professional summary */}
          <About />
          
          {/* Skills Section - Technical and soft skills */}
          <Skills />
          
          {/* Projects Section - Portfolio work showcase */}
          <Projects />
          
          {/* Experience Section - Work history and education */}
          <Experience />
          
          {/* Testimonials Section - Client feedback */}
          <Testimonials />
          
          {/* Contact Section - Form and contact info */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
