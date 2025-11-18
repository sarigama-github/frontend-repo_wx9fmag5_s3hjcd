import { Sparkles, Rocket, Search, Bot } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Polished UX',
    desc: 'A clean, distraction-free reading experience with beautiful typography and responsive layout.'
  },
  {
    icon: Search,
    title: 'Instant Search',
    desc: 'Quickly find topics across your docs. Type to filter and jump right to the content.'
  },
  {
    icon: Bot,
    title: 'AI Helper',
    desc: 'Ask natural-language questions and get guided answers with relevant sources.'
  },
  {
    icon: Rocket,
    title: 'Fast by default',
    desc: 'Built on Vite + React + Tailwind for snappy performance and smooth HMR.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything you need to ship great docs</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Delight your users with clear content, intuitive navigation, and an AI that helps when docs fall short.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5">
              <div className="h-10 w-10 rounded-lg bg-orange-500/20 text-orange-200 flex items-center justify-center mb-4 group-hover:bg-orange-500/30">
                <f.icon size={20} />
              </div>
              <h3 className="font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
