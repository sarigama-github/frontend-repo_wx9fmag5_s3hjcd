import { useEffect, useState } from 'react'

export default function DocContent({ slug }) {
  const [page, setPage] = useState(null)
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    setLoading(true)
    fetch(`${baseUrl}/api/pages/${slug}`)
      .then(r => {
        if (!r.ok) throw new Error('Not found')
        return r.json()
      })
      .then(setPage)
      .catch(() => setPage(null))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <div className="text-blue-100">Loading...</div>
  if (!page) return <div className="text-red-200">Page not found.</div>

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{page.title}</h1>
      <div className="whitespace-pre-wrap text-blue-100/90 leading-relaxed">
        {page.content}
      </div>
    </article>
  )
}
