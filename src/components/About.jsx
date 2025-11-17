import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start"
        >
          <div className="md:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">About me</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I’m a frontend engineer focused on building delightful, accessible interfaces. I value simplicity, speed, and craft.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Performance", "Accessibility", "Animation", "Design systems"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900">{item}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Crafting experiences with a focus on {item.toLowerCase()} and delightful micro-interactions.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
