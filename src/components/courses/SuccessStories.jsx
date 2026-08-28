import { defaultCourses } from '../../data/data.js'

const defaultTestimonials = defaultCourses[0].successStories

function SuccessStories({ testimonials = defaultTestimonials }) {
  return (
    <section id="success-stories" className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">Student Success Stories</h2>
        <div className="w-20 h-1 bg-primary-container mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant">
            <div className="flex text-yellow-400 mb-4">
              {[0, 1, 2, 3, 4].map((star) => (
                <span key={star} className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
                  star
                </span>
              ))}
            </div>
            <p className="font-body-md text-body-md text-secondary italic mb-4">{testimonial.quote}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-surface-dim rounded-full flex items-center justify-center font-bold text-on-surface">
                {testimonial.initial || testimonial.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-bold text-on-surface text-sm">{testimonial.name}</p>
                <p className="text-xs text-secondary">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SuccessStories