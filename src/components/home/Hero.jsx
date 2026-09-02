import Reveal from '../shared/Reveal.jsx'

const proof = [
  ['250+', 'brands moved forward'],
  ['₹40Cr+', 'media spend managed'],
  ['4.9/5', 'client-rated experience'],
]

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-kicker">
        <span className="status-dot" />
        Independent growth agency · India / Worldwide
      </div>

      <Reveal>
        <h1>
          <span>We make brands</span>
          <span className="hero-line-accent">impossible to <em>ignore.</em></span>
        </h1>
      </Reveal>

      <div className="hero-bottom">
        <Reveal delay={140} className="hero-intro">
          <p>Strategy, storytelling and performance—built as one system that turns attention into measurable growth.</p>
          <div className="hero-actions">
            <a className="magnetic-button" href="#contact">
              <span>Get your growth plan</span>
              <i aria-hidden="true">↗</i>
            </a>
            <a className="text-link" href="#work">See how we move brands <span>↓</span></a>
          </div>
        </Reveal>

        <Reveal delay={220} className="signal-card">
          <div className="signal-card-head">
            <span>LIVE GROWTH SIGNAL</span>
            <span className="signal-live"><i /> OPTIMAL</span>
          </div>
          <div className="signal-visual" aria-hidden="true">
            <div className="signal-axis"><span>ATTENTION</span><span>ACTION</span></div>
            <svg viewBox="0 0 520 180" role="presentation">
              <defs>
                <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#e5162f" stopOpacity=".32" />
                  <stop offset="1" stopColor="#e5162f" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="area" d="M0 158 C45 146 70 152 112 125 S183 144 228 96 S302 118 340 68 S420 92 520 18 L520 180 L0 180Z" />
              <path className="line" pathLength="1" d="M0 158 C45 146 70 152 112 125 S183 144 228 96 S302 118 340 68 S420 92 520 18" />
              <circle cx="520" cy="18" r="6" />
            </svg>
            <strong>+218%</strong>
            <small>COMPOUND GROWTH</small>
          </div>
        </Reveal>
      </div>

      <div className="hero-proof" aria-label="Agency proof points">
        {proof.map(([value, label]) => (
          <div key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
        <div className="hero-proof-note"><span>Built for the ambitious.</span><i>✦</i></div>
      </div>
    </section>
  )
}

export default Hero
