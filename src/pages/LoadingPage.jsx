import React, { useEffect, useState } from 'react';

const syncSteps = [
  'Connected to MongoDB Cluster (zerospoil_db)',
  'Synced FreshMart Supermarket POS Inventory (LAN)',
  'Armed Deterministic FSSAI & Cold-Chain Safety Rails',
  'WhatsApp Business Multimodal Webhook Active',
];

export default function LoadingPage({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 1.2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress > 25) setActiveStep(1);
    if (progress > 55) setActiveStep(2);
    if (progress > 80) setActiveStep(3);
    if (progress >= 100) {
      setTimeout(onComplete, 600);
    }
  }, [progress]);

  const pct = Math.min(Math.round(progress), 100);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 22,
        padding: '48px 44px',
        width: '100%',
        maxWidth: 500,
        boxShadow: '0 8px 32px rgba(15,45,26,0.13)',
        border: '1.5px solid var(--border)',
        textAlign: 'center',
      }}>
        {/* Icon */}
        <div style={{
          width: 68,
          height: 68,
          borderRadius: '50%',
          border: '2.5px solid var(--green-pill)',
          background: 'var(--green-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 28px',
        }}>
          <svg width={30} height={30} viewBox="0 0 20 20" fill="none">
            <path d="M10 13 C10 13 4 12 4 7 C4 7 8 7 10 10" fill="#25a244" />
            <path d="M10 10 C10 10 16 9 16 4 C16 4 11 4 10 8" fill="#86efac" />
            <path d="M10 17 Q10 14 10 10 Q10 8 10 5" stroke="#0f2d1a" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 10 }}>
          Live System Sync
        </p>
        <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 10 }}>
          Initializing ZeroSpoil Autonomous Engine…
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 36 }}>
          Bringing the local rescue network online.
        </p>

        {/* Progress bar */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              Syncing Systems
            </span>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)' }}>{pct}%</span>
          </div>
          <div style={{
            height: 9,
            background: 'var(--green-light)',
            borderRadius: 5,
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${pct}%`,
              background: 'var(--green-accent)',
              borderRadius: 5,
              transition: 'width 0.1s linear',
            }} />
          </div>
        </div>

        {/* Steps */}
        <div style={{ textAlign: 'left', marginBottom: 32 }}>
          {syncSteps.map((step, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 0',
                borderBottom: i < syncSteps.length - 1 ? '1px solid #f0f0eb' : 'none',
                color: i <= activeStep ? 'var(--text-primary)' : 'var(--text-muted)',
                fontSize: 13,
                fontWeight: i === activeStep ? 600 : 400,
                transition: 'all 0.3s',
              }}
            >
              <span style={{ color: i <= activeStep ? 'var(--green-accent)' : '#bbb', fontSize: 14, fontWeight: 700 }}>✓</span>
              {step}
            </div>
          ))}
        </div>

        {/* Skip */}
        <button
          onClick={onComplete}
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Skip to Dashboard →
        </button>
      </div>
    </div>
  );
}
