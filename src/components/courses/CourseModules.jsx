import { defaultCourses } from '../../data/data.js'

const defaultModules = defaultCourses[0].modules

function CourseModules({ modules = defaultModules }) {
  return (
    <section id="courses" className="py-16 md:py-section-gap bg-surface-container-low px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12 bg-primary-container text-white p-8 rounded-2xl">
          <h2 className="font-headline-lg text-headline-lg mb-4">Course Modules</h2>
          <div className="w-20 h-1 bg-white/60 mx-auto rounded-full"></div>
          <p className="font-body-lg text-body-lg mt-4 max-w-2xl mx-auto">
            A comprehensive, industry-aligned curriculum designed to take you from beginner to expert.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module) => (
            <div
              key={module.title}
              className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant hover:border-primary/30 transition-all group"
            >
              <div className="w-10 h-10 bg-primary-container/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-primary-container group-hover:text-white">
                  {module.icon}
                </span>
              </div>
              <h3 className="font-bold text-on-surface mb-3">{module.title}</h3>
              <ul className="space-y-2 text-sm text-secondary">
                {(module.topics || []).map((topic) => (
                  <li key={topic} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary-container rounded-full"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseModules