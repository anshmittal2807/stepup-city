import Reveal from '../shared/Reveal.jsx'

const partners = [
  { title: 'Google Ads Certified', subtitle: 'Recognized Google Partner', logo: '/images/certifications/google.svg', alt: 'Google Ads' },
  { title: 'HubSpot Agency Partner', subtitle: 'Certified Solutions Provider', logo: '/images/certifications/hubspot.svg', alt: 'HubSpot' },
  { title: 'Meta Business Partner', subtitle: 'Verified Agency', logo: '/images/certifications/meta.svg', alt: 'Meta' },
  { title: 'SEMrush Agency Partner', subtitle: 'Certified SEO Experts', logo: '/images/certifications/semrush.svg', alt: 'SEMrush' },
]

function Partners() {
  return (
    <section id="certifications" className="relative overflow-hidden bg-surface-container-lowest py-16 md:py-section-gap">
      <div className="bg-grid-dark absolute inset-0 opacity-30"></div>
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-primary-fixed/60 blur-3xl"></div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-fixed px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
              Trusted &amp; Certified
            </span>
            <h2 className="font-headline-lg text-headline-lg text-balance text-on-background">
              Our Partners &amp; <span className="text-gradient-primary">Industry Standard Expertise</span>
            </h2>
            <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">
              We leverage globally recognized platforms and tools from industry leaders to deliver exceptional
              results for our clients.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="marquee-front relative overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-container-lowest to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-container-lowest to-transparent"></div>

          <div className="animate-marquee flex w-max items-center gap-6">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex w-80 flex-none items-center gap-4 rounded-2xl border border-outline-variant/30 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
              >
                <div className="flex h-16 w-20 flex-none items-center justify-center rounded-xl bg-surface-container-lowest p-3">
                  <img src={partner.logo} alt={partner.alt} className="h-full w-full object-contain" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-label-bold text-on-background">{partner.title}</p>
                  <p className="truncate text-xs text-on-surface-variant">{partner.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Partners