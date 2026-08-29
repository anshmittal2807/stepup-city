import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCourses } from '../../data/useCourses.js'

const navLinks = [
  { label: 'Home', href: '#home', active: true, to: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Why StepUpCity', href: '#why-us' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Blogs', href: '#blogs' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const courses = useCourses()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`bg-surface/85 font-body-md text-body-md fixed top-0 z-50 w-full border-b border-outline-variant backdrop-blur-xl transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-primary-container to-primary-fixed-dim"></div>

      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between gap-4 px-margin-mobile md:px-margin-desktop">
        <Link
          to="/"
          onClick={closeMenu}
          className="font-headline-md text-headline-md flex items-center gap-2 font-bold text-primary"
        >
          <img
            src="https://stepupcity.com/wp-content/uploads/2023/05/Digital-Marketing-Institute-Agency-3.png"
            alt="StepUpCity Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.active ? (
              <Link
                key={link.label}
                to="/"
                className="border-b-2 border-primary pb-1 font-bold text-primary"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="font-medium text-on-surface-variant transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ),
          )}

          {/* Courses dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 font-medium text-on-surface-variant transition-colors duration-200 hover:text-primary focus:outline-none">
              Our Courses
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div className="invisible absolute top-full left-0 z-50 mt-2 w-64 rounded-xl border border-outline-variant bg-surface opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="p-2">
                {courses.length === 0 ? (
                  <span className="block px-4 py-3 text-body-md text-on-surface-variant">
                    No courses yet
                  </span>
                ) : (
                  courses.map((course) => (
                    <Link
                      key={course.id}
                      to={`/courses/${course.slug}`}
                      className="block rounded-lg px-4 py-3 text-body-md text-on-surface-variant transition-colors hover:bg-primary-container hover:text-on-primary"
                    >
                      {course.title}
                    </Link>
                  ))
                )}
                <Link
                  to="/admin"
                  className="mt-1 block rounded-lg border-t border-outline-variant px-4 py-3 pt-3 font-label-bold text-body-md text-primary transition-colors hover:bg-surface-container-low"
                >
                  Manage Courses (Admin)
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button className="bg-gradient-to-r from-primary to-primary-container font-label-bold text-label-bold rounded-xl px-6 py-3 text-on-primary shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg active:scale-95">
            Get a Free Audit
          </button>
        </div>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-low lg:hidden"
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-outline-variant bg-surface shadow-lg lg:hidden">
          <div className="space-y-1 px-margin-mobile py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to || { pathname: '/', hash: link.href }}
                onClick={closeMenu}
                className={`block rounded-lg px-4 py-3 transition-colors ${
                  link.active
                    ? 'bg-surface-container-low font-bold text-primary'
                    : 'font-medium text-on-surface-variant hover:bg-surface-container-low'
                }`}
              >
                {link.label}
              </Link>
            ))}
<div className="mt-2 border-t border-outline-variant pt-2">
              <p className="px-4 pb-1 text-xs font-label-bold uppercase tracking-wider text-secondary">
                Our Courses
              </p>
              {courses.length === 0 ? (
                <p className="px-4 py-2 text-sm text-on-surface-variant">No courses yet</p>
              ) : (
                courses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/courses/${course.slug}`}
                    onClick={closeMenu}
                    className="block rounded-lg px-4 py-2 text-body-md text-on-surface-variant hover:bg-surface-container-low"
                  >
                    {course.title}
                  </Link>
                ))
              )}
              <Link
                to="/admin"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-2 text-body-md font-label-bold text-primary hover:bg-surface-container-low"
              >
                Manage Courses (Admin)
              </Link>
            </div>

            <button className="bg-gradient-to-r from-primary to-primary-container font-label-bold text-label-bold mt-3 w-full rounded-xl px-6 py-3 text-on-primary shadow-glow transition-all duration-300 hover:shadow-glow-lg">
              Get a Free Audit
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar