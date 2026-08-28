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
      className={`bg-surface font-body-md text-body-md fixed top-0 w-full z-50 border-b border-outline-variant transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-4">
        <Link
          to="/"
          onClick={closeMenu}
          className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2"
        >
          <img
            src="https://stepupcity.com/wp-content/uploads/2023/05/Digital-Marketing-Institute-Agency-3.png"
            alt="StepUpCity Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.active ? (
              <Link
                key={link.label}
                to="/"
                className="text-primary font-bold border-b-2 border-primary pb-1"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ),
          )}

          {/* Courses dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 focus:outline-none">
              Our Courses
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-surface border border-outline-variant shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
                      className="block px-4 py-3 text-body-md text-on-surface-variant hover:bg-primary-container hover:text-on-primary rounded-lg transition-colors"
                    >
                      {course.title}
                    </Link>
                  ))
                )}
                <Link
                  to="/admin"
                  className="block px-4 py-3 text-body-md text-on-surface-variant border-t border-outline-variant mt-1 pt-3 font-label-bold text-primary hover:bg-surface-container-low rounded-lg transition-colors"
                >
                  Manage Courses (Admin)
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="bg-primary-container text-on-primary font-label-bold text-label-bold px-6 py-3 rounded hover:bg-primary transition-colors duration-300 shadow-sm active:scale-95">
            Get a Free Audit
          </button>
        </div>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors"
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-surface border-t border-outline-variant shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-margin-mobile py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to || { pathname: '/', hash: link.href }}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  link.active
                    ? 'text-primary font-bold bg-surface-container-low'
                    : 'text-on-surface-variant font-medium hover:bg-surface-container-low'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 mt-2 border-t border-outline-variant">
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
                    className="block px-4 py-2 text-body-md text-on-surface-variant hover:bg-surface-container-low rounded-lg"
                  >
                    {course.title}
                  </Link>
                ))
              )}
              <Link
                to="/admin"
                onClick={closeMenu}
                className="block px-4 py-2 text-body-md font-label-bold text-primary hover:bg-surface-container-low rounded-lg"
              >
                Manage Courses (Admin)
              </Link>
            </div>

            <button className="w-full mt-3 bg-primary-container text-on-primary font-label-bold text-label-bold px-6 py-3 rounded hover:bg-primary transition-colors duration-300">
              Get a Free Audit
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar