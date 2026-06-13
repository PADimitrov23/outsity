import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
})

const GALLERY_PERIODS = [
  {
    period: 'DEBUT 5TH OF JUNE',
    description: 'Building momentum in our first Venue (Sponsored by Yavor Velizarov and fellow listeners) - 05/05/2026',
    images: [
      '/IMG_4718.JPG',
      '/IMG_4719.JPG',
      '/IMG_4720.JPG',
      '/IMG_4721.JPG',
      '/IMG_4723.JPG',
      '/IMG_4724.JPG',
      '/IMG_4725.JPG',
      '/IMG_4726.JPG',
      '/IMG_4727.JPG',
      '/IMG_4729.JPG',
      '/IMG_4730.JPG',
      '/IMG_4731.JPG',
      '/IMG_4734.JPG',
      '/IMG_4735.JPG',
      '/IMG_4738.JPG',
      '/IMG_4749.JPG',
      '/IMG_4751.JPG',
      '/IMG_4753.JPG',
      '/IMG_4759.JPG',
      '/IMG_4762.JPG',
      '/IMG_4765.JPG',
      '/IMG_4769.JPG',
      '/IMG_4771.JPG',
      '/IMG_4772.JPG',
      '/IMG_4779.JPG',
      '/IMG_4706.JPG',
    ],
  },
]

// Flatten all images for lightbox navigation
const ALL_IMAGES = GALLERY_PERIODS.flatMap(p => p.images)

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', color: 'var(--cream)' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid #1d1d1d', padding: '60px' }}>
        <h1
          className="font-bebas"
          style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            margin: '0 0 12px 0',
            letterSpacing: '0.05em',
          }}
        >
          EXHIBITION
        </h1>
        <p className="font-mono" style={{ color: 'var(--cream-dim)', margin: '0', fontSize: '0.9rem' }}>
          A visual journey through Outsity's world
        </p>
      </div>

      {/* Gallery Sections */}
      <div>
        {GALLERY_PERIODS.map((section, sectionIdx) => (
          <div key={sectionIdx} style={{ paddingBottom: '80px' }}>
            {/* Period Header */}
            <div style={{
              padding: '40px 60px',
              borderBottom: '1px solid #1d1d1d',
              marginBottom: '40px',
            }}>
              <h2 className="font-bebas" style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                margin: '0 0 8px 0',
                letterSpacing: '0.05em',
              }}>
                {section.period}
              </h2>
              <p className="font-mono" style={{
                color: 'var(--cream-dim)',
                margin: '0',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
              }}>
                {section.description}
              </p>
            </div>

            {/* Images Grid */}
            <div style={{ padding: '0 60px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1px',
                background: '#1d1d1d',
              }}>
                {section.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className="placeholder-card"
                    style={{
                      cursor: 'pointer',
                      overflow: 'hidden',
                      aspectRatio: '1',
                      background: 'var(--off-black)',
                    }}
                  >
                    <img
                      src={img}
                      alt={`${section.period} image ${idx + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease, filter 0.3s ease',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'
                        ;(e.currentTarget as HTMLImageElement).style.filter = 'brightness(1.1)'
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'
                        ;(e.currentTarget as HTMLImageElement).style.filter = 'brightness(1)'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer',
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full view"
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                animation: 'fadeUp 0.3s ease',
              }}
            />
            <div style={{
              marginTop: '20px',
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              width: '100%',
            }}>
              <button
                onClick={() => {
                  const currentIdx = ALL_IMAGES.indexOf(selectedImage)
                  if (currentIdx > 0) {
                    setSelectedImage(ALL_IMAGES[currentIdx - 1])
                  }
                }}
                style={{
                  background: 'var(--cream)',
                  color: 'var(--black)',
                  border: 'none',
                  padding: '12px 24px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontFamily: 'Inconsolata, monospace',
                  letterSpacing: '0.1em',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#eaeaea')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--cream)')}
              >
                ← PREV
              </button>
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  background: 'transparent',
                  color: 'var(--cream)',
                  border: '1px solid var(--cream-dim)',
                  padding: '12px 24px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontFamily: 'Inconsolata, monospace',
                  letterSpacing: '0.1em',
                  transition: 'all 0.2s ease',
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
                CLOSE
              </button>
              <button
                onClick={() => {
                  const currentIdx = ALL_IMAGES.indexOf(selectedImage)
                  if (currentIdx < ALL_IMAGES.length - 1) {
                    setSelectedImage(ALL_IMAGES[currentIdx + 1])
                  }
                }}
                style={{
                  background: 'var(--cream)',
                  color: 'var(--black)',
                  border: 'none',
                  padding: '12px 24px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontFamily: 'Inconsolata, monospace',
                  letterSpacing: '0.1em',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#eaeaea')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--cream)')}
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
