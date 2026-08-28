import { defaultCourses } from '../../data/data.js'

const defaultFaqs = defaultCourses[0].faqs

function FaqSection({ faqs = defaultFaqs }) {
  return (
    <section id="faqs" className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">Frequently Asked Questions</h2>
        <div className="w-20 h-1 bg-primary-container mx-auto rounded-full"></div>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group border border-outline-variant rounded-lg bg-surface-container-lowest">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-on-surface hover:text-primary-container transition-colors">
              <span className="text-lg">{faq.question}</span>
              <span className="transition group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </summary>
            <div className="text-secondary mt-3 p-4 pt-0 font-body-md text-body-md">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FaqSection