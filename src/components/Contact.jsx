import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Let’s collaborate</h2>
          <p className="mt-3 text-gray-700">Have a project in mind or just want to say hello? Drop a message.</p>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl"
        >
          <input className="rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Name" />
          <input className="rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Email" type="email" />
          <textarea className="sm:col-span-2 rounded-lg border border-gray-200 px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Your message" />
          <div>
            <button className="inline-flex items-center rounded-full bg-red-500 text-white font-semibold px-5 py-3 hover:bg-red-600 transition-colors">Send message</button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
