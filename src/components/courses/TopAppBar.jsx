import { defaultCourses } from '../../data/data.js'

const defaultAnnouncement = defaultCourses[0].topAppBar

function TopAppBar({ announcement = defaultAnnouncement }) {
  return (
    <div className="bg-primary text-on-primary w-full h-10 flex items-center justify-center gap-4 px-4 relative z-50">
      <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
        campaign
      </span>
      <span className="font-label-bold text-label-bold font-bold">{announcement.message}</span>
      <a
        className="font-label-bold text-label-bold font-bold text-on-primary underline hover:opacity-100 opacity-90 transition-opacity ml-4"
        href={announcement.ctaHref}
      >
        {announcement.ctaLabel}
      </a>
    </div>
  )
}

export default TopAppBar