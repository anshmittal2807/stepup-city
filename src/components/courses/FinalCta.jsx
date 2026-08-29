import Reveal from '../shared/Reveal.jsx'
import { defaultCourses } from '../../data/data.js'

const defaultCta = defaultCourses[0].finalCta

function FinalCta({ cta = defaultCta }) {
  return (
    <section id="enroll" className="relative overflow-hidden bg-primary py-20 text-on-primary md:py-28">
      {/* Decorative backgrounds */}
      <div className="bg-dots-light absolute inset-0 opacity-30"></div>
      <div className="absolute left-1/2 top-0 h-80 w-[720px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-container-max flex-col items-center px-margin-mobile text-center md:px-margin-desktop">
        <Reveal>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-on-primary/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            <span className="material-symbols-outlined text-sm">rocket_launch</span>
            Limited Seats
          </span>
          <h2 className="font-headline-xl text-headline-xl text-balance">{cta.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl font-body-lg text-body-lg text-pretty text-on-primary/85">
            {cta.description}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <a
            className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-10 py-4 font-label-bold text-label-bold text-primary shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"
            href={cta.ctaHref}
          >
            {cta.ctaLabel}
            <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default FinalCta