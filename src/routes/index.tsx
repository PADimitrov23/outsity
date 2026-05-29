import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <iframe
        src="/googled6de8761a460b24b.html"
        title="Google site verification"
        aria-hidden="true"
        tabIndex={-1}
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          border: 0,
          opacity: 0,
          pointerEvents: 'none',
          left: '-9999px',
        }}
      />

      {/* Hero */}
      <section
        style={{
          minHeight: 'calc(100vh - 73px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          position: 'relative',
        }}
      >
        {/* Left: text column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 40px 80px 60px',
            borderRight: '1px solid #1a1a1a',
          }}
        >
          <div className="animate-fade-up animate-fade-up-delay-1">
            <span className="tag">Est. 2024</span>
          </div>

          <div className="animate-fade-up animate-fade-up-delay-2" style={{ marginTop: '32px' }}>
            <h1
              className="font-display glitch-parent"
              style={{
                fontSize: 'clamp(5rem, 12vw, 11rem)',
                lineHeight: 0.88,
                letterSpacing: '-0.02em',
                margin: 0,
                color: 'var(--cream)',
              }}
            >
              OUT
              <br />
              <span style={{ color: 'var(--acid)' }}>SITY</span>
              <span className="glitch-clone font-display" style={{ fontSize: 'clamp(5rem, 12vw, 11rem)', lineHeight: 0.88, letterSpacing: '-0.02em' }}>
                OUT<br />SITY
              </span>
            </h1>
          </div>

          <div className="animate-fade-up animate-fade-up-delay-3" style={{ marginTop: '40px' }}>
            <div className="acid-line" />
            <p
              className="font-mono"
              style={{
                marginTop: '20px',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                color: 'var(--cream-dim)',
                maxWidth: '380px',
              }}
            >
              {/* PLACEHOLDER: Replace with your band bio / tagline */}
              Your band description goes here. Something raw, honest, and unforgettable. Tell the world what Outsity sounds like.
            </p>
          </div>

          <div
            className="animate-fade-up animate-fade-up-delay-4"
            style={{ marginTop: '48px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <Link
              to="/drops"
              style={{
                display: 'inline-block',
                background: 'var(--acid)',
                color: 'var(--black)',
                fontFamily: 'Inconsolata, monospace',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '14px 32px',
                textDecoration: 'none',
                transition: 'transform 0.15s ease, background 0.15s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#e8ff40')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--acid)')}
            >
              Latest Drops
            </Link>
            <Link
              to="/merch"
              style={{
                display: 'inline-block',
                border: '1px solid var(--cream-dim)',
                color: 'var(--cream)',
                fontFamily: 'Inconsolata, monospace',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '14px 32px',
                textDecoration: 'none',
                transition: 'border-color 0.15s ease, color 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--acid)'
                e.currentTarget.style.color = 'var(--acid)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--cream-dim)'
                e.currentTarget.style.color = 'var(--cream)'
              }}
            >
              Shop Merch
            </Link>
          </div>
        </div>

        {/* Right: visual column */}
        <div
          style={{
            position: 'relative',
            background: 'var(--off-black)',
            overflow: 'hidden',
          }}
        >
          <svg
            viewBox="0 0 600 700"
            preserveAspectRatio="xMidYMid slice"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          >
            <defs>
              <radialGradient id="grad1" cx="60%" cy="35%" r="55%">
                <stop offset="0%" stopColor="#d4ff00" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#080808" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="grad2" cx="30%" cy="75%" r="40%">
                <stop offset="0%" stopColor="#ff2d2d" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#080808" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="600" height="700" fill="#111010" />
            <rect width="600" height="700" fill="url(#grad1)" />
            <rect width="600" height="700" fill="url(#grad2)" />
            <g stroke="#1e1e1e" strokeWidth="1">
              {Array.from({ length: 30 }).map((_, i) => (
                <line key={i} x1={i * 40 - 200} y1="0" x2={i * 40 + 300} y2="700" />
              ))}
            </g>
            <circle cx="380" cy="280" r="220" fill="none" stroke="#d4ff00" strokeWidth="1" opacity="0.15" />
            <circle cx="380" cy="280" r="160" fill="none" stroke="#d4ff00" strokeWidth="0.5" opacity="0.1" />
            <circle cx="380" cy="280" r="90" fill="none" stroke="#d4ff00" strokeWidth="0.5" opacity="0.08" />
            <line x1="380" y1="60" x2="380" y2="500" stroke="#d4ff00" strokeWidth="0.5" opacity="0.2" />
            <line x1="160" y1="280" x2="600" y2="280" stroke="#d4ff00" strokeWidth="0.5" opacity="0.2" />
            <rect x="40" y="580" width="80" height="80" fill="none" stroke="#d4ff00" strokeWidth="1" opacity="0.25" />
            <rect x="55" y="595" width="50" height="50" fill="none" stroke="#d4ff00" strokeWidth="0.5" opacity="0.15" />
            <text x="40" y="540" fontFamily="Inconsolata, monospace" fontSize="11" fill="#9e9488" letterSpacing="3" opacity="0.6">
              OUTSITY / VISUAL ID 001
            </text>
          </svg>
          <div style={{
            position: 'absolute', top: '24px', right: '24px',
            fontFamily: 'Inconsolata, monospace', fontSize: '0.65rem',
            letterSpacing: '0.12em', color: 'var(--cream-dim)', opacity: 0.5, textAlign: 'right',
          }}>
            <div>LAT 40.7128° N</div>
            <div>LON 74.0060° W</div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div style={{
        borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a',
        overflow: 'hidden', padding: '14px 0', background: 'var(--off-black)',
      }}>
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display" style={{
              fontSize: '0.75rem', letterSpacing: '0.3em',
              color: i % 2 === 0 ? 'var(--cream-dim)' : 'var(--acid)',
              marginRight: '60px',
            }}>
              {i % 2 === 0 ? 'OUTSITY' : '— STAY TUNED FOR 5TH OF JUNE —'}
            </span>
          ))}
        </div>
      </div>

      {/* Section links grid */}
      <section style={{ padding: '80px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#1a1a1a' }}>
          {[
            { label: 'Merch', to: '/merch', desc: 'Tees, hoodies, accessories — wear the sound.', num: '01' },
            { label: 'Drops', to: '/drops', desc: 'New releases, singles, and limited runs.', num: '02' },
            { label: 'Members', to: '/members', desc: 'The people behind the noise.', num: '03' },
          ].map(({ label, to, desc, num }) => (
            <Link key={to} to={to} style={{ textDecoration: 'none' }}>
              <div className="placeholder-card" style={{ padding: '48px 40px', minHeight: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--cream-dim)', textTransform: 'uppercase' }}>{num}</span>
                  <span style={{ color: 'var(--acid)', fontSize: '1.2rem' }}>→</span>
                </div>
                <div>
                  <h2 className="font-display" style={{ fontSize: '2.5rem', letterSpacing: '-0.01em', color: 'var(--cream)', margin: '0 0 12px 0' }}>{label}</h2>
                  <p className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--cream-dim)', margin: 0, lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}
