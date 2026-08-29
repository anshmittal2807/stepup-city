import Reveal from '../shared/Reveal.jsx'
import { defaultCourses } from '../../data/data.js'

const defaultGains = defaultCourses[0].gains
const defaultGainsImage = defaultCourses[0].gainsImage

function WhatYouWillGain({ gains = defaultGains, image = defaultGainsImage }) {
  return (
    <section id="gains" className="relative overflow-hidden bg-surface py-16 md:py-section-gap">
      <div className="bg-dots-dark absolute inset-0 opacity-40"></div>
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-primary-fixed/50 blur-3xl"></div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-fixed px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="material-symbols-outlined text-sm">workspace_premium</span>
                Outcomes
              </span>
              <h2 className="font-headline-lg text-headline-lg text-balance text-on-background">
                What You Will <span className="text-gradient-primary">Gain</span>
              </h2>
              <ul className="mt-8 space-y-6">
                {gains.map((gain) => (
                  <li key={gain.title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-glow">
                      <span className="material-symbols-outlined text-xl">{gain.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-label-bold text-label-bold text-on-background">{gain.title}</h4>
                      <p className="text-sm text-pretty text-on-surface-variant">{gain.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary-container/25 via-primary-fixed/40 to-transparent blur-2xl"></div>
              {image ? (
                <div className="relative h-64 w-full md:h-96">
                  <div className="absolute inset-0 flex items-center justify-center rounded-[2rem] border border-outline-variant/30 bg-gradient-to-br from-primary-fixed/60 to-primary-container/20">
                    <span className="material-symbols-outlined text-6xl text-primary-container/60">emoji_events</span>
                  </div>
                  <img
                    alt="Success outcomes"
                    className="relative h-full w-full rounded-[2rem] border border-outline-variant/30 object-cover shadow-2xl shadow-primary-container/15"
                    src={image}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              ) : (
                <div className="flex h-64 w-full items-center justify-center rounded-[2rem] border border-outline-variant/30 bg-gradient-to-br from-primary-fixed/60 to-primary-container/20 md:h-96">
                  <span className="material-symbols-outlined text-6xl text-primary-container/60">emoji_events</span>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default WhatYouWillGain