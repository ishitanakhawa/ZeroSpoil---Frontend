import React, { useState } from 'react';
import { listings, stats } from '../data/mockData';

export default function CommunityRescueFeed() {
  const [claimedIds, setClaimedIds] = useState([]);

  const handleClaim = (item) => {
    if (!claimedIds.includes(item.id)) {
      setClaimedIds([...claimedIds, item.id]);
    }
  };

  const paidListings = listings.filter((l) => l.type === 'paid');
  const ngoListings = listings.filter((l) => l.type === 'ngo');

  return (
    <div style={{ padding: '32px', maxWidth: 1100, margin: '0 auto' }}>
      {/* Stats strip */}
      <div style={{
        background: 'var(--green-dark)',
        borderRadius: 16,
        padding: '24px 32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
        marginBottom: 32,
        color: '#fff',
      }}>
        {[
          { label: 'Manual Minutes Saved', value: stats.timeSaved },
          { label: 'Merchant Cash Recovered', value: stats.cashRecovered },
          { label: 'Meals Rescued', value: stats.mealsRescued },
          { label: 'CO₂e Diverted', value: stats.co2Diverted + ' kg' },
        ].map((s) => (
          <div key={s.label}>
            <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6, fontWeight: 500 }}>{s.label}</div>
            <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em' }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Header */}
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 6 }}>
        Panvel / Hyperlocal Network
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em' }}>
          Community & NGO Rescue App
        </h1>
        <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
          Live 50%-Off Clearance Deals & free NGO rescue claims.
        </span>
      </div>

      {/* Grid of all items */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
        {/* Paid listings */}
        {paidListings.map((item) => {
          const isClaimed = claimedIds.includes(item.id);
          return (
            <div
              key={item.id}
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: '20px',
                border: '1px solid #f0f0eb',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>
                {item.store} ({item.distance} away)
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{item.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  ₹{item.originalPrice}{item.unit}
                </span>
                <span style={{ fontSize: 20, fontWeight: 800 }}>
                  ₹{item.salePrice}{item.unit} ({item.discount.replace('% OFF', '% OFF')})
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{item.left} left</span>
                <button
                  onClick={() => handleClaim(item)}
                  style={{
                    background: isClaimed ? '#e8f5e9' : 'var(--green-dark)',
                    color: isClaimed ? 'var(--green-dark)' : '#fff',
                    border: 'none',
                    borderRadius: 50,
                    padding: '8px 16px',
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {isClaimed ? '✓ Claimed' : 'Claim Deal (50% Off)'}
                </button>
              </div>
            </div>
          );
        })}

        {/* NGO listing */}
        {ngoListings.map((item) => {
          const isClaimed = claimedIds.includes(item.id);
          return (
            <div
              key={item.id}
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: '20px',
                border: '1px solid #f0f0eb',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>
                {item.store} ({item.distance} away)
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{item.name}</div>
              <span style={{
                display: 'inline-block',
                background: '#c8f5c9',
                color: '#1a5c20',
                fontSize: 11,
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: 20,
                marginBottom: 12,
              }}>
                FREE NGO RESCUE
              </span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{item.left} packs left</span>
                <button
                  onClick={() => handleClaim(item)}
                  style={{
                    background: isClaimed ? '#e8f5e9' : 'var(--green-dark)',
                    color: isClaimed ? 'var(--green-dark)' : '#fff',
                    border: 'none',
                    borderRadius: 50,
                    padding: '8px 16px',
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {isClaimed ? '✓ Claimed' : 'Claim NGO Pickup'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
