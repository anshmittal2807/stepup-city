import { Link } from 'react-router-dom'
import { useCourses } from '../../data/useCourses.js'
import Reveal from '../shared/Reveal.jsx'

// Fallback shown only when there are no courses at all (e.g. all were deleted).
const fallbackCourses = [
  {
    icon: 'school',
    title: 'Digital Marketing Masterclass',
    description: 'A comprehensive overview of the digital landscape, from strategy to execution.',
    cover: '/images/hero-course.jpg',
    duration: '3 Months',
  },
  {
    icon: 'query_stats',
    title: 'Advanced SEO Course',
    description: 'Deep dive into technical SEO, backlink strategies, and content optimization.',
    cover: '/images/hero-seo.jpg',
    duration: '2 Months',
  },
  {
    icon: 'ads_click',
    title: 'PPC & Google Ads Expert',
    description: 'Master paid search, display advertising, and conversion tracking.',
    cover: '/images/hero-social.jpg',
    duration: '6 Weeks',
  },
  {
    icon: 'group',
    title: 'Social Media Strategy',
    description: 'Learn to build communities and drive engagement across social platforms.',
    cover: '/images/gains-course1.jpg',
    duration: '2 Months',
  },
]

const iconPool = ['school', 'query_stats', 'ads_click', 'group', 'map', 'campaign']
const covers = [
  '/images/hero-course.jpg',
  '/images/hero-seo.jpg',
  '/images/hero-social.jpg',
  '/images/gains-course1.jpg',
]

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
          cover: covers[i % covers.length],
          duration: course.hero?.stats?.[0]?.value || '3 Months',
        }))
      : fallbackCourses.map((c) => ({ ...c, slug: null }))

  return (
    <section id="training-programs" className="relative overflow-hidden bg-primary py-16 text-on-primary md:py-section-gap">
      <div className="bg-dots-light absolute inset-0 opacity-30"></div>
      <div className="absolute left-1/2 top-0 h-80 w-[720px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="max-w-2xl">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-on-primary/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
                <span className="material-symbols-outlined text-sm">school</span>
                Training Programs
              </span>
              <h2 className="font-headline-lg text-headline-lg text-balance">
                Master Digital Marketing with <span className="text-gradient-white">Expert-Led Courses</span>
              </h2>
              <p className="mt-3 font-body-lg text-body-lg text-on-primary/85">
                Industry-aligned programs designed to turn you into a digital marketing expert.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Link
              to="/courses"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-label-bold text-label-bold text-primary shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"
            >
              Explore All Programs
              <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((course, i) => (
            <Reveal key={course.slug || course.title} delay={i * 80}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-on-primary/25 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-on-primary/60">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={course.cover}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
                      <span className="material-symbols-outlined text-xs">schedule</span>
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
                      <span className="material-symbols-outlined text-xs">language</span>
                      Offline / Online
                    </span>
                  </div>
                </div>
<div className="flex flex-1 flex-col p-6">
                  <div className="-mt-10 mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-on-primary shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <span className="material-symbols-outlined text-xl">{course.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-xl text-on-primary mb-2">{course.title}</h3>
                  <p className="mb-6 flex-grow text-sm text-on-primary/85">{course.description}</p>

                  {course.slug ? (
                    <Link
                      to={`/courses/${course.slug}`}
                      className="group/link inline-flex items-center gap-2 font-label-bold text-label-bold hover:text-white transition-colors"
                    >
                      Explore Now
                      <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/link:translate-x-1">
                        arrow_forward
                      </span>
                    </Link>
                  ) : (
                    <a
                      href="#"
                      className="group/link inline-flex items-center gap-2 font-label-bold text-label-bold hover:text-white transition-colors"
                    >
                      Explore Now
                      <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/link:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrainingPrograms