import { useState } from 'react'
import { Link } from 'react-router-dom'
import { saveCourse, deleteCourse, templateCourse } from '../data/data.js'
import { useCourses } from '../data/useCourses.js'
import CourseForm from '../components/admin/CourseForm.jsx'

function AdminPage() {
  const courses = useCourses()
  const [editing, setEditing] = useState(null) // null = list, { course, isNew } = form

  const handleNew = () => setEditing({ course: templateCourse(), isNew: true })

  const handleEdit = (course) => setEditing({ course, isNew: false })

  const handleSave = (course) => {
    saveCourse(course)
    setEditing(null)
  }

  const handleDelete = (course) => {
    if (window.confirm(`Delete course "${course.title}"? This cannot be undone.`)) {
      deleteCourse(course.id)
    }
  }

  // --- Form mode ---------------------------------------------------------
  if (editing) {
    return (
      <div className="min-h-screen bg-surface pb-20">
        <header className="bg-primary text-on-primary">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="font-headline-xl text-headline-xl font-bold">
                {editing.isNew ? 'New Course' : 'Edit Course'}
              </h1>
              <p className="opacity-90 text-sm">Fill in every section below — all fields are saved locally.</p>
            </div>
            <button
              onClick={() => setEditing(null)}
              className="bg-white/15 hover:bg-white/25 transition-colors px-4 py-2 rounded-lg text-sm font-medium"
            >
              Back to list
            </button>
          </div>
        </header>
        <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-10">
          <CourseForm
            key={editing.course.id}
            course={editing.course}
            onSave={handleSave}
            onCancel={() => setEditing(null)}
          />
        </main>
      </div>
    )
  }

  // --- List --------------------------------------------------------------
  return (
    <div className="min-h-screen bg-surface pb-20">
<header className="bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-headline-xl text-headline-xl font-bold">Course Admin Panel</h1>
              <p className="opacity-90 mt-1 max-w-xl">
                Add, edit, or remove course pages. Changes are stored locally in your browser for showcase purposes.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/"
                className="text-on-primary border border-on-primary/40 px-4 py-2 rounded-lg text-sm font-medium hover:bg-on-primary/10 transition-colors"
              >
                View Site
              </Link>
              <button
                onClick={handleNew}
                className="bg-white text-primary font-label-bold text-label-bold px-5 py-2 rounded-lg hover:bg-surface-container-lowest transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">add</span>
                Add Course
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-10">
        {courses.length === 0 ? (
          <div className="text-center py-20 bg-white border border-outline-variant rounded-2xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">No courses yet</h2>
            <p className="text-secondary mb-6">Create your first course page to get started.</p>
            <button
              onClick={handleNew}
              className="bg-primary text-white font-label-bold text-label-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Add Course
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-outline-variant rounded-xl p-5 flex flex-wrap items-center gap-4 shadow-sm"
              >
                <div className="w-3 h-3 rounded-full bg-primary-container shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface truncate">{course.title}</h3>
                  <a href={`/courses/${course.slug}`} className="text-xs text-primary hover:underline">
                    /courses/{course.slug}
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    to={`/courses/${course.slug}`}
                    className="text-sm text-on-surface-variant border border-outline-variant px-3 py-1.5 rounded-lg hover:bg-surface-container-low transition-colors"
                  >
                    Preview
                  </Link>
                  <button
                    onClick={() => handleEdit(course)}
                    className="text-sm text-on-surface-variant border border-outline-variant px-3 py-1.5 rounded-lg hover:bg-surface-container-low transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(course)}
                    className="text-sm text-error border border-error/30 px-3 py-1.5 rounded-lg hover:bg-error/10 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default AdminPage