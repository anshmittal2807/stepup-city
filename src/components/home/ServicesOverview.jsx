import Reveal from '../shared/Reveal.jsx'

const bentoCards = [
  {
    icon: 'monitoring',
    title: 'SEO & Organic Growth',
    description: 'Rank higher on Google and turn searches into customers for your business.',
    points: ['Keyword strategy', 'Technical audits', 'Authority building'],
  },
  {
    icon: 'ads_click',
    title: 'Google & Meta Ads',
    description: 'High-ROI paid campaigns engineered around data, testing and optimization.',
    points: ['Google Ads & PPC', 'Meta & Instagram Ads', 'Conversion tracking'],
  },
  {
    icon: 'language',
    title: 'Website & Content',
    description: 'High-converting websites and content that build trust and sell for you.',
    points: ['Website development', 'Content marketing', 'Landing pages'],
  },
]

const chartBars = [42, 58, 46, 72, 63, 88, 96]

function ServicesOverview() {
  return (
    <section id="services" className="relative overflow-hidden bg-primary py-16 text-on-primary md:py-section-gap">
      {/* Decorative background */}
      <div className="bg-dots-light absolute inset-0 opacity-40"></div>
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-on-primary/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              Our Services
            </span>
            <h2 className="font-headline-lg text-headline-lg text-balance">
              Marketing Services That <span className="text-gradient-white">Grow Revenue</span>
            </h2>
            <p className="mt-4 font-body-lg text-body-lg text-on-primary/85">
              From SEO to ads to websites — we plan, run and manage the full digital
              marketing mix for your business, with reporting tied to results.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 auto-rows-[minmax(200px,auto)]">
          {/* Main featured / flagship card */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-on-primary/20 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:border-on-primary/40">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125"></div>

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-on-primary shadow-sm">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      campaign
                    </span>
                  </div>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    Flagship
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg mb-2">Full-Funnel Marketing</h3>
                <p className="mb-6 max-w-md text-on-primary/85">
                  End-to-end strategies covering SEO, SMM, PPC and advanced AI integration — engineered to grow
                  pipeline at every stage.
                </p>
              </div>

              <div>
                <div className="flex h-28 items-end gap-2">
                  {chartBars.map((bar, i) => (
                    <div
                      key={i}
                      className="animate-bar w-full rounded-t-md bg-gradient-to-t from-primary/80 to-on-primary/90 transition-all duration-300 group-hover:bg-white"
                      style={{ height: `${bar}%`, animationDelay: `${i * 90}ms` }}
                    ></div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm text-on-primary/80">Campaign performance — last 90 days</span>
                  <a
                    href="#professional-courses"
                    className="group/link inline-flex items-center gap-2 font-label-bold text-label-bold hover:text-white transition-colors"
                  >
                    Explore Full Service
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/link:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
{/* Secondary bento cards */}
          {bentoCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-on-primary/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-on-primary/50 hover:bg-white/15">
                <span
                  className="mb-4 inline-block text-4xl text-on-primary transition-transform duration-300 group-hover:scale-110"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {card.icon}
                </span>
                <h3 className="font-headline-md text-headline-md text-xl text-on-primary mb-2">{card.title}</h3>
                <p className="mb-5 text-sm text-on-primary/85">{card.description}</p>
                <ul className="space-y-2">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-on-primary/90">
                      <span
                        className="material-symbols-outlined text-sm text-on-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      {point}
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

export default ServicesOverview