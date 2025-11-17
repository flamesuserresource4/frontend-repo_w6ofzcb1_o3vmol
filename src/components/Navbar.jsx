import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const LinkItem = ({ href, label }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
    >
      {label}
    </a>
  )

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#home" className="text-lg font-bold tracking-tight">Portfolio</a>
        <div className="hidden md:flex items-center gap-2">
          <LinkItem href="#about" label="About" />
          <LinkItem href="#projects" label="Projects" />
          <LinkItem href="#contact" label="Contact" />
          <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-red-500 text-white text-sm font-semibold px-4 py-2 hover:bg-red-600 transition-colors">Hire me</a>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-black/5"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col">
            <a href="#about" onClick={() => setOpen(false)} className="py-2">About</a>
            <a href="#projects" onClick={() => setOpen(false)} className="py-2">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2">Contact</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2 text-red-600 font-semibold">Hire me</a>
          </div>
        </div>
      )}
    </header>
  )
}
