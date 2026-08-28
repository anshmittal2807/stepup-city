import { defaultCourses } from '../../data/data.js'

const defaultHero = defaultCourses[0].hero

function CoursesHero({ hero = defaultHero }) {
  return (
    <section id="home" className="pt-24 pb-16 px-margin-mobile md:px-margin-desktop md:pt-40 md:pb-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-stack-lg">
          {hero.badge && (
            <div className="inline-flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-body-md text-body-md text-secondary">{hero.badge}</span>
            </div>
          )}
          <h1 className="font-headline-xl text-headline-xl text-on-surface">
            {hero.titlePrefix}{' '}
            <span className="text-primary-container">{hero.titleHighlight}</span> {hero.titleSuffix}
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-xl">{hero.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <a
              className="font-label-bold text-label-bold px-8 py-4 rounded-lg transition-colors flex items-center gap-2 bg-primary-container text-white hover:bg-primary border-none"
              href={hero.ctaHref}
            >
              {hero.ctaLabel}
            </a>
          </div>
          {hero.stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-outline-variant">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-sm text-secondary mb-1">{stat.label}</p>
                  <p className="font-body-md text-body-md font-bold text-on-surface">{stat.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-outline-variant bg-white">
            {hero.image && (
              <img className="w-full h-[400px] lg:h-[600px] object-cover" alt={hero.imageAlt} src={hero.image} />
            )}
            {hero.floatingStat.value && (
              <div className="absolute top-8 left-8 glass-card p-4 rounded-xl flex items-center gap-4 animate-bounce-slow">
                <div className="bg-primary-fixed text-on-primary-fixed p-2 rounded-lg">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">{hero.floatingStat.value}</p>
                  <p className="text-xs text-secondary">{hero.floatingStat.label}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesHero