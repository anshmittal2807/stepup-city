import Reveal from '../shared/Reveal.jsx'
import { defaultCourses } from '../../data/data.js'

const defaultWhyUsCards = defaultCourses[0].whyUs

function WhyLearnFromUs({ cards = defaultWhyUsCards }) {
  return (
    <section id="why-us" className="relative overflow-hidden bg-primary py-16 text-on-primary md:py-section-gap">
      {/* Decorative backgrounds */}
      <div className="bg-dots-light absolute inset-0 opacity-40"></div>
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-on-primary/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              Why Learn From Us
            </span>
            <h2 className="font-headline-lg text-headline-lg text-balance">
              The StepUpCity <span className="text-gradient-white">Advantage</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-on-primary/20 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-on-primary/50 hover:bg-white/15">
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125"></div>

                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-on-primary transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {card.icon}
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md text-xl text-on-primary mb-2">{card.title}</h3>
                <p className="relative text-sm leading-relaxed text-on-primary/85">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyLearnFromUs