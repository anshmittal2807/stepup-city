import Reveal from '../shared/Reveal.jsx'
import { defaultCourses } from '../../data/data.js'

const defaultModules = defaultCourses[0].modules

function CourseModules({ modules = defaultModules }) {
  return (
    <section id="courses" className="relative overflow-hidden bg-primary py-16 text-on-primary md:py-section-gap">
      {/* Decorative backgrounds */}
      <div className="bg-dots-light absolute inset-0 opacity-40"></div>
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-on-primary/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
              <span className="material-symbols-outlined text-sm">menu_book</span>
              Curriculum
            </span>
            <h2 className="font-headline-lg text-headline-lg text-balance">
              What You&apos;ll <span className="text-gradient-white">Learn</span>
            </h2>
            <p className="mt-3 font-body-lg text-body-lg text-pretty text-on-primary/85">
              A comprehensive, industry-aligned curriculum designed to take you from beginner to expert.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, i) => (
            <Reveal key={`${module.title}-${i}`} delay={i * 80}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-on-primary/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-on-primary/50 hover:bg-white/15">
                <span className="pointer-events-none absolute -right-2 -top-4 select-none font-headline-xl text-6xl font-bold text-white/10">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-on-primary transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-xl">{module.icon}</span>
                </div>

                <h3 className="font-headline-md text-headline-md text-lg text-on-primary mb-3">{module.title}</h3>
                <ul className="space-y-2 text-sm text-on-primary/85">
                  {(module.topics || []).map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-pretty">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-on-primary/70"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseModules