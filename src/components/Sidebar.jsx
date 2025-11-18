import { useEffect, useState } from 'react'
import { Menu, BookOpen, Search, MessageCircle } from 'lucide-react'

export default function Sidebar({ onAsk }) {
  const [open, setOpen] = useState(true)
  const [pages, setPages] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/pages`)
      .then(r => r.json())
      .then(setPages)
      .catch(() => setPages([]))
  }, [])

  return (
    <aside className={`transition-all duration-300 ${open ? 'w-72' : 'w-16'} bg-slate-800/60 border-r border-white/10 h-screen sticky top-0`}> 
      <div className="flex items-center gap-2 p-4 border-b border-white/10">
        <button onClick={() => setOpen(v => !v)} className="p-2 rounded hover:bg-white/10">
          <Menu className="w-5 h-5 text-white" />
        </button>
        {open && <div className="text-white font-semibold">Docy AI</div>}
      </div>

      <div className="p-3">
        <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-blue-200" />
          {open && <input placeholder="Search docs" className="bg-transparent outline-none text-sm text-blue-100 placeholder:text-blue-200/60 w-full" />}
        </div>
      </div>

      <nav className="px-2">
        {pages.map(p => (
          <a key={p.slug} href={`/docs/${p.slug}`} className="flex items-center gap-3 px-3 py-2 rounded-md text-blue-100 hover:bg-white/10">
            <BookOpen className="w-4 h-4" />
            {open && <span>{p.title}</span>}
          </a>
        ))}
      </nav>

      <div className="mt-auto p-4">
        <button onClick={onAsk} className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-2 rounded-md">
          <MessageCircle className="w-4 h-4" />
          {open && <span>Ask AI</span>}
        </button>
      </div>
    </aside>
  )
}
