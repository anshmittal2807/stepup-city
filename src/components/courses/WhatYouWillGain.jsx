import { defaultCourses } from '../../data/data.js'

const defaultGains = defaultCourses[0].gains
const defaultGainsImage = defaultCourses[0].gainsImage

function WhatYouWillGain({ gains = defaultGains, image = defaultGainsImage }) {
  return (
    <section id="gains" className="py-16 md:py-section-gap bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">What You Will Gain</h2>
            <ul className="space-y-6">
              {gains.map((gain) => (
                <li key={gain.title} className="flex gap-4">
                  <span className="material-symbols-outlined text-primary-container">{gain.icon}</span>
                  <div>
                    <h4 className="font-bold text-on-surface">{gain.title}</h4>
                    <p className="font-body-md text-body-md text-secondary">{gain.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary-fixed/40 rounded-2xl p-8 border border-primary/10">
            {image && (
              <img alt="Success outcomes" className="rounded-xl shadow-lg object-cover h-64 md:h-80 w-full" src={image} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatYouWillGain