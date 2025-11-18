import { useState } from 'react'
import { X } from 'lucide-react'

export default function AskAI({ open, onClose }) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState(null)
  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const ask = async () => {
    if (!question.trim()) return
    setLoading(true)
    setAnswer(null)
    try {
      const res = await fetch(`${baseUrl}/api/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      })
      const data = await res.json()
      setAnswer(data)
    } catch (e) {
      setAnswer({ answer: 'There was a problem reaching the AI helper. Try again.' })
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end md:items-center justify-center p-4 z-50">
      <div className="w-full md:max-w-lg bg-slate-900 border border-white/10 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold text-white">Ask Docy AI</div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded">
            <X className="w-4 h-4 text-blue-100" />
          </button>
        </div>
        <div className="space-y-3">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question about the docs..."
            className="w-full h-24 bg-white/5 border border-white/10 rounded-lg p-3 text-blue-100 placeholder:text-blue-300/60 focus:outline-none"
          />
          <button onClick={ask} disabled={loading} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white rounded-md">
            {loading ? 'Thinking...' : 'Ask'}
          </button>
          {answer && (
            <div className="mt-2 bg-white/5 border border-white/10 rounded-lg p-3 text-blue-100">
              <div className="whitespace-pre-wrap">{answer.answer}</div>
              {answer.sources?.length > 0 && (
                <div className="mt-2 text-sm text-blue-300">
                  Sources: {answer.sources.join(', ')}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
