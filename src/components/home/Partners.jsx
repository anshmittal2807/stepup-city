import { useRef } from 'react'

const partners = [
  { title: 'Google Ads Certified', subtitle: 'Recognized Google Partner' },
  { title: 'HubSpot Agency Partner', subtitle: 'Certified Solutions Provider' },
  { title: 'Meta Business Partner', subtitle: 'Verified Agency' },
  { title: 'SEMrush Agency Partner', subtitle: 'Certified SEO Experts' },
]

function Partners() {
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    carouselRef.current.scrollBy({ left: direction * 350, behavior: 'smooth' })
  }

  return (
    <section
      id="certifications"
      className="py-16 md:py-section-gap bg-surface-container-lowest overflow-hidden"
    >
      <div className="px-margin-mobile md:px-margin-desktop">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
          Our Partners &amp; Industry Standard Expertise
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          We leverage globally recognized platforms and tools from industry leaders to deliver exceptional results for
          our clients.
        </p>
      </div>

      <div className="relative group">
        {/* Carousel */}
        <div ref={carouselRef} className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-8 px-4">
          {partners.map((partner) => (
            <div
              key={partner.title}
              className="flex-none w-[85%] sm:w-80 bg-surface border border-outline-variant/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-surface-container-low rounded-xl mb-6 overflow-hidden border border-outline-variant/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary">workspace_premium</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-xl text-on-background mb-1">{partner.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">{partner.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface shadow-lg border border-outline-variant/30 flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-on-primary transition-colors hidden md:flex"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface shadow-lg border border-outline-variant/30 flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-on-primary transition-colors hidden md:flex"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-primary-container"></div>
          <div className="w-2 h-2 rounded-full bg-outline-variant/50"></div>
          <div className="w-2 h-2 rounded-full bg-outline-variant/50"></div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Partners
