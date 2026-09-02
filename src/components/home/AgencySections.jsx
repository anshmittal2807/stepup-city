import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../shared/Reveal.jsx'

const services = [
  {
    number: '01',
    title: 'Brand & Positioning',
    copy: 'A sharp point of view, verbal identity and visual world that make you the obvious choice.',
    tags: ['Research', 'Strategy', 'Identity'],
  },
  {
    number: '02',
    title: 'Performance & Media',
    copy: 'Paid ecosystems designed around profitable acquisition—not vanity metrics or bloated reports.',
    tags: ['Google Ads', 'Meta', 'CRO'],
  },
  {
    number: '03',
    title: 'Search & Content',
    copy: 'Search authority and content engines that compound attention long after the campaign ends.',
    tags: ['SEO', 'Content', 'Authority'],
  },
  {
    number: '04',
    title: 'Web & Experience',
    copy: 'Fast, expressive digital experiences built to communicate clearly and convert decisively.',
    tags: ['UX/UI', 'Development', 'Landing pages'],
  },
]

const projects = [
  {
    title: 'Arclane Homes',
    category: 'Real Estate · Full-funnel growth',
    image: '/images/hero-home.jpg',
    metric: '+284%',
    metricLabel: 'qualified leads',
    tone: 'red',
  },
  {
    title: 'Northstar Learning',
    category: 'Education · Brand + performance',
    image: '/images/hero-course.jpg',
    metric: '4.8×',
    metricLabel: 'return on ad spend',
    tone: 'ink',
  },
  {
    title: 'Sól Commerce',
    category: 'E-commerce · SEO + paid media',
    image: '/images/hero-social.jpg',
    metric: '+172%',
    metricLabel: 'revenue in 6 months',
    tone: 'paper',
  },
]

const principles = [
  ['01', 'Diagnose', 'We find the one constraint slowing growth—before prescribing channels.'],
  ['02', 'Design', 'We turn the insight into a distinctive brand and conversion system.'],
  ['03', 'Deploy', 'Creative, media and technology move together, with one accountable team.'],
  ['04', 'Compound', 'Every signal feeds the next iteration. Good performance gets better.'],
]

const quotes = [
  {
    quote: 'They did not just lower our acquisition cost. They changed how our category sees us.',
    name: 'Priya Gupta',
    role: 'Marketing Director',
    image: '/images/reviews/priya.jpg',
  },
  {
    quote: 'StepUpCity connected the brand story to revenue. The result was our strongest quarter yet.',
    name: 'Amit Verma',
    role: 'E-commerce Founder',
    image: '/images/reviews/amit.jpg',
  },
  {
    quote: 'The thinking is senior, the execution is fast, and the reporting is refreshingly honest.',
    name: 'Rahul Sharma',
    role: 'Technology CEO',
    image: '/images/reviews/rahul.jpg',
  },
]

function SectionHead({ label, title, aside }) {
  return (
    <div className="section-head">
      <div className="eyebrow"><i />{label}</div>
      <h2>{title}</h2>
      {aside && <p>{aside}</p>}
    </div>
  )
}

