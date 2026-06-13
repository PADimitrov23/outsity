import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/members')({
  component: MembersPage,
})

const MEMBERS = [
  {
    id: 1,
    name: 'Ameliia Dorosh',
    role: 'Vocals / Bad Jokes',
    accent: '#f5f5f5',
    bio: 'Origin: Ukraine (Mariopol). Influences: 90s alt, "Funny and original" friends, and the need to drop unfunny jokes in between convos.',
    initials: 'AD',
    instagram: 'https://www.instagram.com/4m3liia.r4t/',
  },
  {
    id: 2,
    name: 'Dimitar Meshkov',
    role: 'Bass',
    accent: '#f5f5f5',
    bio: 'Origin: True Bulgarian Chadlite. Influences: The deep thump of the Candy-Apple-Squire-Bass™, and the unexplainable urge to binge soy milk all the time.',
    initials: 'DM',
    instagram: 'https://www.instagram.com/m3shkovv/',
  },
  {
    id: 3,
    name: 'Bozhidar Stoqnov',
    role: 'Drums',
    accent: '#f5f5f5',
    bio: 'Origin: Bulgaria, Meden Rudnik (The outskirts). Influences: The relentless beat of the drums, and the desire to create chaos in the best way possible with his insane charisma.',
    initials: 'BS',
    instagram: 'https://www.instagram.com/_bo6kata_/',
  },
  {
    id: 4,
    name: 'Kristian Andreev',
    role: 'Lead/Rhythm Guitar',
    bio: 'Origin: Bulgaria, City: Unimportant. Influences: The constant need to play useless riffs instead of listening to his bandmates and being always confused.',
    accent: '#f5f5f5',
    initials: 'KA',
    instagram: 'https://www.instagram.com/wointrs/',
  },
  {
    id: 5,
    name: 'Petar Dimitrov',
    role: 'Lead/Rhythm Guitar',
    bio: 'Origin: Bulgaria, City: Sarafovo (Tuffest outskirts). Influences: The coolest of them all!',
    accent: '#f5f5f5',
    initials: 'PD',
    instagram: 'https://www.instagram.com/lildzzxx/',
  },
]

function MemberCard({ member, index }: { member: typeof MEMBERS[0]; index: number }) {
  const isOffset = index % 2 === 1

  return (
    <div
      className="placeholder-card animate-fade-up"
      style={{
        animationDelay: `${0.1 + index * 0.1}s`,
        opacity: 0,
        display: 'grid',
        gridTemplateColumns: isOffset ? '1fr auto' : 'auto 1fr',
      }}
    >
      {!isOffset && (
        <PhotoBlock member={member} />
      )}

      {/* Info */}
      <div style={{ padding: '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--cream-dim)', textTransform: 'uppercase' }}>
            0{member.id} / 0{MEMBERS.length}
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              letterSpacing: '-0.01em',
              lineHeight: 0.95,
              margin: '14px 0 8px',
              color: 'var(--cream)',
            }}
          >
            {member.name}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ width: '24px', height: '2px', background: member.accent }} />
            <span className="font-mono" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: member.accent, textTransform: 'uppercase', fontWeight: 700 }}>
              {member.role}
            </span>
          </div>
          <p className="font-mono" style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--cream-dim)', margin: 0 }}>
            {member.bio}
          </p>
        </div>

        {/* Social placeholders */}
        <div style={{ marginTop: '32px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {/* Only show Instagram link */}
          <a
            href={member.instagram || '#'}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--cream-dim)', fontFamily: 'Inconsolata, monospace',
              fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', padding: '7px 14px', cursor: 'pointer',
              transition: 'all 0.2s ease', border: '1px solid #202020', background: 'transparent', textDecoration: 'none',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = member.accent
              (e.currentTarget as HTMLElement).style.color = member.accent
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = '#202020'
              (e.currentTarget as HTMLElement).style.color = 'var(--cream-dim)'
            }}
          >
            Instagram
          </a>
        </div>
      </div>

      {isOffset && (
        <PhotoBlock member={member} />
      )}
    </div>
  )
}

function PhotoBlock({ member }: { member: typeof MEMBERS[0] }) {
  return (
    <div style={{
      width: '220px', flexShrink: 0,
      background: '#050505', borderLeft: '1px solid #1d1d1d', borderRight: '1px solid #1d1d1d',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', minHeight: '280px',
    }}>
      {/* Abstract avatar */}
      <svg viewBox="0 0 180 220" width="180" height="220" style={{ opacity: 0.7 }}>
        <defs>
          <radialGradient id={`ag${member.id}`} cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor={member.accent} stopOpacity="0.15" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="180" height="220" fill={`url(#ag${member.id})`} />
        {/* Head */}
        <ellipse cx="90" cy="70" rx="38" ry="44" fill="none" stroke={member.accent} strokeWidth="1" opacity="0.4" />
        {/* Body */}
        <path d="M 40 220 Q 50 140 90 130 Q 130 140 140 220" fill="none" stroke={member.accent} strokeWidth="1" opacity="0.3" />
        {/* Initials */}
        <text x="90" y="78" fontFamily="Archivo Black" fontSize="22" textAnchor="middle" fill={member.accent} opacity="0.6">
          {member.initials}
        </text>
        <text x="90" y="210" fontFamily="Inconsolata, monospace" fontSize="9" textAnchor="middle" fill="#a8a8a8" letterSpacing="2" opacity="0.6">
          PHOTO HERE
        </text>
      </svg>
    </div>
  )
}

function MembersPage() {
  return (
    <div style={{ padding: '60px 60px 100px' }}>
      {/* Header */}
      <div className="animate-fade-up animate-fade-up-delay-1" style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="tag">The Band</span>
            <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', margin: '12px 0 0', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
              Members
            </h1>
          </div>
          <p className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--cream-dim)', maxWidth: '320px', lineHeight: 1.7, margin: 0 }}>
            {/* PLACEHOLDER: Update this */}
            The people who make Outsity what it is. Five voices, one sound.
          </p>
        </div>
        <div className="acid-line" style={{ marginTop: '32px' }} />
      </div>

      {/* Members */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#1d1d1d' }}>
        {MEMBERS.map((member, i) => (
          <MemberCard key={member.id} member={member} index={i} />
        ))}
      </div>

      {/* Placeholder note */}
      <div style={{
        marginTop: '60px', padding: '24px 32px',
        border: '1px dashed #202020', background: 'var(--off-black)',
        fontFamily: 'Inconsolata, monospace', fontSize: '0.8rem',
        color: 'var(--cream-dim)', lineHeight: 1.7,
      }}>
        <strong style={{ color: 'var(--cream)' }}>For the fans</strong> — {' '}
        This whole thing was made possible by listeners, fans and fellow members which invested time, money and effort into making it possible, this site is dedicated to all of them{' '}
      </div>
    </div>
  )
}
