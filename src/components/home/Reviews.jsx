import Reveal from '../shared/Reveal.jsx'

const reviews = [
  {
    name: 'Rahul Sharma',
    role: 'CEO, Tech Startup',
    image: '/images/reviews/rahul.jpg',
    text: '"The AI-integrated strategies from StepUpCity are a game changer. Our lead generation has doubled since we partnered with them. Highly recommended!"',
  },
  {
    name: 'Priya Gupta',
    role: 'Marketing Director',
    image: '/images/reviews/priya.jpg',
    text: '"Best SEO agency we\'ve worked with. Their technical approach and transparent reporting helped us rank #1 for our main keywords."',
  },
  {
    name: 'Amit Verma',
    role: 'E-commerce Founder',
    image: '/images/reviews/amit.jpg',
    text: '"The ROI is excellent. We saw a 300% increase in online sales within months of launching our new PPC campaigns."',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Brand Manager',
    image: '/images/reviews/sneha.jpg',
    text: '"Their social media management transformed our brand presence. The team is highly responsive and shares real-world insights."',
  },
]

function Stars({ size = 'text-base' }) {
  return (
    <span className={`flex text-primary ${size}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          star
        </span>
      ))}
    </span>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-surface-container-lowest py-16 md:py-section-gap">
      <div className="bg-dots-dark absolute inset-0 opacity-40"></div>
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary-fixed/50 blur-3xl"></div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <div className="max-w-xl">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-fixed px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="material-symbols-outlined text-sm">reviews</span>
                Testimonials
              </span>
              <h2 className="font-headline-lg text-headline-lg text-balance text-on-background">
                Client <span className="text-gradient-primary">Success Stories</span>
              </h2>
              <p className="mt-3 font-body-lg text-body-lg text-on-surface-variant">
                Real results, real clients — here is what they say about working with StepUpCity.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex items-center gap-5 rounded-2xl border border-outline-variant/30 bg-white p-5 shadow-sm">
              <div className="font-headline-xl text-headline-xl flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container font-bold text-on-primary shadow-glow">
                4.9
              </div>
              <div>
                <Stars size="text-lg" />
                <p className="text-sm text-on-surface-variant">Google Rating · 500+ reviews</p>
              </div>
            </div>
          </Reveal>
        </div>
<Reveal>
          <div className="relative">
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-container-lowest to-transparent md:w-20"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-container-lowest to-transparent md:w-20"></div>

            <div className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-6">
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="relative flex w-[85%] flex-none flex-col rounded-3xl border border-outline-variant/30 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:w-96"
                >
                  <span className="font-headline-xl pointer-events-none absolute -top-3 right-6 select-none text-7xl leading-none text-primary-fixed">
                    "
                  </span>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-primary-fixed ring-offset-2"
                      />
                      <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-on-primary">
                        <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                          verified
                        </span>
                      </span>
                    </div>
                    <div>
                      <p className="font-label-bold text-label-bold text-on-background">{review.name}</p>
                      <p className="text-xs text-on-surface-variant">{review.role}</p>
                    </div>
                    <span className="ml-auto">
                      <Stars size="text-base" />
                    </span>
                  </div>
                  <p className="font-body-md text-body-md flex-grow text-pretty text-sm italic leading-relaxed text-on-surface-variant">
                    {review.text}
                  </p>
                  <p className="mt-6 border-t border-outline-variant/30 pt-4 text-xs font-semibold text-primary">
                    Verified Google Review
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Reviews