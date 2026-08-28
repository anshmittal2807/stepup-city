import { defaultCourses } from '../../data/data.js'

const defaultCta = defaultCourses[0].finalCta

function FinalCta({ cta = defaultCta }) {
  return (
    <section id="enroll" className="py-14 md:py-16 bg-primary-container text-white text-center px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto flex flex-col items-center">
        <h2 className="font-headline-xl text-headline-xl mb-6">{cta.heading}</h2>
        <p className="font-body-lg text-body-lg mb-8 max-w-2xl opacity-90">{cta.description}</p>
        <a
          className="bg-white text-primary-container text-sm px-10 py-4 rounded-lg hover:bg-surface-container-lowest transition-colors shadow-lg font-bold"
          href={cta.ctaHref}
        >
          {cta.ctaLabel}
        </a>
      </div>
    </section>
  )
}

export default FinalCta