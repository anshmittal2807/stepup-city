import { useState } from 'react'
import { slugify } from '../../data/data.js'
import IconPicker from './IconPicker.jsx'

const inputClass =
  'w-full px-3 py-2 border border-outline-variant rounded-lg bg-surface-bright text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm'

function FieldLabel({ label, hint }) {
  return (
    <span className="block">
      <span className="block text-xs font-label-bold text-secondary mb-1">{label}</span>
      {hint && <span className="block text-xs text-secondary mb-1">{hint}</span>}
    </span>
  )
}

function Input({ label, value, onChange, hint, textarea, placeholder, required }) {
  return (
    <label className="block">
      <FieldLabel label={label} hint={hint} />
      {textarea ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      ) : (
        <input
          placeholder={placeholder}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={inputClass}
        />
      )}
    </label>
  )
}

function AddButton({ onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1 text-sm font-label-bold text-primary hover:text-primary-container transition-colors"
    >
      <span className="material-symbols-outlined text-base">add</span>
      {label}
    </button>
  )
}

function RemoveButton({ onClick, label = 'Remove item' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1 text-xs text-error hover:text-on-error-container transition-colors font-medium"
    >
      <span className="material-symbols-outlined text-sm">close</span>
      {label}
    </button>
  )
}

function Repeater({ items, onChange, renderItem, addLabel }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="border border-outline-variant rounded-lg p-3 bg-surface-container-lowest space-y-3">
          {renderItem(item, index)}
          <RemoveButton onClick={() => onChange(items.filter((_, i) => i !== index))} />
        </div>
      ))}
      <AddButton onClick={() => onChange([...items, {}])} label={addLabel || 'Add item'} />
    </div>
  )
}

function ModuleTopics({ topics, onChange }) {
  return (
    <div>
      <span className="block text-xs font-label-bold text-secondary mb-1">Topics</span>
      <div className="space-y-2">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              value={topic}
              onChange={(e) => {
                const next = [...topics]
                next[index] = e.target.value
                onChange(next)
              }}
              className={inputClass}
              placeholder="Topic"
            />
            <button
              type="button"
              onClick={() => onChange(topics.filter((_, i) => i !== index))}
              className="text-error hover:text-on-error-container transition-colors"
              aria-label="Remove topic"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
        ))}
        <AddButton onClick={() => onChange([...topics, ''])} label="Add topic" />
      </div>
    </div>
  )
}

