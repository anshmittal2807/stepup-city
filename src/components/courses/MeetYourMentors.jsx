import { defaultCourses } from '../../data/data.js'

const defaultMentors = defaultCourses[0].mentors

function MeetYourMentors({ mentors = defaultMentors }) {
  return (
    <section id="mentors" className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">Meet Your Mentors</h2>
        <div className="w-20 h-1 bg-primary-container mx-auto rounded-full"></div>
        <p className="font-body-lg text-body-lg mt-4 max-w-2xl mx-auto text-secondary">
          Learn from industry experts who have run successful campaigns for top brands.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mentors.map((mentor) => (
          <div key={mentor.name} className="bg-white rounded-2xl border border-outline-variant overflow-hidden text-center p-6 shadow-sm">
            <img
              alt={mentor.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-surface-container-low"
              src={mentor.image}
            />
            <h3 className="font-headline-md text-headline-md text-on-surface">{mentor.name}</h3>
            <p className="font-body-md text-body-md text-primary-container font-medium mb-2">{mentor.role}</p>
            <span className="inline-block bg-surface-container-low text-secondary text-xs px-3 py-1 rounded-full">
              {mentor.experience}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MeetYourMentors