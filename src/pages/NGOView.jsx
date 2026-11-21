import React, { useState } from 'react';
import { listings } from '../data/mockData';

export default function NGOView() {
  const [claimed, setClaimed] = useState([]);

  const ngoListings = listings.filter((l) => l.type === 'ngo');

  const handleClaim = (item) => {
    if (!claimed.find((c) => c.id === item.id)) {
      setClaimed([...claimed, item]);
    }
  };

  return (
    <div style={{ padding: '32px', maxWidth: 1100, margin: '0 auto' }}>
      {/* Header */}
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 6 }}>
        Community Rescue · Panvel
      </p>
      <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>
        Safe food, bigger impact.
      </h1>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 32 }}>
        Verified batches available for free pickup by local NGO partners.
      </p>

      {/* NGO Rescue Cards */}
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Available NGO Rescue Cards</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        {ngoListings.map((item) => {
          const isClaimed = claimed.find((c) => c.id === item.id);
          return (
            <div
              key={item.id}
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: '22px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                border: '1px solid #f0f0eb',
                maxWidth: 500,
              }}
            >
              {/* Temp badge */}
              {item.temp && (
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  background: '#e8f5e9',
                  color: 'var(--green-dark)',
                  fontSize: 11,
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: 20,
                  marginBottom: 12,
                  border: '1px solid #c8e6c9',
                }}>
                  ✓ Verified chilled {item.temp}
                </span>
              )}

              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{item.name}</div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 12 }}>
                {item.store} ({item.distance} away) · {item.distance}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <span style={{ fontWeight: 700, fontSize: 15 }}>{item.left} packs left</span>
                <span style={{
                  background: '#c8f5c9',
                  color: '#1a5c20',
                  fontSize: 11,
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: 20,
                }}>
                  FREE PICKUP
                </span>
              </div>

              <button
                onClick={() => handleClaim(item)}
                style={{
                  background: isClaimed ? '#e8f5e9' : 'var(--green-dark)',
                  color: isClaimed ? 'var(--green-dark)' : '#fff',
                  border: 'none',
                  borderRadius: 10,
                  padding: '11px 22px',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {isClaimed ? '✓ Claimed' : 'Claim Pickup'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Active Pickups & Manifests */}
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Active Pickups & Manifests</h2>
      {claimed.length === 0 ? (
        <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>Claim a verified batch to see pickup details here.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {claimed.map((item) => (
            <div
              key={item.id}
              style={{
                background: '#fff',
                borderRadius: 10,
                padding: '16px 20px',
                border: '1px solid #e8f5e9',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: 500,
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{item.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{item.store} · {item.distance}</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--green-dark)',
                  background: 'var(--green-light)',
                  border: 'none',
                  borderRadius: 8,
                  padding: '6px 12px',
                  cursor: 'pointer',
                }}>
                  View PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