function CourseForm({ course, onSave, onCancel }) {
  const [form, setForm] = useState(course)

  const setAt = (path, value) => {
    setForm((prev) => {
      const next = JSON.parse(JSON.stringify(prev))
      const keys = path.split('.')
      let cur = next
      for (let i = 0; i < keys.length - 1; i += 1) cur = cur[keys[i]]
      cur[keys[keys.length - 1]] = value
      return next
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Always normalize the slug so custom URLs work reliably in the browser.
    // slugify() lowercases and replaces spaces/special chars with '-', so a
    // custom URL like "SEO Course!" becomes a valid "/courses/seo-course".
    onSave({ ...form, slug: slugify(form.slug || form.title) })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basics */}
      <section className="border border-outline-variant rounded-xl p-6 bg-white space-y-4">
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Basics</h2>
        <Input label="Course Title" value={form.title} onChange={(v) => setAt('title', v)} required />
        <Input
          label="Slug (URL)"
          value={form.slug}
          onChange={(v) => setAt('slug', v)}
          hint="Leave blank to auto-generate from the title."
        />
        <p className="text-xs text-secondary">Preview URL: /courses/{form.slug || slugify(form.title) || '...'}</p>
      </section>

      {/* Announcement Bar */}
      <section className="border border-outline-variant rounded-xl p-6 bg-white space-y-4">
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Announcement Bar</h2>
        <Input label="Message" value={form.topAppBar.message} onChange={(v) => setAt('topAppBar.message', v)} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Button Label" value={form.topAppBar.ctaLabel} onChange={(v) => setAt('topAppBar.ctaLabel', v)} />
          <Input label="Button Link" value={form.topAppBar.ctaHref} onChange={(v) => setAt('topAppBar.ctaHref', v)} />
        </div>
      </section>

      {/* Hero */}
      <section className="border border-outline-variant rounded-xl p-6 bg-white space-y-4">
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Hero Section</h2>
        <Input label="Badge" value={form.hero.badge} onChange={(v) => setAt('hero.badge', v)} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="Title Prefix" value={form.hero.titlePrefix} onChange={(v) => setAt('hero.titlePrefix', v)} />
          <Input label="Title Highlight" value={form.hero.titleHighlight} onChange={(v) => setAt('hero.titleHighlight', v)} />
          <Input label="Title Suffix" value={form.hero.titleSuffix} onChange={(v) => setAt('hero.titleSuffix', v)} />
        </div>
        <Input label="Subtitle" textarea value={form.hero.subtitle} onChange={(v) => setAt('hero.subtitle', v)} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="CTA Label" value={form.hero.ctaLabel} onChange={(v) => setAt('hero.ctaLabel', v)} />
          <Input label="CTA Link" value={form.hero.ctaHref} onChange={(v) => setAt('hero.ctaHref', v)} />
        </div>
        <Input label="Hero Image URL" value={form.hero.image} onChange={(v) => setAt('hero.image', v)} hint="Paste an image URL." />
        <Input label="Hero Image Alt Text" value={form.hero.imageAlt} onChange={(v) => setAt('hero.imageAlt', v)} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Floating Stat Value"
            value={form.hero.floatingStat.value}
            onChange={(v) => setAt('hero.floatingStat.value', v)}
          />
          <Input
            label="Floating Stat Label"
            value={form.hero.floatingStat.label}
            onChange={(v) => setAt('hero.floatingStat.label', v)}
          />
        </div>
        <Repeater
          items={form.hero.stats}
          addLabel="Add stat"
          onChange={(v) => setAt('hero.stats', v)}
          renderItem={(item, i) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Label" value={item.label} onChange={(v) => setAt(`hero.stats.${i}.label`, v)} />
              <Input label="Value" value={item.value} onChange={(v) => setAt(`hero.stats.${i}.value`, v)} />
            </div>
          )}
        />
      </section>

{/* Highlights */}
      <section className="border border-outline-variant rounded-xl p-6 bg-white space-y-4">
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Course Highlights</h2>
        <Repeater
          items={form.highlights}
          addLabel="Add highlight"
          onChange={(v) => setAt('highlights', v)}
          renderItem={(item, i) => (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <IconPicker label="Icon" value={item.icon} onChange={(v) => setAt(`highlights.${i}.icon`, v)} />
              <Input label="Title" value={item.title} onChange={(v) => setAt(`highlights.${i}.title`, v)} />
              <Input label="Description" value={item.description} onChange={(v) => setAt(`highlights.${i}.description`, v)} />
            </div>
          )}
        />
      </section>

      {/* Why Learn From Us */}
      <section className="rounded-xl border border-outline-variant p-6 bg-white space-y-4">
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Why Learn From Us</h2>
        <Repeater
          items={form.whyUs}
          addLabel="Add card"
          onChange={(items) => setAt('whyUs', items)}
          renderItem={(item, i) => (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <IconPicker label="Icon" value={item.icon} onChange={(v) => setAt(`whyUs.${i}.icon`, v)} />
              <Input label="Title" value={item.title} onChange={(v) => setAt(`whyUs.${i}.title`, v)} />
              <Input label="Description" value={item.description} onChange={(v) => setAt(`whyUs.${i}.description`, v)} />
            </div>
          )}
        />
      </section>

      {/* Mentors */}
      <section className="rounded-xl border border-outline-variant p-6 bg-white space-y-4">
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Mentors</h2>
        <Repeater
          items={form.mentors}
          addLabel="Add mentor"
          onChange={(items) => setAt('mentors', items)}
          renderItem={(item, i) => (
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input label="Name" value={item.name} onChange={(v) => setAt(`mentors.${i}.name`, v)} />
                <Input label="Role" value={item.role} onChange={(v) => setAt(`mentors.${i}.role`, v)} />
                <Input label="Experience" value={item.experience} onChange={(v) => setAt(`mentors.${i}.experience`, v)} />
              </div>
              <Input label="Image URL" value={item.image} onChange={(v) => setAt(`mentors.${i}.image`, v)} />
            </div>
          )}
        />
      </section>

      {/* What You Will Gain */}
      <section className="rounded-xl border border-outline-variant p-6 bg-white space-y-4">
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">What You Will Gain</h2>
        <Input label="Side Image URL" value={form.gainsImage} onChange={(v) => setAt('gainsImage', v)} />
        <Repeater
          items={form.gains}
          addLabel="Add gain"
          onChange={(items) => setAt('gains', items)}
          renderItem={(item, i) => (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <IconPicker label="Icon" value={item.icon} onChange={(v) => setAt(`gains.${i}.icon`, v)} />
              <Input label="Title" value={item.title} onChange={(v) => setAt(`gains.${i}.title`, v)} />
              <Input label="Description" value={item.description} onChange={(v) => setAt(`gains.${i}.description`, v)} />
            </div>
          )}
        />
      </section>

      {/* Success Stories */}
      <section className="rounded-xl border border-outline-variant p-6 bg-white space-y-4">
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Success Stories</h2>
        <Repeater
          items={form.successStories}
          addLabel="Add story"
          onChange={(items) => setAt('successStories', items)}
          renderItem={(item, i) => (
            <div className="space-y-3">
              <Input label="Quote" textarea value={item.quote} onChange={(v) => setAt(`successStories.${i}.quote`, v)} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Name" value={item.name} onChange={(v) => setAt(`successStories.${i}.name`, v)} />
                <Input label="Role" value={item.role} onChange={(v) => setAt(`successStories.${i}.role`, v)} />
              </div>
            </div>
          )}
        />
      </section>

{/* Course Modules */}
      <section className="rounded-xl border border-outline-variant p-6 bg-white space-y-4">
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Course Modules</h2>
        <Repeater
          items={form.modules}
          addLabel="Add module"
          onChange={(items) => setAt('modules', items)}
          renderItem={(item, i) => (
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <IconPicker label="Icon" value={item.icon} onChange={(v) => setAt(`modules.${i}.icon`, v)} />
                <Input label="Title" value={item.title} onChange={(v) => setAt(`modules.${i}.title`, v)} />
              </div>
              <ModuleTopics topics={item.topics || []} onChange={(v) => setAt(`modules.${i}.topics`, v)} />
            </div>
          )}
        />
      </section>

      {/* FAQ */}
      <section className="rounded-xl border border-outline-variant p-6 bg-white space-y-4">
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">FAQ</h2>
        <Repeater
          items={form.faqs}
          addLabel="Add FAQ"
          onChange={(items) => setAt('faqs', items)}
          renderItem={(item, i) => (
            <div className="space-y-3">
              <Input label="Question" value={item.question} onChange={(v) => setAt(`faqs.${i}.question`, v)} />
              <Input label="Answer" textarea value={item.answer} onChange={(v) => setAt(`faqs.${i}.answer`, v)} />
            </div>
          )}
        />
      </section>

      {/* Final CTA */}
      <section className="rounded-xl border border-outline-variant p-6 bg-white space-y-4">
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Final CTA</h2>
        <Input label="Heading" value={form.finalCta.heading} onChange={(v) => setAt('finalCta.heading', v)} />
        <Input
          label="Description"
          textarea
          value={form.finalCta.description}
          onChange={(v) => setAt('finalCta.description', v)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Button Label" value={form.finalCta.ctaLabel} onChange={(v) => setAt('finalCta.ctaLabel', v)} />
          <Input label="Button Link" value={form.finalCta.ctaHref} onChange={(v) => setAt('finalCta.ctaHref', v)} />
        </div>
      </section>

      {/* Actions */}
      <div className="flex items-center gap-4 pt-4">
        <button
          type="submit"
          className="bg-primary text-on-primary font-label-bold text-label-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Save Course
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-surface-container-high text-on-surface font-label-bold text-label-bold px-6 py-3 rounded-lg hover:bg-surface-dim transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default CourseForm