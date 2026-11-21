import React, { useState } from 'react';
import { stats, safetyBlocks, hitlQueue, rollbackLog } from '../data/mockData';

function StatusBadge({ status }) {
  const colors = {
    EXECUTED: { bg: '#e8f5e9', color: '#2e7d32' },
    PAUSED_HTIL: { bg: '#fff3e0', color: '#e65100' },
    BLOCKED_REROUTED: { bg: '#fce4ec', color: '#c62828' },
    'PAUSED_HTIL': { bg: '#fff3e0', color: '#e65100' },
  };
  const c = colors[status] || { bg: '#f5f5f5', color: '#666' };
  return (
    <span style={{
      background: c.bg,
      color: c.color,
      fontSize: 10,
      fontWeight: 700,
      padding: '3px 8px',
      borderRadius: 6,
      letterSpacing: '0.04em',
    }}>
      {status}
    </span>
  );
}

export default function AdminAgentView({ onReset }) {
  const [hitlItems, setHitlItems] = useState(hitlQueue);
  const [approvedItems, setApprovedItems] = useState([]);

  const handleApprove = (name) => {
    setApprovedItems([...approvedItems, name]);
    setHitlItems(hitlItems.filter((h) => h.name !== name));
  };

  const handleSetFloor = (name) => {
    setHitlItems(hitlItems.filter((h) => h.name !== name));
  };

  return (
    <div style={{ padding: '32px', maxWidth: 1100, margin: '0 auto' }}>
      {/* Header */}
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 6 }}>
        Autonomous Command Center
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em' }}>Network overview</h1>
        <button
          onClick={onReset}
          style={{
            background: 'var(--green-dark)',
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            padding: '10px 20px',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Reset Demo
        </button>
      </div>

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
          { label: 'Time Saved', value: stats.timeSaved },
          { label: 'Cash Recovered ₹', value: stats.cashRecovered },
          { label: 'Meals Rescued', value: stats.mealsRescued },
          { label: 'CO₂e Diverted kg', value: stats.co2Diverted },
        ].map((s) => (
          <div key={s.label}>
            <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6, fontWeight: 500 }}>{s.label}</div>
            <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em' }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Two column */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* Left col */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Safety Rail Blocks */}
          <div style={{
            background: '#fff',
            borderRadius: 14,
            padding: '22px',
            border: '1px solid #f0f0eb',
          }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Safety Rail Blocks</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {safetyBlocks.map((b, i) => (
                <div
                  key={i}
                  style={{
                    background: '#fff5f5',
                    border: '1px solid #ffd5d5',
                    borderRadius: 10,
                    padding: '14px 16px',
                  }}
                >
                  <span style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#c62828',
                    background: '#fce4e4',
                    padding: '2px 8px',
                    borderRadius: 4,
                    display: 'inline-block',
                    marginBottom: 6,
                  }}>
                    {b.type}
                  </span>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#c62828', marginBottom: 4 }}>{b.name}</div>
                  <div style={{ fontSize: 12, color: '#777' }}>{b.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* HITL Queue */}
          <div style={{
            background: '#fff',
            borderRadius: 14,
            padding: '22px',
            border: '1px solid #f0f0eb',
          }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>HITL Approval Queue</h2>
            {hitlItems.length === 0 ? (
              <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>All items approved.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {hitlItems.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#fffbf0',
                      border: '1px solid #f0dfa0',
                      borderRadius: 10,
                      padding: '14px 16px',
                    }}
                  >
                    <span style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#a06000',
                      background: '#fff0c0',
                      padding: '2px 8px',
                      borderRadius: 4,
                      display: 'inline-block',
                      marginBottom: 6,
                    }}>
                      PAUSED_HITL
                    </span>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#8a5c00', marginBottom: 4 }}>{item.name}</div>
                    <div style={{ fontSize: 12, color: '#a07030', marginBottom: 14 }}>{item.desc}</div>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <button
                        onClick={() => handleApprove(item.name)}
                        style={{
                          background: 'var(--green-dark)',
                          color: '#fff',
                          border: 'none',
                          borderRadius: 8,
                          padding: '9px 18px',
                          fontSize: 13,
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleSetFloor(item.name)}
                        style={{
                          background: '#fff',
                          color: 'var(--text-primary)',
                          border: '1.5px solid var(--border)',
                          borderRadius: 8,
                          padding: '9px 18px',
                          fontSize: 13,
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        Set Cost Floor
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right col — Rollback log */}
        <div style={{
          background: '#fff',
          borderRadius: 14,
          padding: '22px',
          border: '1px solid #f0f0eb',
          height: 'fit-content',
        }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Execution & Rollback Log</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {rollbackLog.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '14px 0',
                  borderBottom: i < rollbackLog.length - 1 ? '1px solid #f5f5ef' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, flex: 1, marginRight: 12 }}>{item.name}</div>
                  <StatusBadge status={item.status} />
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>{item.code}</div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--green-dark)',
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: 0,
                  }}>
                    View PDF
                  </button>
                  <button style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#c62828',
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: 0,
                  }}>
                    1-Click Rollback
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
