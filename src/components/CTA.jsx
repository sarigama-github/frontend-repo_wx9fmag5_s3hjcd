export default function CTA({ onStart, onAsk }) {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="rounded-2xl p-10 bg-gradient-to-br from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-500/30">
          <h3 className="text-3xl md:text-4xl font-bold">Ready to ship delightful docs?</h3>
          <p className="mt-3 text-white/90">Start with our templates, wire up search and AI, and publish with confidence.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={onStart} className="px-5 py-3 rounded-md bg-black/20 hover:bg-black/30 backdrop-blur border border-white/20">Get Started</button>
            <button onClick={onAsk} className="px-5 py-3 rounded-md bg-white text-orange-700 font-semibold">Ask AI</button>
          </div>
        </div>
      </div>
    </section>
  )
}
