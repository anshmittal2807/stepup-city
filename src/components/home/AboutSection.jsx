import Reveal from '../shared/Reveal.jsx'

const highlights = [
  {
    icon: 'campaign',
    title: 'Digital Marketing Agency',
    tagline: 'We grow businesses',
    points: [
      'SEO & Google Ads that bring your ideal customers',
      'Meta, Instagram & full-funnel performance campaigns',
      'Websites & content that convert visitors into buyers',
      'Transparent reports tied to measurable ROI',
    ],
    cta: { label: 'Get a Free Audit', href: '#services' },
  },
  {
    icon: 'school',
    title: 'Training Institute',
    tagline: 'We build careers',
    points: [
      'Advanced Digital Marketing Course with AI — 50+ modules',
      'Live projects + 18 industry certifications',
      '100% job placement assistance at 500+ companies',
      'Flexible online & classroom batches in Haryana',
    ],
    cta: { label: 'Explore Courses', href: '/courses' },
  },
]

function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface py-16 md:py-section-gap">
      <div className="bg-grid-dark absolute inset-0 opacity-30"></div>
      <div className="absolute -right-32 top-24 h-80 w-80 rounded-full bg-primary-fixed/50 blur-3xl"></div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-fixed px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined text-sm">flag</span>
              Who We Are
            </span>
            <p className="font-label-bold text-label-bold mb-2 text-primary uppercase tracking-widest">
              Learn. Grow. Succeed.
            </p>
            <h2 className="font-headline-xl text-headline-xl text-balance text-on-background">
              A Leading Digital Marketing <span className="text-gradient-primary">Agency &amp; Institute</span>
            </h2>
            <p className="mt-5 font-body-lg text-body-lg text-on-surface-variant">
              StepUpCity is one team with two missions. For businesses, we are a full-service digital
              marketing agency that plans, runs and scales campaigns that deliver real growth. For
              career seekers, we are a top-rated training institute that turns beginners into
              job-ready digital marketers. Based in Yamunanagar, Haryana — serving clients and
              students across Delhi, Punjab, Chandigarh, Rajasthan &amp; Himachal.
            </p>
          </div>
        </Reveal>
<div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 md:mb-16">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container-lowest p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-glow-lg">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-container to-primary-fixed-dim"></div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-glow">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-lg text-headline-lg text-on-background">{item.title}</h3>
                    <p className="text-sm font-semibold text-primary">{item.tagline}</p>
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-on-surface-variant">
                      <span
                        className="material-symbols-outlined mt-0.5 text-lg text-primary-container"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="font-body-md text-body-md">{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={item.cta.href}
                  className="mt-auto inline-flex items-center gap-2 font-label-bold text-label-bold text-primary transition-all duration-300 group-hover:gap-3"
                >
                  {item.cta.label}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-outline-variant/30 bg-surface-container-lowest p-8 md:grid-cols-4">
            {[
              { value: '250+', label: 'Businesses Served', icon: 'business_center' },
              { value: '5.0', label: 'Google Rating · 73 Reviews', icon: 'star' },
              { value: '50+', label: 'Course Modules', icon: 'menu_book' },
              { value: '500+', label: 'Students Placed', icon: 'workspace_premium' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
                <span className="material-symbols-outlined text-primary text-3xl">{stat.icon}</span>
                <p className="font-headline-md text-headline-md font-bold text-on-background">{stat.value}</p>
                <p className="text-xs text-on-surface-variant">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default AboutSection