const reviews = [
  {
    name: 'Rahul Sharma',
    role: 'CEO, Tech Startup',
    text: '"The AI-integrated strategies from StepUpCity are a game changer. Our lead generation has doubled since we partnered with them. Highly recommended!"',
  },
  {
    name: 'Priya Gupta',
    role: 'Marketing Director',
    text: '"Best SEO agency we\'ve worked with. Their technical approach and transparent reporting helped us rank #1 for our main keywords."',
  },
  {
    name: 'Amit Verma',
    role: 'E-commerce Founder',
    text: '"The ROI is excellent. We saw a 300% increase in online sales within months of launching our new PPC campaigns."',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Brand Manager',
    text: '"Their social media management transformed our brand presence. The team is highly responsive and shares real-world insights."',
  },
]

function Stars({ size }) {
  return (
    <div className={`flex text-primary mb-3 ${size === 'sm' ? '' : ''}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`material-symbols-outlined ${size === 'sm' ? 'text-sm' : ''}`} style={{ fontVariationSettings: "'FILL' 1" }}>
          star
        </span>
      ))}
    </div>
  )
}

function FilledStar() {
  return (
    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
      star
    </span>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-section-gap bg-surface-container-lowest overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Client Success Stories</h2>
        <div className="flex items-center justify-center gap-2">
          <div className="flex text-primary">
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <FilledStar />
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Google Rating 4.9/5 based on 500+ reviews</p>
        </div>
      </div>

      <div className="relative group">
        <div className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-8 px-4">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex-none w-[85%] sm:w-80 bg-surface border border-outline-variant/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-on-surface-variant">person</span>
                  </div>
                  <div>
                    <p className="font-label-bold text-label-bold text-on-background">{review.name}</p>
                    <p className="text-xs text-on-surface-variant">{review.role}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary-container">google</span>
              </div>
              <Stars size="sm" />
              <p className="font-body-md text-body-md text-on-surface-variant text-sm italic">{review.text}</p>
            </div>
          ))}
        </div>

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

export default Reviews
