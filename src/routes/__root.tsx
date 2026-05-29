import { HeadContent, Outlet, Scripts, createRootRoute, Link, useRouterState } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'OUTSITY' },
      { name: 'description', content: 'Outsity — official band site' },
    ],
  }),
  shellComponent: RootDocument,
})

function Nav() {
  const router = useRouterState()
  const path = router.location.pathname

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 40px',
        borderBottom: '1px solid #1d1d1d',
        background: 'rgba(0,0,0,0.96)',
        backdropFilter: 'blur(6px)',
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="glitch-parent" style={{ display: 'inline-block' }}>
          <span
            className="font-display"
            style={{
              fontSize: '1.6rem',
              letterSpacing: '0.05em',
              color: 'var(--cream)',
              lineHeight: 1,
            }}
          >
            OUTSITY
          </span>
          <span className="font-display glitch-clone" style={{ fontSize: '1.6rem', letterSpacing: '0.05em', lineHeight: 1 }}>
            OUTSITY
          </span>
        </div>
      </Link>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {[
          { label: 'Merch', to: '/merch' },
          { label: 'Drops', to: '/drops' },
          { label: 'Members', to: '/members' },
        ].map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={`nav-link${path === to ? ' active' : ''}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Nav />
        <main style={{ paddingTop: '73px', minHeight: '100vh' }}>
          {children}
        </main>
        <footer style={{
          borderTop: '1px solid #1d1d1d',
          padding: '28px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span className="font-display" style={{ fontSize: '1rem', letterSpacing: '0.05em', color: 'var(--cream)' }}>
            OUTSITY
          </span>
          <span className="font-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--cream-dim)', textTransform: 'uppercase' }}>
            © 2025 — All rights reserved
          </span>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
