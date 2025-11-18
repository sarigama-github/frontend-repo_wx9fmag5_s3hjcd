export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {year} Docy AI. All rights reserved.</p>
        <nav className="flex items-center gap-5">
          <a className="hover:text-white" href="#">Privacy</a>
          <a className="hover:text-white" href="#">Terms</a>
          <a className="hover:text-white" href="#">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
