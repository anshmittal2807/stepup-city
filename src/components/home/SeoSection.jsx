const seoPoints = [
  {
    title: 'Keyword Research Strategy',
    description: 'Identify high-value search terms using advanced tools.',
  },
  {
    title: 'Technical & On-Page SEO',
    description: 'Optimize site architecture, speed, and content relevancy.',
  },
]

function SeoSection() {
  return (
    <section id="seo-course" className="py-16 md:py-section-gap bg-primary text-on-primary">
      <div className="px-margin-mobile md:px-margin-desktop flex flex-col lg:flex-row gap-gutter items-center">
        <div className="lg:w-1/2">
          <h2 className="font-headline-lg text-headline-lg mb-6 text-on-primary">Dominate Search Rankings</h2>
          <p className="font-body-lg text-body-lg mb-8 text-on-primary">
            Dominate search engine rankings with our specialized SEO services. We drive organic, high-intent traffic to
            your business through proven methodologies and technical excellence.
          </p>
          <ul className="space-y-4 mb-8">
            {seoPoints.map((point) => (
              <li key={point.title} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined mt-1 text-on-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <div>
                  <h4 className="font-label-bold text-label-bold text-on-primary">{point.title}</h4>
                  <p className="font-body-md text-body-md text-sm mt-1 text-on-primary">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2">
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-sm border border-outline-variant/30">
            <img
              alt="SEO Analytics Dashboard"
              className="object-cover w-full h-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUythgKUQgCO6qMTmDDM5Le4Jgfr9GMqj8wUnsdpAvBssGxO4mbVlwzHsSw2ILdqHIXizcLiylrI5LJhNqONvyeZHMa7cukg2_zAy3whvYyc0pUJ-AFMH6lW9isxHWHCvYBMtcd3L5tT7Fd5Akm3GCiGfDZvNIqqTJ1yHe73ibKWSImJZ_6BUQhFE-bJwAHIFqUIlGC7stqeebPUC31Y2v2LxaJTd-fwX6Z5wetLAkTliV6u07NME"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeoSection
