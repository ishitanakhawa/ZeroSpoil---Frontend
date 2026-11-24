import React, { useState } from 'react';
import { posInventory } from '../data/mockData';

const quickTags = ['Bakery Voice Note', 'Fruit Stall Clearance', '5-Hr Unchilled Gravy Trap'];

export default function ShopOwnerView() {
  const [surplusText, setSurplusText] = useState('');
  const [posted, setPosted] = useState(false);
  const [runningAudit, setRunningAudit] = useState(false);
  const [auditDone, setAuditDone] = useState(false);

  const handlePost = () => {
    if (surplusText.trim()) {
      setPosted(true);
      setTimeout(() => setPosted(false), 3000);
      setSurplusText('');
    }
  };

  const handleAudit = () => {
    setRunningAudit(true);
    setTimeout(() => {
      setRunningAudit(false);
      setAuditDone(true);
      setTimeout(() => setAuditDone(false), 3000);
    }, 2000);
  };

  return (
    <div style={{ padding: '32px', maxWidth: 1100, margin: '0 auto' }}>
      {/* Header */}
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 6 }}>
        Sell Smarter · Waste Less
      </p>
      <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>
        Your surplus studio
      </h1>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 32 }}>
        Quick-drop food from local bakeries, restaurants, fruit and kirana stalls.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* WhatsApp Quick-Drop */}
        <div style={{
          background: '#fff',
          borderRadius: 16,
          padding: '28px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          border: '1px solid #f0f0eb',
        }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>WhatsApp Quick-Drop</h2>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 18 }}>
            Drop a voice note, photo, or quick message. Safety rails review before posting.
          </p>

          {/* Quick tags */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {quickTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSurplusText(tag + ': ')}
                style={{
                  padding: '6px 12px',
                  background: 'var(--green-light)',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'var(--green-dark)',
                  cursor: 'pointer',
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Upload buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 18 }}>
            <button style={{
              padding: '28px 16px',
              background: '#fafaf8',
              border: '1.5px dashed var(--border)',
              borderRadius: 10,
              fontSize: 13,
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
            }}>
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              Photo
            </button>
            <button style={{
              padding: '28px 16px',
              background: '#fafaf8',
              border: '1.5px dashed var(--border)',
              borderRadius: 10,
              fontSize: 13,
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
            }}>
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
              Voice note
            </button>
          </div>

          {/* Text area */}
          <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>
            Surplus details
          </label>
          <textarea
            value={surplusText}
            onChange={(e) => setSurplusText(e.target.value)}
            placeholder="What food is available? Include quantity and storage conditions."
            rows={4}
            style={{
              width: '100%',
              padding: '12px',
              border: '1.5px solid var(--border)',
              borderRadius: 10,
              fontSize: 13,
              resize: 'vertical',
              marginBottom: 16,
              color: 'var(--text-primary)',
              background: '#fff',
            }}
          />

          <button
            onClick={handlePost}
            style={{
              background: 'var(--green-dark)',
              color: '#fff',
              border: 'none',
              borderRadius: 10,
              padding: '12px 24px',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: 12,
            }}
          >
            {posted ? '✓ Posted!' : 'Post Surplus'}
          </button>

          <div style={{
            background: 'var(--green-light)',
            borderRadius: 8,
            padding: '10px 14px',
            fontSize: 12,
            color: 'var(--green-dark)',
          }}>
            Safety review runs before every post.
          </div>
        </div>

        {/* POS Sync */}
        <div style={{
          background: '#fff',
          borderRadius: 16,
          padding: '28px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          border: '1px solid #f0f0eb',
        }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Supermarket POS Sync</h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green-accent)' }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--green-accent)' }}>LAN POS connected</span>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>FreshMart inventory · Panvel</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 24 }}>
            {posInventory.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 0',
                  borderBottom: i < posInventory.length - 1 ? '1px solid #f5f5ef' : 'none',
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 500 }}>{item.name}</span>
                <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 500 }}>{item.label}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleAudit}
            style={{
              background: 'var(--green-dark)',
              color: '#fff',
              border: 'none',
              borderRadius: 10,
              padding: '12px 24px',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            {runningAudit ? 'Running audit…' : auditDone ? '✓ Audit complete' : 'Run POS Audit'}
          </button>
        </div>
      </div>
    </div>
  );
}
