import { useState } from 'react'
import { Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import DocContent from './components/DocContent'
import AskAI from './components/AskAI'
import Navbar from './components/Navbar'
import OrangeHero from './components/OrangeHero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function DocsPage() {
  const { slug } = useParams()
  return <DocContent slug={slug || 'getting-started'} />
}

function Landing({ onStart, onAsk }) {
  return (
    <>
      <OrangeHero onStart={onStart} onAsk={onAsk} />
      <Features />
      <CTA onStart={onStart} onAsk={onAsk} />
      <Footer />
    </>
  )
}

function DocsLayout({ onAsk }) {
  return (
    <div className="flex">
      <Sidebar onAsk={onAsk} />
      <main className="flex-1 p-6 md:p-10">
        <DocsPage />
      </main>
    </div>
  )
}

export default function App() {
  const [askOpen, setAskOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const isDocs = location.pathname.startsWith('/docs')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar onStart={() => navigate('/docs/getting-started')} onAsk={() => setAskOpen(true)} />

      <Routes>
        <Route
          index
          element={<Landing onStart={() => navigate('/docs/getting-started')} onAsk={() => setAskOpen(true)} />}
        />
        <Route path="/docs/:slug" element={<DocsLayout onAsk={() => setAskOpen(true)} />} />
      </Routes>

      <AskAI open={askOpen} onClose={() => setAskOpen(false)} />
    </div>
  )
}
