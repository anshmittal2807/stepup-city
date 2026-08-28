import { useEffect, useMemo, useRef, useState } from 'react'

// Curated set of "Material Symbols Outlined" icon names relevant to course
// content, grouped by theme so admins can browse instead of typing. The icons
// themselves are rendered by the Material Symbols font already loaded in
// index.html. Unlisted names are never lost — a previously saved custom icon
// still shows in the dropdown under "Current icon".
const ICON_CATEGORIES = [
  {
    name: 'Marketing & SEO',
    icons: [
      'ads_click',
      'analytics',
      'auto_graph',
      'campaign',
      'hub',
      'insights',
      'monitoring',
      'query_stats',
      'search',
      'search_insights',
      'storefront',
      'strategy',
      'travel_explore',
      'trending_up',
    ],
  },
  {
    name: 'Learning & Training',
    icons: [
      'auto_stories',
      'assignment',
      'calendar_month',
      'content_paste',
      'edit_note',
      'event_available',
      'school',
      'schedule',
      'update',
      'verified',
      'workspace_premium',
    ],
  },
  {
    name: 'Career & Growth',
    icons: [
      'badge',
      'business_center',
      'diversity_3',
      'emoji_events',
      'group',
      'groups',
      'handshake',
      'person',
      'rocket_launch',
      'work',
      'work_history',
    ],
  },
  {
    name: 'Social & Content',
    icons: [
      'forum',
      'language',
      'link',
      'palette',
      'photo_camera',
      'public',
      'record_voice_over',
      'share',
      'smart_display',
      'thumb_up',
      'videocam',
    ],
  },
  {
    name: 'Build & Practical',
    icons: [
      'auto_awesome',
      'bolt',
      'build',
      'check_circle',
      'code',
      'flag',
      'lightbulb',
      'local_fire_department',
      'star',
      'task_alt',
      'tips_and_updates',
      'verified_user',
    ],
  },
]

const ALL_ICONS = ICON_CATEGORIES.flatMap((category) => category.icons)

const labelClass = 'block text-xs font-label-bold text-secondary mb-1'

function IconPicker({ label, value = '', onChange, hint }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const rootRef = useRef(null)
  const searchRef = useRef(null)

  const current = String(value || '').trim()
  const normalizedQuery = query.trim().toLowerCase()
  const isCustom = current !== '' && !ALL_ICONS.includes(current)

  // Close on outside click / Escape while the panel is open.
  useEffect(() => {
    if (!open) return undefined
    const onPointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  // Focus the search box whenever the panel opens.
  useEffect(() => {
    if (!open) return undefined
    const frame = requestAnimationFrame(() => searchRef.current?.focus())
    return () => cancelAnimationFrame(frame)
  }, [open])

  const filteredCategories = useMemo(
    () =>
      ICON_CATEGORIES.map((category) => ({
        ...category,
        icons: category.icons.filter(
          (icon) => !normalizedQuery || icon.includes(normalizedQuery),
        ),
      })).filter((category) => category.icons.length > 0),
    [normalizedQuery],
  )

  const selectIcon = (icon) => {
    onChange(icon)
    setQuery('')
    setOpen(false)
  }

  return (
    <div>
      <span className={labelClass}>{label}</span>
      {hint && <span className="block text-xs text-secondary mb-1">{hint}</span>}
      <div ref={rootRef} className="relative">
        <div className="w-full flex items-center gap-2 px-3 py-2 border border-outline-variant rounded-lg bg-surface-bright text-on-surface focus-within:ring-2 focus-within:ring-primary/40 text-sm">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex-1 min-w-0 flex items-center gap-2 text-left"
            title="Choose an icon"
          >
            <span
              className={`material-symbols-outlined text-lg shrink-0 ${
                current ? 'text-primary-container' : 'text-secondary opacity-60'
              }`}
            >
              {current || 'add'}
            </span>
            <span
              className={`flex-1 min-w-0 truncate ${current ? '' : 'text-secondary opacity-70'}`}
            >
              {current || 'Select an icon…'}
            </span>
            <span className="material-symbols-outlined text-base text-secondary shrink-0">
              expand_more
            </span>
          </button>
          {current && (
            <button
              type="button"
              onClick={() => onChange('')}
              className="shrink-0 text-secondary hover:text-error transition-colors"
              aria-label="Clear icon"
              title="Clear icon"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          )}
        </div>

        {open && (
          <div className="absolute left-0 right-0 z-30 mt-2 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg overflow-hidden">
            <div className="p-2 border-b border-outline-variant">
              <input
                ref={searchRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search icons…"
                className="w-full px-3 py-2 border border-outline-variant rounded-lg bg-surface-bright text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

<div className="max-h-72 overflow-y-auto p-3">
              {isCustom && (
                <div className="mb-3">
                  <div className="text-xs font-label-bold text-secondary uppercase tracking-wide mb-1">
                    Current icon
                  </div>
                  <button
                    type="button"
                    onClick={() => selectIcon(current)}
                    title={current}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm w-full border bg-primary/10 text-primary border-primary/30 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">{current}</span>
                    <span className="truncate">{current}</span>
                  </button>
                </div>
              )}

              {filteredCategories.length === 0 ? (
                <p className="text-sm text-secondary py-4 text-center">
                  No icons match “{query}”.
                </p>
              ) : (
                filteredCategories.map((category) => (
                  <div key={category.name} className="mb-3 last:mb-0">
                    <div className="text-xs font-label-bold text-secondary uppercase tracking-wide mb-1">
                      {category.name}
                    </div>
                    <div className="grid grid-cols-4 gap-1">
                      {category.icons.map((icon) => {
                        const selected = icon === current
                        return (
                          <button
                            key={icon}
                            type="button"
                            onClick={() => selectIcon(icon)}
                            title={icon}
                            className={`flex flex-col items-center gap-1 rounded-lg px-1 py-2 transition-colors ${
                              selected
                                ? 'bg-primary/10 text-primary border border-primary/30'
                                : 'text-on-surface hover:bg-surface-container-low border border-transparent'
                            }`}
                          >
                            <span className="material-symbols-outlined text-xl">{icon}</span>
                            <span className="w-full truncate text-center text-[10px] leading-tight">
                              {icon}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default IconPicker