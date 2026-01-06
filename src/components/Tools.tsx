import React from 'react'

const Tools: React.FC = () => {
  const tools = [
    'Microsoft Office Suite',
    'Google Workspace',
    'Photoshop & Canva',
    'Zoom & Google Meet',
    'API Integration',
    'AI-assisted Coding',
    'Web App Frameworks',
    'Task Management Tools',
  ]

  return (
    <section id="tools" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-zinc-900 text-center">Technical Tools</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {tools.map((t) => (
            <div key={t} className="px-4 py-2 rounded-full bg-sky-100 text-zinc-900 font-medium">{t}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
