import { Link } from 'react-router-dom'
import { useCourses } from '../../data/useCourses.js'

// Fallback shown only when there are no courses at all (e.g. all were deleted).
const fallbackCourses = [
  {
    icon: 'school',
    title: 'Digital Marketing Masterclass',
    description: 'A comprehensive overview of the digital landscape, from strategy to execution.',
  },
  {
    icon: 'query_stats',
    title: 'Advanced SEO Course',
    description: 'Deep dive into technical SEO, backlink strategies, and content optimization.',
  },
  {
    icon: 'ads_click',
    title: 'PPC & Google Ads Expert',
    description: 'Master paid search, display advertising, and conversion tracking.',
  },
  {
    icon: 'group',
    title: 'Social Media Strategy',
    description: 'Learn to build communities and drive engagement across social platforms.',
  },
]

const iconPool = ['school', 'query_stats', 'ads_click', 'group', 'map', 'campaign']

function TrainingPrograms() {
  // Read courses reactively so anything added/edited in the admin panel
  // shows up on the Home page immediately.
  const courses = useCourses()

  const items =
    courses.length > 0
      ? courses.map((course, i) => ({
          icon: iconPool[i % iconPool.length],
          title: course.title || 'Untitled Course',
          description:
            course.hero?.subtitle ||
            'Explore this course in detail — highlights, mentors, modules, FAQs and more.',
          slug: course.slug,
        }))
      : fallbackCourses.map((c) => ({ ...c, slug: null }))

  return (
    <section id="training-programs" className="py-16 md:py-section-gap bg-primary text-on-primary">
      <div className="px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-primary mb-4">
            Master Digital Marketing with Our Expert-Led Courses
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary">
            Industry-aligned programs designed to turn you into a digital marketing expert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((course) => (
            <div
              key={course.slug || course.title}
              className="bg-transparent p-6 rounded-2xl border border-on-primary/30 shadow-sm hover:border-on-primary/60 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-primary">{course.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-xl text-on-primary mb-3">{course.title}</h3>
              <p className="font-body-md text-body-md text-on-primary/90 text-sm mb-6 flex-grow">
                {course.description}
              </p>
              {course.slug ? (
                <Link
                  to={`/courses/${course.slug}`}
                  className="inline-flex items-center gap-2 font-label-bold text-label-bold text-on-primary hover:text-white transition-colors"
                >
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              ) : (
                <a
                  className="inline-flex items-center gap-2 font-label-bold text-label-bold text-on-primary hover:text-white transition-colors"
                  href="#"
                >
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrainingPrograms
