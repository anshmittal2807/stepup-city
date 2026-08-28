import { useParams, Navigate, Link } from 'react-router-dom'
import { useCourses } from '../data/useCourses.js'
import Navbar from '../components/shared/Navbar.jsx'
import CoursesHero from '../components/courses/CoursesHero.jsx'
import CourseHighlights from '../components/courses/CourseHighlights.jsx'
import WhyLearnFromUs from '../components/courses/WhyLearnFromUs.jsx'
import MeetYourMentors from '../components/courses/MeetYourMentors.jsx'
import WhatYouWillGain from '../components/courses/WhatYouWillGain.jsx'
import SuccessStories from '../components/courses/SuccessStories.jsx'
import CourseModules from '../components/courses/CourseModules.jsx'
import FaqSection from '../components/courses/FaqSection.jsx'
import FinalCta from '../components/courses/FinalCta.jsx'

function CoursesPage() {
  const { slug } = useParams()
  const courses = useCourses()
  const course = slug ? courses.find((c) => c.slug === slug) : courses[0]
  const a = 10 ;
  // /courses (no slug) redirects to the first available course.
  if (!slug && course) {
    return <Navigate to={`/courses/${course.slug}`} replace />
  }

  if (!course) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center gap-4">
        <h1 className="font-headline-xl text-headline-xl text-on-surface">Course not found</h1>
        <p className="font-body-lg text-body-lg text-secondary">The course you are looking for does not exist.</p>
        <Link
          to="/"
          className="bg-primary-container text-white font-label-bold text-label-bold px-6 py-3 rounded-lg hover:bg-primary transition-colors"
        >
          Back to Home
        </Link>
      </main>
    )
  }

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <CoursesHero hero={course.hero} />
        <CourseHighlights highlights={course.highlights} />
        <WhyLearnFromUs cards={course.whyUs} />
        <MeetYourMentors mentors={course.mentors} />
        <WhatYouWillGain gains={course.gains} image={course.gainsImage} />
        <SuccessStories testimonials={course.successStories} />
        <CourseModules modules={course.modules} />
        <FaqSection faqs={course.faqs} />
        <FinalCta cta={course.finalCta} />
      </main>
    </>
  )
}

export default CoursesPage