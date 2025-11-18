import { useState } from 'react'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import DocContent from './components/DocContent'
import AskAI from './components/AskAI'

function DocsPage() {
  const { slug } = useParams()
  return <DocContent slug={slug || 'getting-started'} />
}

function Shell() {
  const [askOpen, setAskOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="flex">
        <Sidebar onAsk={() => setAskOpen(true)} />
        <main className="flex-1 p-6 md:p-10">
          <Routes>
            <Route index element={<Hero onStart={() => navigate('/docs/getting-started')} />} />
            <Route path="/docs/:slug" element={<DocsPage />} />
          </Routes>
        </main>
      </div>

      <AskAI open={askOpen} onClose={() => setAskOpen(false)} />
    </div>
  )
}

export default function App() {
  return <Shell />
}
