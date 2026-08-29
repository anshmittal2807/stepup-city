import Reveal from '../shared/Reveal.jsx'
import { defaultCourses } from '../../data/data.js'

const defaultFaqs = defaultCourses[0].faqs

function FaqSection({ faqs = defaultFaqs }) {
  return (
    <section id="faqs" className="relative overflow-hidden bg-surface py-16 md:py-section-gap">
      <div className="bg-grid-dark absolute inset-0 opacity-40"></div>
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-fixed/50 blur-3xl"></div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-fixed px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined text-sm">quiz</span>
              FAQs
            </span>
            <h2 className="font-headline-lg text-headline-lg text-balance text-on-background">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={`${faq.question}-${i}`}
                className="group rounded-2xl border border-outline-variant/30 bg-white shadow-sm transition-all duration-300 open:border-primary/30 open:shadow-glow"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-label-bold text-label-bold text-on-background transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                  <span className="text-base">{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-primary transition-transform duration-300 group-open:rotate-180">
                    <span className="material-symbols-outlined text-base">expand_more</span>
                  </span>
                </summary>
                <p className="px-5 pb-5 font-body-md text-body-md text-pretty text-sm leading-relaxed text-on-surface-variant">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FaqSection