function Services() {
  const [active, setActive] = useState(0)

  return (
    <section className="services-section" id="services">
      <Reveal>
        <SectionHead
          label="Our expertise"
          title={<>One team.<br /><span>Every growth lever.</span></>}
          aside="We blend strategy, creative, media and technology so every part of your marketing amplifies the rest."
        />
      </Reveal>

      <div className="services-list">
        {services.map((service, index) => (
          <article
            className={active === index ? 'is-active' : ''}
            key={service.title}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            tabIndex="0"
          >
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
            <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function Work() {
  return (
    <section className="work-section" id="work">
      <Reveal>
        <div className="work-intro">
          <div className="eyebrow eyebrow-light"><i />Selected impact</div>
          <h2>Proof lives in<br /><span>the movement.</span></h2>
          <p>Less theatre. More evidence. A selection of brands we helped move from “promising” to impossible to overlook.</p>
        </div>
      </Reveal>

      <div className="project-stack">
        {projects.map((project, index) => (
          <Reveal key={project.title}>
            <article className={`project-card project-${project.tone}`}>
              <div className="project-meta">
                <span>0{index + 1}</span>
                <span>{project.category}</span>
              </div>
              <div className="project-image">
                <img src={project.image} alt="" />
                <div className="project-monogram" aria-hidden="true">{project.title.charAt(0)}</div>
              </div>
              <div className="project-result">
                <h3>{project.title}</h3>
                <div><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
                <a href="#contact" aria-label={`Discuss a project like ${project.title}`}>View story <span>↗</span></a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Method() {
  return (
    <section className="method-section" id="about">
      <div className="method-aside">
        <div className="eyebrow"><i />How we work</div>
        <div className="method-sticky">
          <span className="method-star">✦</span>
          <h2>Small team.<br />Senior minds.<br /><em>Zero silos.</em></h2>
          <p>You get the people doing the thinking—not layers of account management between you and the work.</p>
        </div>
      </div>
      <div className="method-steps">
        {principles.map(([number, title, copy]) => (
          <Reveal key={title}>
            <article>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Academy() {
  return (
    <section className="academy-section">
      <div className="academy-marquee" aria-hidden="true">
        <div>LEARN THE WORK · DO THE WORK · LEAD THE WORK · LEARN THE WORK · DO THE WORK · LEAD THE WORK ·&nbsp;</div>
        <div>LEARN THE WORK · DO THE WORK · LEAD THE WORK · LEARN THE WORK · DO THE WORK · LEAD THE WORK ·&nbsp;</div>
      </div>
      <div className="academy-layout">
        <Reveal className="academy-copy">
          <div className="eyebrow eyebrow-light"><i />StepUpCity Academy</div>
          <h2>We don’t gatekeep<br /><span>what works.</span></h2>
          <p>Live, practical programs built inside a working agency. Learn on real briefs, with real tools, from people running campaigns every day.</p>
          <Link className="outline-button" to="/courses">Explore the academy <span>↗</span></Link>
        </Reveal>
        <div className="academy-scoreboard">
          <div><span>LIVE PROJECTS</span><strong>10+</strong></div>
          <div><span>PLACEMENT SUPPORT</span><strong>100%</strong></div>
          <div><span>STUDENTS TRAINED</span><strong>500+</strong></div>
          <div className="academy-radar" aria-hidden="true">
            <i /><i /><i /><i />
            <b>SKILL<br />SIGNAL</b>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [active, setActive] = useState(0)
  const quote = quotes[active]

  return (
    <section className="testimonials-section" id="reviews">
      <SectionHead label="Client signal" title={<>What ambitious<br /><span>sounds like.</span></>} />
      <div className="quote-stage">
        <span className="quote-mark">“</span>
        <blockquote>{quote.quote}</blockquote>
        <div className="quote-author">
          <img src={quote.image} alt={quote.name} />
          <div><strong>{quote.name}</strong><span>{quote.role}</span></div>
        </div>
      </div>
      <div className="quote-controls" aria-label="Testimonial controls">
        {quotes.map((item, index) => (
          <button
            key={item.name}
            className={active === index ? 'is-active' : ''}
            onClick={() => setActive(index)}
            aria-label={`Show testimonial ${index + 1}`}
          >
            0{index + 1}
          </button>
        ))}
        <span>4.9 ★ ON GOOGLE</span>
      </div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <div className="eyebrow eyebrow-light"><i />Your move</div>
        <h2>Ready to become<br /><span>the obvious choice?</span></h2>
        <p>Tell us what is moving, what is stuck, and where you want to go. We’ll return with a clear first point of view.</p>
        <a href="mailto:hello@stepupcity.com">hello@stepupcity.com <span>↗</span></a>
      </div>
      {submitted ? (
        <div className="contact-success" role="status">
          <span>✓</span>
          <h3>Signal received.</h3>
          <p>Thanks—we’ll get back to you with a thoughtful next step.</p>
          <button onClick={() => setSubmitted(false)}>Send another note</button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={submit}>
          <label><span>01 / YOUR NAME</span><input required name="name" placeholder="What should we call you?" /></label>
          <label><span>02 / WORK EMAIL</span><input required type="email" name="email" placeholder="you@company.com" /></label>
          <label><span>03 / THE AMBITION</span><textarea required name="brief" rows="3" placeholder="What are we making move?" /></label>
          <button type="submit">Send the signal <span>↗</span></button>
        </form>
      )}
    </section>
  )
}

export default function AgencySections() {
  return (
    <>
      <Services />
      <Work />
      <Method />
      <Academy />
      <Testimonials />
      <Contact />
    </>
  )
}
