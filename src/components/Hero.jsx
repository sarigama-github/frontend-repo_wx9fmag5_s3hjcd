import { motion } from 'framer-motion'

export default function Hero({ onStart }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/40 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/30 blur-3xl rounded-full"></div>
      </div>

      <div className="relative py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
        >
          Docy AI Documentation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
        >
          A modern docs experience with smart search, clean navigation, and an AI helper built in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <button
            onClick={onStart}
            className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20 transition"
          >
            Get Started
          </button>
          <a href="#features" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/20 transition">
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  )
}
