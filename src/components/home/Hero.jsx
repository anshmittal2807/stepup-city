const stats = [
  { value: '150+', label: 'Projects Delivered', highlight: false },
  { value: '10+', label: 'Years Experience', highlight: false },
  { value: '200%', label: 'Avg. ROI', highlight: true },
]

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-16 md:py-section-gap min-h-0 lg:min-h-[870px]"
    >
      <div className="px-margin-mobile md:px-margin-desktop flex flex-col lg:flex-row items-center gap-gutter relative">
      {/* Abstract background decorative element */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-gradient-to-bl from-primary-fixed/20 to-transparent rounded-bl-[120px] opacity-70"></div>

      <div className="lg:w-1/2 flex flex-col gap-stack-lg z-10">
        <div className="inline-flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full w-fit border border-outline-variant/50">
          <span
            className="material-symbols-outlined text-primary-container text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            stars
          </span>
          <span className="font-label-bold text-label-bold text-on-surface-variant tracking-wider uppercase">
            Premium Digital Marketing Agency
          </span>
        </div>

        <h1 className="font-headline-xl text-headline-xl text-on-background text-balance">
          Results-Driven Digital Marketing Solutions <span className="text-primary-container">With AI</span>
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl text-pretty">
          Master your market with our data-driven strategies and advanced AI tools. Elevate your brand with
          full-funnel marketing campaigns and dedicated growth support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="bg-primary-container text-on-primary font-label-bold text-label-bold px-8 py-4 rounded shadow-sm hover:shadow-md hover:bg-primary transition-all duration-300 flex items-center justify-center gap-2 group">
            Get a Free Audit
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
          <button className="bg-transparent border border-on-background text-on-background font-label-bold text-label-bold px-8 py-4 rounded hover:bg-surface-container-low transition-colors duration-300 flex items-center justify-center gap-2">
            View Our Services
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-8 pt-8 border-t border-outline-variant/30">
          {stats.map((stat) => (
            <div key={stat.label} className="contents">
              {stat.highlight && <div className="w-px h-12 bg-outline-variant/50"></div>}
              <div className="flex flex-col">
                <span
                  className={`font-headline-md text-headline-md ${
                    stat.highlight ? 'text-primary-container' : 'text-on-background'
                  }`}
                >
                  {stat.value}
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-1/2 relative z-10 w-full aspect-square md:aspect-[4/3] lg:aspect-square">
        <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-lg border border-outline-variant/20">
          <img
            alt="Students in premium digital marketing class"
            className="object-cover w-full h-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuLHDx3T6c0QjcMxN_9yE6rRt_IrRFiIKfNxE68oRgxX-FhHvZquij5EbWfRdAGWr8x8mM8vUOsnaQKi9sWKMOYv7qKe-eP4NiVelxz_pJyV2nC96PXW-FztzPBiRGzpYJfGjuDmmOe5v7Fv-ZGSfKfPRa3JMpapMqPCZAyQoZB7BRYGEmKM7Kvju_tzlFTDZnbOuNJzEjIgIizAw9hxoZR7pWf3wLECPJ0jPKufEG7taZEaZSBHI"
          />
          {/* Floating Badge */}
          <div className="absolute bottom-8 left-[-24px] md:left-[-48px] glass-card p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-primary-container animate-bounce-slow">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                workspace_premium
              </span>
            </div>
            <div>
              <p className="font-label-bold text-label-bold text-on-background">Top Rated</p>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">By 500+ Clients</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero
