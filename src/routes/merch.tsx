import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/merch')({
  component: MerchPage,
})

// PLACEHOLDER: Replace these items with your real merch
const MERCH_ITEMS = [
  { id: 1, name: 'Classic Logo Tee', price: '$35', tag: 'New' },
  { id: 2, name: 'Outsity Hoodie', price: '$75', tag: 'Limited' },
  { id: 3, name: 'Logo Cap', price: '$28', tag: null },
  { id: 4, name: 'Vinyl Sticker Pack', price: '$12', tag: 'Best Seller' },
  { id: 5, name: 'Tote Bag', price: '$22', tag: null },
  { id: 6, name: 'Long Sleeve Tee', price: '$45', tag: 'Limited' },
]

function MerchCard({ item }: { item: typeof MERCH_ITEMS[0] }) {
  return (
    <div className="placeholder-card" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Image placeholder */}
      <div style={{
        aspectRatio: '1 / 1',
        background: 'linear-gradient(135deg, #181818 0%, #141414 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <svg viewBox="0 0 200 200" style={{ width: '60%', opacity: 0.12 }}>
          <rect x="40" y="60" width="120" height="100" fill="none" stroke="#d4ff00" strokeWidth="2" />
          <line x1="40" y1="60" x2="70" y2="30" stroke="#d4ff00" strokeWidth="2" />
          <line x1="160" y1="60" x2="130" y2="30" stroke="#d4ff00" strokeWidth="2" />
          <line x1="70" y1="30" x2="130" y2="30" stroke="#d4ff00" strokeWidth="2" />
          <text x="100" y="120" fontFamily="Archivo Black" fontSize="14" textAnchor="middle" fill="#d4ff00">OUTSITY</text>
        </svg>
        {item.tag && (
          <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
            <span className="tag">{item.tag}</span>
          </div>
        )}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Inconsolata, monospace', fontSize: '0.7rem',
          letterSpacing: '0.1em', color: '#3a3a3a', textTransform: 'uppercase',
        }}>
          {/* Replace with real product image */}
          Image Placeholder
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '20px 24px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h3 className="font-display" style={{ fontSize: '1.1rem', color: 'var(--cream)', margin: 0 }}>
            {item.name}
          </h3>
          <span className="font-mono" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--acid)' }}>
            {item.price}
          </span>
        </div>
        <button
          style={{
            marginTop: '16px',
            width: '100%',
            background: 'transparent',
            border: '1px solid #2a2a2a',
            color: 'var(--cream-dim)',
            fontFamily: 'Inconsolata, monospace',
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '10px',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--acid)'
            e.currentTarget.style.color = 'var(--acid)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#2a2a2a'
            e.currentTarget.style.color = 'var(--cream-dim)'
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

function MerchPage() {
  return (
    <div style={{ padding: '60px 60px 100px' }}>
      {/* Header */}
      <div className="animate-fade-up animate-fade-up-delay-1" style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="tag">Shop</span>
            <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', margin: '12px 0 0', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
              Merch
            </h1>
          </div>
          <p className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--cream-dim)', maxWidth: '320px', lineHeight: 1.7, margin: 0 }}>
            {/* PLACEHOLDER: Update this description */}
            Official Outsity merchandise. Wear the sound, support the band.
          </p>
        </div>
        <div className="acid-line" style={{ marginTop: '32px' }} />
      </div>

      {/* Grid */}
      <div className="animate-fade-up animate-fade-up-delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', background: '#1a1a1a' }}>
        {MERCH_ITEMS.map(item => (
          <MerchCard key={item.id} item={item} />
        ))}
      </div>

      {/* Placeholder note */}
      <div style={{
        marginTop: '60px', padding: '24px 32px',
        border: '1px dashed #2a2a2a', background: 'var(--off-black)',
        fontFamily: 'Inconsolata, monospace', fontSize: '0.8rem',
        color: 'var(--cream-dim)', lineHeight: 1.7,
      }}>
        <strong style={{ color: 'var(--acid)' }}>PLACEHOLDER</strong> — Replace{' '}
        <code style={{ color: 'var(--cream)' }}>MERCH_ITEMS</code> in{' '}
        <code style={{ color: 'var(--cream)' }}>src/routes/merch.tsx</code>{' '}
        with your actual products, prices, and images.
      </div>
    </div>
  )
}
