'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link href="#hero" className="nav-logo">
        KA<span className="nav-dot" />
      </Link>

      <div className={`nav-links${open ? ' open' : ''}`}>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>

      <a href="#contact" className="nav-cta">Hire Me</a>

      <button
        className="menu-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
