import React from 'react';
import Logo from '../components/Logo';

const styles = {
  root: {
    minHeight: '100vh',
    background: 'var(--bg)',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 48px',
    background: 'var(--bg)',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  loginBtn: {
    background: 'transparent',
    border: '2px solid var(--border)',
    borderRadius: 24,
    padding: '9px 22px',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text-primary)',
    cursor: 'pointer',
    transition: 'border-color 0.15s',
  },
  openBtn: {
    background: 'var(--green-dark)',
    border: 'none',
    borderRadius: 24,
    padding: '10px 24px',
    fontSize: 14,
    fontWeight: 700,
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 3px 12px rgba(15,45,26,0.28)',
  },
  hero: {
    textAlign: 'center',
    padding: '80px 24px 60px',
    maxWidth: 900,
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: 'clamp(40px, 8vw, 72px)',
    fontWeight: 900,
    lineHeight: 1.08,
    letterSpacing: '-0.035em',
    color: 'var(--text-primary)',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20,
    maxWidth: 960,
    margin: '0 auto',
    padding: '0 48px 80px',
  },
  card: (active) => ({
    background: active ? 'var(--green-light)' : '#fff',
    borderRadius: 18,
    padding: '32px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    boxShadow: active
      ? '0 4px 16px rgba(15,45,26,0.12)'
      : '0 2px 8px rgba(0,0,0,0.07)',
    cursor: 'pointer',
    border: active ? '2px solid var(--green-pill)' : '2px solid transparent',
    transition: 'all 0.2s',
  }),
  iconBox: (active) => ({
    width: 46,
    height: 46,
    background: active ? 'var(--green-pill)' : '#f0f0eb',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  cardLabel: {
    fontSize: 17,
    fontWeight: 700,
    color: 'var(--text-primary)',
  },
};

function CategoryCard({ icon, label, active }) {
  return (
    <div style={styles.card(active)}>
      <div style={styles.iconBox(active)}>{icon}</div>
      <span style={styles.cardLabel}>{label}</span>
    </div>
  );
}

export default function LandingPage({ onLogin }) {
  return (
    <div style={styles.root}>
      <nav style={styles.nav}>
        <Logo size={30} />
        <div style={styles.navRight}>
          <button style={styles.loginBtn} onClick={onLogin}>Log In</button>
          <button style={styles.openBtn} onClick={onLogin}>Open App</button>
        </div>
      </nav>

      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Rescue tonight's fresh surplus food near you for{' '}
          <span style={{ color: 'var(--green-accent)' }}>50% off</span>
          —or claim free NGO pickups.
        </h1>
      </div>

      <div style={styles.cards}>
        <CategoryCard
          icon={
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          }
          label="Supermarkets"
          active={false}
        />
        <CategoryCard
          icon={
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
          }
          label="Local Bakeries & Stalls"
          active={true}
        />
        <CategoryCard
          icon={
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          }
          label="Community & NGOs"
          active={false}
        />
      </div>
    </div>
  );
}
