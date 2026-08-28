const services = [
  {
    icon: 'hub',
    title: 'Full-Funnel Marketing',
    description: 'Comprehensive 360-degree campaigns covering all core digital channels and strategies.',
  },
  {
    icon: 'search',
    title: 'Search Engine Optimization',
    description: 'Dominate search engine rankings and drive high-quality organic traffic to your website.',
  },
  {
    icon: 'ads_click',
    title: 'Performance Marketing (PPC)',
    description: 'High-ROI paid campaigns across Google and social platforms to generate quality leads.',
  },
  {
    icon: 'share',
    title: 'Social Media Management & Growth',
    description: 'Build a powerful brand presence and engage audiences across all major social networks.',
  },
]

function ServicesGrid() {
  return (
    <section id="professional-courses" className="py-16 md:py-section-gap bg-surface">
      <div className="px-margin-mobile md:px-margin-desktop">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Our Strategic Services</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Data-driven marketing services designed to scale your business and maximize your ROI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border-t-primary"
          >
            <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary">{service.icon}</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-xl text-on-background mb-3">{service.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-6 flex-grow">
              {service.description}
            </p>
            <a
              className="inline-flex items-center gap-2 font-label-bold text-label-bold text-primary-container hover:text-primary transition-colors"
              href="#"
            >
              Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default ServicesGrid
