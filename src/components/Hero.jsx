import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Minimalist portfolio for bold ideas
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700">
              I craft clean, performant web experiences with a focus on detail, motion, and clarity.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center rounded-full bg-gray-900 text-white font-semibold px-5 py-3 hover:bg-black transition-colors">View projects</a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-gray-300 text-gray-900 font-semibold px-5 py-3 hover:border-gray-400 transition-colors">Contact</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
