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

function Footer() {
  return (
    <footer className="bg-inverse-surface font-body-md text-body-md w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-section-gap">
      {/* Brand & Copyright */}
      <div className="flex flex-col gap-4 md:col-span-1">
        <a className="font-headline-md text-headline-md font-bold text-on-tertiary" href="#">
          <img
            src="https://stepupcity.com/wp-content/uploads/2023/05/Digital-Marketing-Institute-Agency-3.png"
            alt="StepUpCity Logo"
            className="h-[50px] w-auto object-contain"
          />
        </a>
        <p className="text-tertiary-fixed-dim text-sm mt-4">2026 StepUpCity. Privacy Policy, Terms &amp; Conditions.</p>
      </div>

      {/* Link Columns */}
      {footerColumns.map((column) => (
        <div key={column.heading} className="flex flex-col gap-3">
          <h4 className="font-label-bold text-label-bold text-on-tertiary mb-2">{column.heading}</h4>
          {column.links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-tertiary-fixed-dim hover:text-on-tertiary transition-colors focus:outline-none"
            >
              {link}
            </a>
          ))}
        </div>
      ))}
      </div>
    </footer>
  )
}

export default Footer
