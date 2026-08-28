const bentoCards = [
  {
    icon: 'search_insights',
    title: 'Search Engine Optimization',
    description: 'Technical, On-page, and Off-page optimization.',
  },
  {
    icon: 'ads_click',
    title: 'Performance Marketing (PPC)',
    description: 'Performance marketing and high-ROI campaigns.',
  },
  {
    icon: 'thumb_up',
    title: 'Social Media Management',
    description: 'Organic growth and viral content strategies.',
  },
]

function ServicesOverview() {
  return (
    <section id="services" className="py-16 md:py-section-gap bg-primary text-on-primary">
      <div className="px-margin-mobile md:px-margin-desktop">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <h2 className="font-headline-lg text-headline-lg mb-4 text-on-primary">
          Dominate Your Market with Comprehensive Solutions
        </h2>
        <p className="font-body-lg text-body-lg text-on-primary">
          Our full-spectrum marketing services are designed to scale your business and drive measurable results.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Main Featured Card */}
        <div className="md:col-span-2 md:row-span-2 rounded-2xl bg-transparent p-8 border border-on-primary/30 flex flex-col justify-between group hover:border-on-primary/60 transition-colors duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500 bg-white/5"></div>
          <div>
            <div className="w-12 h-12 bg-white/20 rounded flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                campaign
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-primary mb-2">Full-Funnel Marketing</h3>
            <p className="font-body-md text-body-md text-on-primary/90 mb-6 max-w-md">
              End-to-end strategies covering SEO, SMM, PPC, and advanced AI integration to maximize growth.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 font-label-bold text-label-bold text-on-primary group-hover:text-white transition-colors"
            href="#digital-marketing"
          >
            Explore Full Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>

        {/* Secondary Cards */}
        {bentoCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl bg-transparent p-6 border border-on-primary/30 flex flex-col justify-between hover:border-on-primary/60 transition-colors"
          >
            <div>
              <span className="material-symbols-outlined text-on-primary/80 mb-4 text-3xl">{card.icon}</span>
              <h3 className="font-headline-md text-headline-md text-on-primary text-xl mb-2">{card.title}</h3>
              <p className="font-body-md text-body-md text-on-primary/90 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default ServicesOverview
