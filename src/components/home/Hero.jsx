import Reveal from '../shared/Reveal.jsx'

const stats = [
  { value: '250+', label: 'Businesses Served', icon: 'business_center', highlight: false },
  { value: '5.0', label: 'Google Rating · 73 Reviews', icon: 'star', highlight: true },
  { value: '500+', label: 'Students Placed', icon: 'rocket_launch', highlight: false },
]

const trustLogos = [
  { name: 'Google', logo: '/images/certifications/google.svg' },
  { name: 'HubSpot', logo: '/images/certifications/hubspot.svg' },
  { name: 'Meta', logo: '/images/certifications/meta.svg' },
  { name: 'SEMrush', logo: '/images/certifications/semrush.svg' },
]

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-16 md:pb-24 md:pt-20 lg:min-h-[900px]">
      {/* Decorative backgrounds */}
      <div className="bg-dots-dark absolute inset-0 -z-20 opacity-50"></div>
      <div className="absolute -right-24 -top-24 -z-10 h-[520px] w-[520px] rounded-full bg-primary-container/15 blur-3xl"></div>
      <div className="absolute -left-40 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-primary-fixed/70 blur-3xl"></div>
      <div className="absolute right-0 top-0 -z-10 h-full w-2/3 bg-gradient-to-bl from-primary-fixed/30 to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-surface to-transparent"></div>

      <div className="relative mx-auto flex max-w-container-max flex-col items-center gap-14 px-margin-mobile md:px-margin-desktop lg:flex-row">
        {/* Left column */}
        <div className="z-10 flex w-full flex-1 flex-col gap-stack-lg">
          <Reveal>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container-lowest/70 px-4 py-2 shadow-sm backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-container"></span>
              </span>
              <span className="font-label-bold text-label-bold uppercase tracking-wider text-on-surface-variant">
                Leading Digital Marketing Agency &amp; Institute
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-headline-xl text-headline-xl text-balance text-on-background">
              We Grow Your Business with{' '}
              <span className="text-gradient-primary relative inline-block">
                Digital Marketing
                <svg className="pointer-events-none absolute -bottom-1.5 left-0 h-2.5 w-full md:-bottom-2 md:h-3" viewBox="0 0 120 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 9C30 3 70 3 118 9" stroke="url(#hero-underline)" strokeWidth="4" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="hero-underline" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#d32f2f" />
                      <stop offset="1" stopColor="#ff9a9e" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-xl font-body-lg text-body-lg text-pretty text-on-surface-variant">
              StepUpCity is a full-service digital marketing agency and a top-rated training institute from
              Haryana. We help businesses across India win more customers through SEO, Performance Marketing,
              Meta &amp; Google Ads — and train the next generation of marketers with 50+ live-project modules.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-primary to-primary-container px-8 py-4 font-label-bold text-label-bold text-on-primary shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg active:scale-95"
              >
                <span className="material-symbols-outlined text-lg">auto_awesome</span>
                Get a Free Marketing Audit
                <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
              <a
                href="/courses"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-on-background/15 bg-surface-container-lowest/70 px-8 py-4 font-label-bold text-label-bold text-on-background backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <span className="material-symbols-outlined text-lg">school</span>
                Explore Our Courses
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                Certified partner of
              </span>
              <span className="mr-2 hidden h-4 w-px bg-outline-variant/50 sm:block"></span>
              <div className="flex flex-wrap items-center gap-5">
                {trustLogos.map((logo) => (
                  <img
                    key={logo.name}
                    src={logo.logo}
                    alt={logo.name}
                    title={logo.name}
                    className="h-6 w-auto opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </Reveal>
<Reveal delay={500}>
            <div className="mt-2 flex flex-wrap items-center gap-x-10 gap-y-6 rounded-2xl border border-outline-variant/30 bg-surface-container-lowest/70 p-6 shadow-sm backdrop-blur md:p-7">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      stat.highlight
                        ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-glow'
                        : 'bg-primary-fixed text-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {stat.icon}
                    </span>
                  </span>
                  <div>
                    <p
                      className={`font-headline-md text-headline-md font-bold ${
                        stat.highlight ? 'text-primary' : 'text-on-background'
                      }`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm text-on-surface-variant">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right column — hero visual */}
        <div className="relative z-10 w-full max-w-xl flex-1">
          <Reveal delay={250}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary-container/25 via-primary-fixed/40 to-transparent blur-2xl"></div>
              <div className="animate-spin-slower absolute -right-8 -top-10 -z-10 h-44 w-44 rounded-full border-2 border-dashed border-primary-container/30"></div>

              <div className="group relative overflow-hidden rounded-[2rem] border border-outline-variant/30 shadow-2xl shadow-primary-container/15">
                <img
                  alt="Students in premium digital marketing class"
                  className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[540px]"
                  src="/images/hero-home.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent"></div>

                <div className="glass-card animate-float absolute left-5 top-5 flex items-center gap-3 rounded-2xl p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-fixed text-primary-container">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      workspace_premium
                    </span>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-background">Top Rated</p>
                    <p className="text-xs text-on-surface-variant">4.9 on Google</p>
                  </div>
                </div>

                <div className="glass-card animate-float-slow absolute bottom-6 right-5 flex items-center gap-3 rounded-2xl p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      trending_up
                    </span>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-background">+200% Avg ROI</p>
                    <p className="text-xs text-on-surface-variant">Across 150+ campaigns</p>
                  </div>
                </div>

                <div className="glass-card animate-pulse-soft absolute bottom-6 left-5 rounded-full px-4 py-2">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-on-background">
                    <span className="h-2 w-2 rounded-full bg-primary-container"></span>
                    Trusted by 500+ clients
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Hero