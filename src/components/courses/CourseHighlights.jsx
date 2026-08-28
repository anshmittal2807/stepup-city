import { defaultCourses } from '../../data/data.js'

const defaultHighlights = defaultCourses[0].highlights

function CourseHighlights({ highlights = defaultHighlights }) {
  return (
    <section id="highlights" className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">Course Highlights</h2>
        <div className="w-20 h-1 bg-primary-container mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-xl border border-outline-variant bg-surface-bright hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary-container">{item.icon}</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{item.title}</h3>
            <p className="font-body-md text-body-md text-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CourseHighlights