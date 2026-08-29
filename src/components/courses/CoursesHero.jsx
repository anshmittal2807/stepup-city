import Reveal from '../shared/Reveal.jsx'
import { defaultCourses } from '../../data/data.js'

const defaultHero = defaultCourses[0].hero

function CoursesHero({ hero = defaultHero }) {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-8 md:pb-24 md:pt-16">
      {/* Decorative backgrounds */}
      <div className="bg-dots-dark absolute inset-0 -z-20 opacity-50"></div>
      <div className="absolute -left-24 -top-24 -z-10 h-[420px] w-[420px] rounded-full bg-primary-fixed/70 blur-3xl"></div>
      <div className="absolute -right-24 top-1/4 -z-10 h-[480px] w-[480px] rounded-full bg-primary-container/15 blur-3xl"></div>
      <div className="absolute left-0 top-0 -z-10 h-full w-2/3 bg-gradient-to-br from-primary-fixed/30 to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-surface to-transparent"></div>

      <div className="relative mx-auto grid max-w-container-max grid-cols-1 items-center gap-14 px-margin-mobile md:px-margin-desktop lg:grid-cols-2">
        {/* Left column */}
        <div className="z-10 flex w-full flex-col gap-8">
          {hero.badge && (
            <Reveal>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container-lowest/70 px-4 py-2 shadow-sm backdrop-blur">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-container opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-container"></span>
                </span>
                <span className="font-label-bold text-label-bold uppercase tracking-wider text-on-surface-variant">
                  {hero.badge}
                </span>
              </div>
            </Reveal>
          )}

          <Reveal delay={100}>
            <h1 className="font-headline-xl text-headline-xl text-balance text-on-background">
              {hero.titlePrefix}{' '}
              <span className="text-gradient-primary relative inline-block">
                {hero.titleHighlight}
                <svg
                  className="pointer-events-none absolute -bottom-1.5 left-0 h-2.5 w-full md:-bottom-2 md:h-3"
                  viewBox="0 0 120 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2 9C30 3 70 3 118 9" stroke="url(#courses-underline)" strokeWidth="4" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="courses-underline" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#d32f2f" />
                      <stop offset="1" stopColor="#ff9a9e" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              {hero.titleSuffix}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-xl font-body-lg text-body-lg text-pretty text-on-surface-variant">{hero.subtitle}</p>
          </Reveal>

          <Reveal delay={250}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary to-primary-container px-8 py-4 font-label-bold text-label-bold text-on-primary shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"
                href={hero.ctaHref}
              >
                {hero.ctaLabel}
                <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </Reveal>

          {hero.stats.length > 0 && (
            <Reveal delay={300}>
              <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/40 pt-8 sm:grid-cols-4">
                {hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-headline-md text-headline-md font-bold text-primary-container">{stat.value}</p>
                    <p className="text-sm text-on-surface-variant">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
        {/* Right column — hero visual */}
        <Reveal delay={250}>
          <div className="relative z-10 w-full">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary-container/25 via-primary-fixed/40 to-transparent blur-2xl"></div>
            <div className="animate-spin-slower absolute -right-8 -top-10 -z-10 h-44 w-44 rounded-full border-2 border-dashed border-primary-container/30"></div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-outline-variant/30 shadow-2xl shadow-primary-container/15">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-fixed/60 to-primary-container/30">
                <span className="material-symbols-outlined text-6xl text-primary-container/60">image</span>
              </div>
              {hero.image && (
                <img
                  alt={hero.imageAlt}
                  className="relative h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-[560px]"
                  src={hero.image}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent"></div>

              {hero.floatingStat.value && (
                <div className="glass-card animate-float absolute left-5 top-5 flex items-center gap-3 rounded-2xl p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      trending_up
                    </span>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-background">{hero.floatingStat.value}</p>
                    <p className="text-xs text-on-surface-variant">{hero.floatingStat.label}</p>
                  </div>
                </div>
              )}

              {hero.floatingStat.label && (
                <div className="glass-card animate-float-slow absolute bottom-6 right-5 rounded-full px-4 py-2">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-on-background">
                    <span className="h-2 w-2 rounded-full bg-primary-container"></span>
                    {hero.floatingStat.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CoursesHero