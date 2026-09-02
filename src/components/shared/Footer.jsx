import { Link } from 'react-router-dom'

const links = [
  ['Expertise', '/#services'],
  ['Selected work', '/#work'],
  ['Our approach', '/#about'],
  ['Academy', '/courses'],
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="footer-brand" to="/" aria-label="StepUpCity home">
          <span className="brand-glyph">S</span>
          <span className="brand-word">STEPUP<span>CITY</span></span>
        </Link>
        <p>Independent strategy, creative and performance agency.<br />Haryana, India · Working worldwide.</p>
        <nav aria-label="Footer navigation">
          {links.map(([label, href]) => href.startsWith('/#') ? <a key={label} href={href}>{label}</a> : <Link key={label} to={href}>{label}</Link>)}
        </nav>
        <div className="footer-social">
          <a href="#linkedin" aria-label="LinkedIn">LI ↗</a>
          <a href="#instagram" aria-label="Instagram">IG ↗</a>
          <a href="#youtube" aria-label="YouTube">YT ↗</a>
        </div>
      </div>
      <div className="footer-wordmark">STEPUPCITY</div>
      <div className="footer-bottom">
        <span>© 2026 StepUpCity</span>
        <span>Think sharp. Move fast. Grow well.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
