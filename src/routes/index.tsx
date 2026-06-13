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
            borderRight: '1px solid #1d1d1d',
          }}
        >
          <div className="animate-fade-up animate-fade-up-delay-1">
            <span className="tag">Est. 2025</span>
          </div>

          <div className="animate-fade-up animate-fade-up-delay-2" style={{ marginTop: '32px' }}>
            <h1
              className="glitch-parent"
              style={{
                fontSize: 'clamp(5rem, 12vw, 11rem)',
                lineHeight: 0.88,
                letterSpacing: '-0.02em',
                margin: 0,
                color: 'var(--cream)',
              }}
            >
              <span className="font-display" style={{ fontSize: '0.38em', letterSpacing: '0.08em', display: 'block', marginBottom: '0.05em' }}>
                Hi, we are
              </span>
              <span className="font-bebas" style={{ color: 'var(--cream)', fontWeight: 800 }}>OUTSITY</span>
              <span className="glitch-clone font-bebas" style={{ fontSize: 'clamp(5rem, 12vw, 11rem)', lineHeight: 0.88, letterSpacing: '-0.02em', fontWeight: 800 }}>
                OUTSITY
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
              Chuds with a dream to become even more mediocre. Hailing from the outskirts of Meden Rudnik.
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
                background: 'var(--cream)',
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
              onMouseEnter={e => (e.currentTarget.style.background = '#eaeaea')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--cream)')}
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
                e.currentTarget.style.borderColor = 'var(--cream)'
                e.currentTarget.style.color = 'var(--cream)'
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
                <stop offset="0%" stopColor="#f5f5f5" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#080808" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="grad2" cx="30%" cy="75%" r="40%">
                <stop offset="0%" stopColor="#f5f5f5" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#080808" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="600" height="700" fill="#050505" />
            <rect width="600" height="700" fill="url(#grad1)" />
            <rect width="600" height="700" fill="url(#grad2)" />
            <g stroke="#242424" strokeWidth="1">
              {Array.from({ length: 30 }).map((_, i) => (
                <line key={i} x1={i * 40 - 200} y1="0" x2={i * 40 + 300} y2="700" />
              ))}
            </g>
            <circle cx="380" cy="280" r="220" fill="none" stroke="#f5f5f5" strokeWidth="1" opacity="0.12" />
            <circle cx="380" cy="280" r="160" fill="none" stroke="#f5f5f5" strokeWidth="0.5" opacity="0.08" />
            <circle cx="380" cy="280" r="90" fill="none" stroke="#f5f5f5" strokeWidth="0.5" opacity="0.06" />
            <line x1="380" y1="60" x2="380" y2="500" stroke="#f5f5f5" strokeWidth="0.5" opacity="0.14" />
            <line x1="160" y1="280" x2="600" y2="280" stroke="#f5f5f5" strokeWidth="0.5" opacity="0.14" />
            <rect x="40" y="580" width="80" height="80" fill="none" stroke="#f5f5f5" strokeWidth="1" opacity="0.18" />
            <rect x="55" y="595" width="50" height="50" fill="none" stroke="#f5f5f5" strokeWidth="0.5" opacity="0.1" />
            <text x="40" y="540" fontFamily="Inconsolata, monospace" fontSize="11" fill="#a8a8a8" letterSpacing="3" opacity="0.6">
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
        borderTop: '1px solid #1d1d1d', borderBottom: '1px solid #1d1d1d',
        overflow: 'hidden', padding: '14px 0', background: 'var(--off-black)',
      }}>
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display" style={{
              fontSize: '0.75rem', letterSpacing: '0.3em',
              color: i % 2 === 0 ? 'var(--cream-dim)' : 'var(--cream)',
              marginRight: '60px',
            }}>
              {i % 2 === 0 ? 'OUTSITY' : '—THE OUTSKIRTS YEARN FOR US—'}
            </span>
          ))}
        </div>
      </div>

      {/* Section links grid */}
      <section style={{ padding: '80px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#1d1d1d' }}>
          {[
            { label: 'Merch', to: '/merch', desc: 'Tees, hoodies, accessories — wear the sound.', num: '01' },
            { label: 'Drops', to: '/drops', desc: 'New releases, singles, and limited runs.', num: '02' },
            { label: 'Gallery', to: '/gallery', desc: 'Visual journey through Outsity\'s world.', num: '03' },
            { label: 'Members', to: '/members', desc: 'The people behind the noise.', num: '04' },
          ].map(({ label, to, desc, num }) => (
            <Link key={to} to={to} style={{ textDecoration: 'none' }}>
              <div className="placeholder-card" style={{ padding: '48px 40px', minHeight: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--cream-dim)', textTransform: 'uppercase' }}>{num}</span>
                  <span style={{ color: 'var(--cream)', fontSize: '1.2rem' }}>→</span>
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
