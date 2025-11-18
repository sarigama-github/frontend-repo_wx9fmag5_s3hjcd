import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ onStart, onAsk }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-black/20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-orange-500 flex items-center justify-center font-bold text-white">D</span>
          <span className="font-semibold text-white">Docy AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#how-it-works">How it works</a>
          <a className="hover:text-white" href="#faq">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button onClick={onAsk} className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 text-white">Ask AI</button>
          <button onClick={onStart} className="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow shadow-orange-500/30">Get Started</button>
        </div>
        <button className="md:hidden text-white/80" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu size={22} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/30">
          <div className="px-4 py-3 space-y-3">
            <a className="block text-white/90" href="#features" onClick={() => setOpen(false)}>Features</a>
            <a className="block text-white/90" href="#how-it-works" onClick={() => setOpen(false)}>How it works</a>
            <a className="block text-white/90" href="#faq" onClick={() => setOpen(false)}>FAQ</a>
            <div className="flex gap-2 pt-2">
              <button onClick={() => { setOpen(false); onAsk?.() }} className="flex-1 px-3 py-2 rounded-md bg-white/10 text-white">Ask AI</button>
              <button onClick={() => { setOpen(false); onStart?.() }} className="flex-1 px-3 py-2 rounded-md bg-orange-500 text-white">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
