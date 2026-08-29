import Reveal from '../shared/Reveal.jsx'
import { defaultCourses } from '../../data/data.js'

const defaultTestimonials = defaultCourses[0].successStories

function SuccessStories({ testimonials = defaultTestimonials }) {
  return (
    <section
      id="success-stories"
      className="relative overflow-hidden bg-surface-container-lowest py-16 md:py-section-gap"
    >
      <div className="bg-dots-dark absolute inset-0 opacity-40"></div>
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary-fixed/50 blur-3xl"></div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-fixed px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined text-sm">reviews</span>
              Testimonials
            </span>
            <h2 className="font-headline-lg text-headline-lg text-balance text-on-background">
              Student <span className="text-gradient-primary">Success Stories</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={`${testimonial.name}-${i}`} delay={i * 80}>
              <div className="relative flex h-full flex-col rounded-3xl border border-outline-variant/30 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <span className="font-headline-xl pointer-events-none absolute -top-3 right-6 select-none text-7xl leading-none text-primary-fixed">
                  &ldquo;
                </span>

                <div className="mb-5 flex text-primary">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <span key={star} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>

                <p className="font-body-md text-body-md flex-grow text-pretty text-sm italic leading-relaxed text-on-surface-variant">
                  {testimonial.quote}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-outline-variant/30 pt-4">
                <div className="relative h-12 w-12 shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed font-bold text-primary ring-2 ring-primary-fixed ring-offset-2">
                    {testimonial.initial || testimonial.name.charAt(0).toUpperCase()}
                  </div>
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="absolute inset-0 h-12 w-12 rounded-full object-cover ring-2 ring-primary-fixed ring-offset-2"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  )}
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-on-primary">
                      <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                        verified
                      </span>
                    </span>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-background">{testimonial.name}</p>
                    <p className="text-xs text-on-surface-variant">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories