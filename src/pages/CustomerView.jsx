import React, { useState } from 'react';
import { listings } from '../data/mockData';

const filters = ['All Nearby', '50% Off Deals', 'Bakery & Bread', 'Fruits & Veggies', 'Dairy'];

function FoodCard({ item, onClaim, claimed }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 14,
      padding: '20px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      border: '1px solid #f0f0eb',
    }}>
      {item.discount && (
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: '#e8f5e9',
          color: '#2e7d32',
          fontSize: 11,
          fontWeight: 700,
          padding: '3px 8px',
          borderRadius: 6,
          width: 'fit-content',
        }}>
          {item.discount}
        </span>
      )}
      <div>
        <div style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.3, marginBottom: 4 }}>{item.name}</div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 500 }}>{item.store}</div>
        <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>↑ {item.distance}</span>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>⏱ {item.time}</span>
        </div>
      </div>
      {item.type === 'paid' && (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'line-through' }}>
            ₹{item.originalPrice}{item.unit}
          </span>
          <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)' }}>
            ₹{item.salePrice}{item.unit}
          </span>
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
        <span style={{ fontSize: 12, color: 'var(--text-secondary)', background: '#f5f5ef', padding: '3px 8px', borderRadius: 6 }}>
          {item.left} left
        </span>
        <button
          onClick={() => onClaim(item)}
          style={{
            background: claimed ? '#e8f5e9' : 'var(--green-dark)',
            color: claimed ? 'var(--green-dark)' : '#fff',
            border: 'none',
            borderRadius: 50,
            padding: '9px 18px',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          {claimed ? '✓ Claimed' : 'Claim Deal'}
        </button>
      </div>
    </div>
  );
}

export default function CustomerView() {
  const [activeFilter, setActiveFilter] = useState('All Nearby');
  const [claimedIds, setClaimedIds] = useState([]);

  const paidListings = listings.filter((l) => l.type === 'paid');

  const handleClaim = (item) => {
    if (!claimedIds.includes(item.id)) {
      setClaimedIds([...claimedIds, item.id]);
    }
  };

  const filteredListings = activeFilter === 'All Nearby'
    ? paidListings
    : paidListings.filter((l) => l.category === activeFilter);

  const claimed = listings.filter((l) => claimedIds.includes(l.id));

  return (
    <div style={{ padding: '32px 32px', maxWidth: 1100, margin: '0 auto' }}>
      {/* Header */}
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 6 }}>
        Panvel Community Feed
      </p>
      <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>
        Good food, right around the corner.
      </h1>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 28 }}>
        Fresh finds from your neighborhood, ready for pickup today.
      </p>

      {/* Filter pills */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              padding: '8px 16px',
              borderRadius: 50,
              fontSize: 13,
              fontWeight: 500,
              border: '1.5px solid',
              borderColor: activeFilter === f ? 'transparent' : 'var(--border)',
              background: activeFilter === f ? 'var(--green-dark)' : '#fff',
              color: activeFilter === f ? '#fff' : 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 40 }}>
        {filteredListings.map((item) => (
          <FoodCard
            key={item.id}
            item={item}
            onClaim={handleClaim}
            claimed={claimedIds.includes(item.id)}
          />
        ))}
      </div>

      {/* Claimed bag */}
      <div>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>My Claimed Bag</h2>
        {claimed.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>Your claimed deals will appear here.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 480 }}>
            {claimed.map((item) => (
              <div
                key={item.id}
                style={{
                  background: '#fff',
                  borderRadius: 10,
                  padding: '14px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  border: '1px solid #e8f5e9',
                }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{item.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{item.store}</div>
                </div>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--green-dark)' }}>
                  ₹{item.salePrice}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
