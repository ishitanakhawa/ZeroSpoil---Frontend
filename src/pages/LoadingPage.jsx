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
      background: '#f0f0ea',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 20,
        padding: '48px 44px',
        width: '100%',
        maxWidth: 500,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        textAlign: 'center',
      }}>
        {/* Icon */}
        <div style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          border: '2px solid #b8e0be',
          background: '#f0fbf2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 28px',
        }}>
          <svg width={28} height={28} viewBox="0 0 24 24" fill="none">
            <path d="M12 3C9 3 6.5 5.5 6.5 8.5C6.5 11.5 9 14 12 14C15 14 17.5 11.5 17.5 8.5C17.5 5.5 15 3 12 3Z" fill="#4caf50" />
            <path d="M12 14C12 14 8 16 8 20H16C16 16 12 14 12 14Z" fill="#a5d6a7" />
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
            height: 8,
            background: '#e8e8e0',
            borderRadius: 4,
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${pct}%`,
              background: '#4caf50',
              borderRadius: 4,
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
              <span style={{ color: i <= activeStep ? '#4caf50' : '#ccc', fontSize: 14 }}>✓</span>
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
