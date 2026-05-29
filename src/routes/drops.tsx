import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/drops')({
  component: DropsPage,
})

// PLACEHOLDER: Replace with your actual releases
const DROPS = [
  {
    id: 1,
    title: 'Drop Title Here',
    type: 'Single',
    date: 'Jan 2025',
    desc: 'Replace this with a description of the track, EP, or release. What was the inspiration? Where was it recorded?',
    featured: true,
  },
  {
    id: 2,
    title: 'Drop Title Here',
    type: 'EP',
    date: 'Oct 2024',
    desc: 'Replace this with a description of the track, EP, or release. What was the inspiration? Where was it recorded?',
    featured: false,
  },
  {
    id: 3,
    title: 'Drop Title Here',
    type: 'Single',
    date: 'Aug 2024',
    desc: 'Replace this with a description of the track, EP, or release.',
    featured: false,
  },
  {
    id: 4,
    title: 'Drop Title Here',
    type: 'Album',
    date: 'Mar 2024',
    desc: 'Replace this with a description of the track, EP, or release.',
    featured: false,
  },
]

function FeaturedDrop({ drop }: { drop: typeof DROPS[0] }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: '1px', background: '#1d1d1d',
      marginBottom: '1px',
    }}>
      {/* Cover art placeholder */}
      <div style={{
        background: 'var(--off-black)',
        aspectRatio: '1 / 1',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <svg viewBox="0 0 400 400" style={{ width: '80%', opacity: 0.15 }}>
          <circle cx="200" cy="200" r="180" fill="none" stroke="#f5f5f5" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="#f5f5f5" strokeWidth="1" />
          <circle cx="200" cy="200" r="60" fill="none" stroke="#f5f5f5" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="12" fill="#f5f5f5" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2
            return (
              <line
                key={i}
                x1={200 + Math.cos(angle) * 130}
                y1={200 + Math.sin(angle) * 130}
                x2={200 + Math.cos(angle) * 170}
                y2={200 + Math.sin(angle) * 170}
                stroke="#f5f5f5"
                strokeWidth="1"
              />
            )
          })}
        </svg>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Inconsolata, monospace', fontSize: '0.7rem', letterSpacing: '0.1em',
          color: '#3a3a3a', textTransform: 'uppercase',
        }}>
          Cover Art Placeholder
        </div>
        <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
          <span className="tag">Featured</span>
        </div>
      </div>

      {/* Info */}
      <div style={{
        background: 'var(--off-black)', padding: '48px 44px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <span className="tag">{drop.type}</span>
          <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--cream-dim)', textTransform: 'uppercase', alignSelf: 'center' }}>
            {drop.date}
          </span>
        </div>
        <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 0.95, letterSpacing: '-0.02em', margin: '0 0 24px' }}>
          {drop.title}
        </h2>
        <div className="acid-line" />
        <p className="font-mono" style={{ marginTop: '20px', fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--cream-dim)' }}>
          {drop.desc}
        </p>
        <div style={{ marginTop: '36px', display: 'flex', gap: '12px' }}>
          {/* PLACEHOLDER: Link to streaming platforms */}
          {['Spotify', 'Apple Music', 'Bandcamp'].map(platform => (
            <button
              key={platform}
              style={{
                background: 'transparent', border: '1px solid #202020',
                color: 'var(--cream-dim)', fontFamily: 'Inconsolata, monospace',
                fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.12em',
                textTransform: 'uppercase', padding: '8px 16px', cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--cream)'
                e.currentTarget.style.color = 'var(--cream)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#202020'
                e.currentTarget.style.color = 'var(--cream-dim)'
              }}
            >
              {platform}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function DropRow({ drop }: { drop: typeof DROPS[0] }) {
  return (
    <div className="placeholder-card" style={{
      display: 'grid', gridTemplateColumns: '80px 1fr auto',
      gap: '24px', alignItems: 'center', padding: '24px 32px',
    }}>
      {/* Mini cover */}
      <div style={{
        width: '80px', height: '80px', background: '#181818',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg viewBox="0 0 80 80" width="80" height="80">
          <circle cx="40" cy="40" r="35" fill="none" stroke="#f5f5f5" strokeWidth="1" opacity="0.2" />
          <circle cx="40" cy="40" r="6" fill="#f5f5f5" opacity="0.3" />
        </svg>
      </div>

      <div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '6px', alignItems: 'center' }}>
          <span className="tag">{drop.type}</span>
          <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--cream-dim)', textTransform: 'uppercase' }}>
            {drop.date}
          </span>
        </div>
        <h3 className="font-display" style={{ fontSize: '1.3rem', margin: 0, color: 'var(--cream)' }}>{drop.title}</h3>
        <p className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--cream-dim)', margin: '6px 0 0', lineHeight: 1.5 }}>
          {drop.desc.length > 90 ? drop.desc.slice(0, 90) + '…' : drop.desc}
        </p>
      </div>

      <span style={{ color: 'var(--cream)', fontSize: '1.4rem', flexShrink: 0 }}>→</span>
    </div>
  )
}

function DropsPage() {
  const [featured, ...rest] = DROPS

  return (
    <div style={{ padding: '60px 60px 100px' }}>
      {/* Header */}
      <div className="animate-fade-up animate-fade-up-delay-1" style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="tag">Releases</span>
            <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', margin: '12px 0 0', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
              Drops
            </h1>
          </div>
          <p className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--cream-dim)', maxWidth: '320px', lineHeight: 1.7, margin: 0 }}>
            {/* PLACEHOLDER: Update this */}
            Every release, every single, every project. Stream or pick up a physical copy.
          </p>
        </div>
        <div className="acid-line" style={{ marginTop: '32px' }} />
      </div>

      {/* Featured drop */}
      <div className="animate-fade-up animate-fade-up-delay-2">
        <FeaturedDrop drop={featured} />
      </div>

      {/* Rest of drops */}
      <div className="animate-fade-up animate-fade-up-delay-3" style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1d1d1d', marginTop: '1px' }}>
        {rest.map(drop => (
          <DropRow key={drop.id} drop={drop} />
        ))}
      </div>

      {/* Placeholder note */}
      <div style={{
        marginTop: '60px', padding: '24px 32px',
        border: '1px dashed #202020', background: 'var(--off-black)',
        fontFamily: 'Inconsolata, monospace', fontSize: '0.8rem',
        color: 'var(--cream-dim)', lineHeight: 1.7,
      }}>
        <strong style={{ color: 'var(--cream)' }}>PLACEHOLDER</strong> — Replace{' '}
        <code style={{ color: 'var(--cream)' }}>DROPS</code> in{' '}
        <code style={{ color: 'var(--cream)' }}>src/routes/drops.tsx</code>{' '}
        with your actual releases. Add streaming links by updating the button hrefs.
      </div>
    </div>
  )
}
