import Reveal from '../shared/Reveal.jsx'

const services = [
  {
    icon: 'hub',
    title: 'Full-Funnel Marketing',
    description: 'Comprehensive 360-degree campaigns covering all core digital channels and strategies.',
    tag: 'Strategy',
  },
  {
    icon: 'search',
    title: 'Search Engine Optimization',
    description: 'Dominate search engine rankings and drive high-quality organic traffic to your website.',
    tag: 'Organic',
  },
  {
    icon: 'ads_click',
    title: 'Performance Marketing (PPC)',
    description: 'High-ROI paid campaigns across Google and social platforms to generate quality leads.',
    tag: 'Paid',
  },
  {
    icon: 'share',
    title: 'Social Media Management & Growth',
    description: 'Build a powerful brand presence and engage audiences across all major social networks.',
    tag: 'Social',
  },
]

function ServicesGrid() {
  return (
    <section id="professional-courses" className="relative overflow-hidden bg-surface py-16 md:py-section-gap">
      <div className="bg-grid-dark absolute inset-0 opacity-40"></div>
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary-fixed/50 blur-3xl"></div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="max-w-2xl">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-fixed px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="material-symbols-outlined text-sm">dashboard</span>
                What We Do
              </span>
              <h2 className="font-headline-lg text-headline-lg text-balance text-on-background">
                Our <span className="text-gradient-primary">Strategic Services</span>
              </h2>
              <p className="mt-3 font-body-lg text-body-lg text-on-surface-variant">
                Data-driven marketing services designed to scale your business and maximize your ROI.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-outline-variant bg-surface-container-lowest px-6 py-3 font-label-bold text-label-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              All Services
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container-lowest p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-glow-lg">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary via-primary-container to-primary-fixed-dim transition-transform duration-500 group-hover:scale-x-100"></div>
                <span className="font-headline-md absolute right-6 top-5 text-5xl font-bold text-outline-variant/40 transition-colors duration-300 group-hover:text-primary-container/30">
                  0{i + 1}
                </span>
<div className="mb-6 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-glow transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                  </div>
                  <span className="rounded-full bg-surface-container-low px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary transition-colors duration-300 group-hover:bg-primary-fixed group-hover:text-primary">
                    {service.tag}
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md text-xl text-on-background mb-2">{service.title}</h3>
                <p className="font-body-md text-body-md flex-grow pb-6 text-sm text-on-surface-variant">{service.description}</p>

                <a
                  href="#services"
                  className="group/link inline-flex items-center gap-2 font-label-bold text-label-bold text-primary-container transition-colors hover:text-primary"
                >
                  Learn More
                  <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/link:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid