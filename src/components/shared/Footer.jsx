const footerColumns = [
  {
    heading: 'Company',
    links: ['Home', 'About', 'Contact', 'Reviews'],
  },
  {
    heading: 'Resources',
    links: ['Services', 'Case Studies', 'Our Work', 'Blogs'],
  },
  {
    heading: 'Specializations',
    links: [
      'Full-Funnel Marketing',
      'Search Engine Optimization',
      'Performance Marketing (PPC)',
      'Social Media Management',
      'E-Commerce Marketing',
      'Website Designing',
      'Mapping Course',
    ],
  },
]

const socials = [
  { name: 'Instagram', icon: 'camera' },
  { name: 'Facebook', icon: 'facebook' },
  { name: 'LinkedIn', icon: 'linkedin' },
  { name: 'YouTube', icon: 'smart_display' },
]

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-inverse-surface font-body-md text-body-md w-full">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-primary-container to-primary-fixed-dim"></div>

      <div className="grid grid-cols-1 gap-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:grid-cols-2 md:py-section-gap lg:grid-cols-12">
        {/* Brand & newsletter */}
        <div className="flex flex-col gap-6 lg:col-span-4">
          <a className="font-headline-md text-headline-md font-bold text-on-tertiary" href="#">
            <img
              src="https://stepupcity.com/wp-content/uploads/2023/05/Digital-Marketing-Institute-Agency-3.png"
              alt="StepUpCity Logo"
              className="h-[50px] w-auto object-contain"
            />
          </a>
          <p className="text-tertiary-fixed-dim">
            Results-driven digital marketing, training and growth — powered by data, AI and a passion for
            measurable outcomes.
          </p>

          {/* Newsletter */}
          <div>
            <p className="mb-3 font-label-bold text-label-bold text-on-tertiary">Get growth tips in your inbox</p>
            <div className="flex max-w-sm overflow-hidden rounded-xl border border-tertiary-container/40 bg-on-tertiary/5">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="w-full bg-transparent px-4 py-3 text-sm text-on-tertiary placeholder:text-tertiary-fixed-dim focus:outline-none"
              />
              <button className="bg-primary-container px-4 text-on-primary transition-opacity hover:opacity-90">
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                title={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-tertiary-container/40 text-tertiary-fixed-dim transition-all duration-300 hover:-translate-y-1 hover:border-primary-container hover:bg-primary-container hover:text-on-primary"
              >
                <span className="material-symbols-outlined text-lg">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {footerColumns.map((column) => (
          <div key={column.heading} className="flex flex-col gap-3 lg:col-span-2">
            <h4 className="mb-2 font-label-bold text-label-bold uppercase tracking-wider text-on-tertiary">
              {column.heading}
            </h4>
            {column.links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-tertiary-fixed-dim transition-colors hover:text-on-tertiary focus:outline-none"
              >
                {link}
              </a>
            ))}
          </div>
        ))}

        {/* Contact */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <h4 className="mb-2 font-label-bold text-label-bold uppercase tracking-wider text-on-tertiary">
            Contact
          </h4>
          <a href="tel:+919999999999" className="flex items-center gap-2 text-tertiary-fixed-dim transition-colors hover:text-on-tertiary">
            <span className="material-symbols-outlined text-sm text-primary-container">call</span>
            +91 99999 99999
          </a>
          <a href="mailto:hello@stepupcity.com" className="flex items-center gap-2 text-tertiary-fixed-dim transition-colors hover:text-on-tertiary">
            <span className="material-symbols-outlined text-sm text-primary-container">mail</span>
            hello@stepupcity.com
          </a>
          <p className="flex items-start gap-2 text-tertiary-fixed-dim">
            <span className="material-symbols-outlined mt-0.5 text-sm text-primary-container">location_on</span>
            Haryana, India
          </p>
        </div>
      </div>

      <div className="border-t border-tertiary-container/30">
        <div className="flex flex-col items-center justify-between gap-3 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-6 text-sm text-tertiary-fixed-dim md:flex-row">
          <p>© 2026 StepUpCity. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-on-tertiary">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-on-tertiary">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer