import Reveal from '../shared/Reveal.jsx'

const seoPoints = [
  { icon: 'search', title: 'Keyword Research Strategy', description: 'Identify high-value search terms using advanced tools.' },
  { icon: 'manage_search', title: 'Technical & On-Page SEO', description: 'Optimize site architecture, speed, and content relevancy.' },
  { icon: 'link', title: 'Authority & Link Building', description: 'Earn high-quality backlinks that compound your rankings.' },
  { icon: 'insights', title: 'Analytics & Reporting', description: 'Transparent dashboards with clear, actionable insights.' },
]

function SeoSection() {
  return (
    <section id="seo-course" className="relative overflow-hidden bg-primary py-16 text-on-primary md:py-section-gap">
      <div className="bg-dots-light absolute inset-0 opacity-30"></div>
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-20">
          {/* Left: copy */}
          <div className="w-full flex-1">
            <Reveal>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-on-primary/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
                <span className="material-symbols-outlined text-sm">insights</span>
                SEO Excellence
              </span>
              <h2 className="font-headline-xl text-headline-xl text-balance">
                Dominate <span className="text-gradient-white">Search Rankings</span>
              </h2>
              <p className="mt-4 mb-8 max-w-xl font-body-lg text-body-lg text-on-primary/85">
                Our specialized SEO services drive organic, high-intent traffic through proven methodologies and
                technical excellence.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {seoPoints.map((point, i) => (
                <Reveal key={point.title} delay={i * 80}>
                  <div className="flex items-start gap-3 rounded-2xl border border-on-primary/15 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-on-primary/40 hover:bg-white/15">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/15 text-on-primary">
                      <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {point.icon}
                      </span>
                    </span>
                    <div>
                      <h4 className="font-label-bold text-label-bold text-on-primary">{point.title}</h4>
                      <p className="mt-1 text-sm text-on-primary/80">{point.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={350}>
              <a
                href="#enroll"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-label-bold text-label-bold text-primary shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"
              >
                Get Your Free SEO Audit
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </Reveal>
          </div>

          {/* Right: visual */}
          <div className="w-full flex-1">
            <Reveal delay={150}>
              <div className="relative mx-auto max-w-lg">
                <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-on-primary/20 to-transparent blur-2xl"></div>
                <div className="animate-spin-slower absolute -bottom-8 -left-8 -z-10 h-36 w-36 rounded-full border-2 border-dashed border-on-primary/30"></div>

                <div className="overflow-hidden rounded-[2rem] border border-on-primary/20 shadow-2xl">
                  <img alt="SEO Analytics Dashboard" className="h-72 w-full object-cover md:h-96" src="/images/seo-dashboard.jpg" />
                </div>

                <div className="glass-card animate-float absolute -left-4 top-8 flex items-center gap-3 rounded-2xl p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-on-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-background">+180% Organic Traffic</p>
                    <p className="text-xs text-on-surface-variant">Average client growth</p>
                  </div>
                </div>

                <div className="glass-card animate-float-slow absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-background">#1 for 25+ keywords</p>
                    <p className="text-xs text-on-surface-variant">Across client portfolios</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeoSection