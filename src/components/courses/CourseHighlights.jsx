import Reveal from '../shared/Reveal.jsx'
import { defaultCourses } from '../../data/data.js'

const defaultHighlights = defaultCourses[0].highlights

function CourseHighlights({ highlights = defaultHighlights }) {
  return (
    <section id="highlights" className="relative overflow-hidden bg-surface py-16 md:py-section-gap">
      <div className="bg-grid-dark absolute inset-0 opacity-40"></div>
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary-fixed/50 blur-3xl"></div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-fixed px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined text-sm">star</span>
              Course Highlights
            </span>
            <h2 className="font-headline-lg text-headline-lg text-balance text-on-background">
              What Makes This Course <span className="text-gradient-primary">Stand Out</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container-lowest p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-glow">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary via-primary-container to-primary-fixed-dim transition-transform duration-500 group-hover:scale-x-100"></div>

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-glow transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>

                <h3 className="font-headline-md text-headline-md text-on-background mb-2">{item.title}</h3>
                <p className="font-body-md text-body-md flex-grow text-pretty text-sm text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseHighlights