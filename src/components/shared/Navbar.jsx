import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Expertise', href: '#services' },
  { label: 'Proof', href: '#work' },
  { label: 'Academy', to: '/courses' },
  { label: 'About', href: '#about' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hrefFor = (href) => (location.pathname === '/' ? href : `/${href}`)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell">
        <Link className="brand-mark" to="/" aria-label="StepUpCity home" onClick={() => setMenuOpen(false)}>
          <span className="brand-glyph" aria-hidden="true">S</span>
          <span className="brand-word">STEPUP<span>CITY</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => link.to ? (
            <Link key={link.label} to={link.to}>{link.label}</Link>
          ) : (
            <a key={link.label} href={hrefFor(link.href)}>{link.label}</a>
          ))}
        </nav>

        <a className="nav-cta" href={hrefFor('#contact')}>
          <span>Start a project</span>
          <span aria-hidden="true">↗</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <i aria-hidden="true" />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        {links.map((link, index) => link.to ? (
          <Link key={link.label} to={link.to} onClick={() => setMenuOpen(false)}>
            <span>0{index + 1}</span>{link.label}
          </Link>
        ) : (
          <a key={link.label} href={hrefFor(link.href)} onClick={() => setMenuOpen(false)}>
            <span>0{index + 1}</span>{link.label}
          </a>
        ))}
        <a className="mobile-menu-cta" href={hrefFor('#contact')} onClick={() => setMenuOpen(false)}>
          Let’s make growth happen <span>↗</span>
        </a>
      </div>
    </header>
  )
}

export default Navbar
