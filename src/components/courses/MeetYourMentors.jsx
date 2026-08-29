import Reveal from '../shared/Reveal.jsx'
import { defaultCourses } from '../../data/data.js'

const defaultMentors = defaultCourses[0].mentors

function MeetYourMentors({ mentors = defaultMentors }) {
  return (
    <section id="mentors" className="relative overflow-hidden bg-surface-container-low py-16 md:py-section-gap">
      <div className="bg-dots-dark absolute inset-0 opacity-40"></div>
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-primary-fixed/50 blur-3xl"></div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-fixed px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined text-sm">groups</span>
              Meet Your Mentors
            </span>
            <h2 className="font-headline-lg text-headline-lg text-balance text-on-background">
              Learn From Industry <span className="text-gradient-primary">Experts</span>
            </h2>
            <p className="mt-3 font-body-lg text-body-lg text-pretty text-on-surface-variant">
              Learn from industry experts who have run successful campaigns for top brands.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {mentors.map((mentor, i) => (
            <Reveal key={`${mentor.name}-${i}`} delay={i * 80}>
              <div className="group flex h-full flex-col items-center rounded-3xl border border-outline-variant/30 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="relative mb-4 h-24 w-24">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-surface-container-high text-3xl font-bold text-on-surface-variant ring-2 ring-primary-fixed ring-offset-2">
                    {mentor.name.charAt(0).toUpperCase()}
                  </div>
                  {mentor.image && (
                    <img
                      alt={mentor.name}
                      className="absolute inset-0 h-24 w-24 rounded-full object-cover ring-2 ring-primary-fixed ring-offset-2"
                      src={mentor.image}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  )}
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-on-primary">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      verified
                    </span>
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background">{mentor.name}</h3>
                <p className="font-body-md text-body-md font-medium text-primary-container">{mentor.role}</p>
                <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary-fixed px-3 py-1 text-xs font-semibold text-primary">
                  <span className="material-symbols-outlined text-xs">history_edu</span>
                  {mentor.experience}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetYourMentors