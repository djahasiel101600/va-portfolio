import React from 'react'

const Attributes: React.FC = () => {
  const attrs = [
    { icon: '✅', title: 'Independent & Reliable', desc: 'Proactive problem-solver who delivers results without constant supervision' },
    { icon: '🧠', title: 'Strategic Thinker', desc: 'Maintains clarity and strategic approach even under pressure' },
    { icon: '⚡', title: 'Fast Learner', desc: 'Quickly adapts to new tools, systems, and processes' },
    { icon: '🎯', title: 'Outcome-Oriented', desc: 'Focused on efficiency, accuracy, and measurable results' },
    { icon: '💬', title: 'Clear Communicator', desc: 'Tailors explanations to audience, using analogies when helpful' },
  ]

  return (
    <section id="attributes" className="py-20 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-zinc-900 text-center">Key Attributes</h2>
        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          {attrs.map((a) => (
            <div key={a.title} className="p-6 bg-white rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-3">{a.icon}</div>
              <h3 className="text-lg font-semibold text-zinc-900">{a.title}</h3>
              <p className="mt-2 text-zinc-600 text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Attributes
