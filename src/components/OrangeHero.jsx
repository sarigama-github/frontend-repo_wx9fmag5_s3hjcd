import { motion } from 'framer-motion'

export default function OrangeHero({ onStart, onAsk }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-24 w-80 h-80 bg-orange-500/30 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-amber-400/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative pt-24 pb-14 text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-orange-500/15 text-orange-200 border border-orange-300/20"
        >
          New • AI-assisted documentation
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight text-white"
        >
          Ship docs users love.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl text-orange-100 max-w-2xl mx-auto"
        >
          Docy AI blends a clean reading experience with an integrated AI helper so people get answers faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <button
            onClick={onStart}
            className="px-5 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/25 transition"
          >
            Get Started
          </button>
          <button
            onClick={onAsk}
            className="px-5 py-3 rounded-lg bg-white text-orange-700 font-semibold"
          >
            Ask AI
          </button>
        </motion.div>
      </div>
    </section>
  )
}
