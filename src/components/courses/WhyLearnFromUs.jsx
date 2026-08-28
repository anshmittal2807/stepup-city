import { defaultCourses } from '../../data/data.js'

const defaultWhyUsCards = defaultCourses[0].whyUs

function WhyLearnFromUs({ cards = defaultWhyUsCards }) {
  return (
    <section id="why-us" className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-primary-container text-white">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-headline-lg text-headline-lg mb-4 text-white">Why Learn From Us</h2>
        <div className="w-20 h-1 bg-white/60 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {cards.map((card) => (
          <div
            key={card.title}
            className="p-8 rounded-2xl border border-white/20 hover:shadow-md transition-all text-white"
          >
            <span className="material-symbols-outlined text-white text-4xl mb-4">{card.icon}</span>
            <h3 className="font-headline-md text-headline-md text-white mb-2">{card.title}</h3>
            <p className="font-body-md text-body-md text-white/90">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyLearnFromUs