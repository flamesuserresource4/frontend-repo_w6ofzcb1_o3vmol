import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Interactive Dashboard',
    description: 'A data-rich dashboard with real-time charts and motion.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#'
  },
  {
    title: 'E-commerce UI',
    description: 'Minimal storefront with smart filters and micro-interactions.',
    tags: ['React', 'Design System'],
    link: '#'
  },
  {
    title: 'Portfolio Template',
    description: 'Fast, accessible template with modern scroll animations.',
    tags: ['Vite', 'Accessibility'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Projects</h2>
          <a href="#" className="hidden sm:inline-flex text-sm font-medium text-gray-600 hover:text-gray-900">See all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">Case study</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-700">{t}</span>
                ))}
              </div>
              <motion.div
                layoutId={`underline-${i}`}
                className="mt-4 h-px w-0 bg-red-500 group-hover:w-full transition-all"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
