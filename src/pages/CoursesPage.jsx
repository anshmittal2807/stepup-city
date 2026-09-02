import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { useCourses } from '../data/useCourses.js'
import Navbar from '../components/shared/Navbar.jsx'
import Footer from '../components/shared/Footer.jsx'

function CoursesPage() {
  const { slug } = useParams()
  const courses = useCourses()
  const course = slug ? courses.find((item) => item.slug === slug) : courses[0]
  const [openModule, setOpenModule] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  if (!slug && course) return <Navigate to={`/courses/${course.slug}`} replace />

  if (!course) {
    return (
      <main className="course-empty">
        <span>404 / LOST SIGNAL</span>
        <h1>Course not found.</h1>
        <Link to="/">Return home ↗</Link>
      </main>
    )
  }

  const { hero } = course

  return (
    <>
      <Navbar />
      <main className="course-page">
        <section className="course-hero">
          <div className="course-grid" aria-hidden="true" />
          <div className="course-kicker"><i />{hero.badge}</div>
          <h1>{hero.titlePrefix}<br /><span>{hero.titleHighlight}</span><br />{hero.titleSuffix}</h1>
          <div className="course-hero-bottom">
            <p>{hero.subtitle}</p>
            <a className="magnetic-button" href={hero.ctaHref || '#enroll'}>
              <span>{hero.ctaLabel}</span><i>↗</i>
            </a>
          </div>
          <div className="course-stats">
            {hero.stats.map((stat) => <div key={stat.label}><span>{stat.label}</span><strong>{stat.value}</strong></div>)}
          </div>
        </section>

        <section className="course-proof">
          <div className="course-proof-copy">
            <div className="eyebrow"><i />Built inside an agency</div>
            <h2>Learn marketing by<br /><span>actually doing it.</span></h2>
            <p>Skip passive lectures. Every module turns knowledge into portfolio-ready work with live briefs, current tools and senior feedback.</p>
          </div>
          <div className="course-highlights">
            {course.highlights.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="course-curriculum">
          <div className="curriculum-head">
            <div className="eyebrow eyebrow-light"><i />The curriculum</div>
            <h2>From curious to<br /><span>career-ready.</span></h2>
            <p>A complete skill stack, sequenced the way real client work happens.</p>
          </div>
          <div className="module-list">
            {course.modules.map((module, index) => (
              <article className={openModule === index ? 'is-open' : ''} key={module.title}>
                <button type="button" onClick={() => setOpenModule(openModule === index ? -1 : index)} aria-expanded={openModule === index}>
                  <span>0{index + 1}</span>
                  <h3>{module.title.replace(/^\d+\.\s*/, '')}</h3>
                  <i>{openModule === index ? '−' : '+'}</i>
                </button>
                <div className="module-content">
                  <ul>{module.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mentor-section">
          <div className="mentor-intro">
            <div className="eyebrow"><i />The people in the room</div>
            <h2>Taught by doers.<br /><span>Not presenters.</span></h2>
          </div>
          <div className="mentor-grid">
            {course.mentors.map((mentor, index) => (
              <article key={mentor.name}>
                <div className="mentor-image">
                  <img src={mentor.image} alt={mentor.name} />
                  <span>0{index + 1}</span>
                </div>
                <h3>{mentor.name}</h3>
                <p>{mentor.role}</p>
                <small>{mentor.experience}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="course-faq">
          <div>
            <div className="eyebrow"><i />Good questions</div>
            <h2>Before you<br /><span>step up.</span></h2>
            <p>Still weighing it up? Book a free demo and talk to a mentor—not a sales script.</p>
          </div>
          <div className="faq-list">
            {course.faqs.map((faq, index) => (
              <article className={openFaq === index ? 'is-open' : ''} key={faq.question}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  <span>0{index + 1}</span><strong>{faq.question}</strong><i>{openFaq === index ? '−' : '+'}</i>
                </button>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="course-cta" id="enroll">
          <span>YOUR NEXT MOVE</span>
          <h2>{course.finalCta.heading}</h2>
          <p>{course.finalCta.description}</p>
          <a href={course.finalCta.ctaHref}>{course.finalCta.ctaLabel}<i>↗</i></a>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CoursesPage
