// React hook that reads the course store reactively (frontend-only).
// Any time the admin saves/deletes/resets courses, every component using this
// hook re-renders automatically so changes reflect on the website immediately.
import { useSyncExternalStore } from 'react'
import { getCoursesSnapshot, subscribe } from './data.js'

export function useCourses() {
  return useSyncExternalStore(subscribe, getCoursesSnapshot)
}