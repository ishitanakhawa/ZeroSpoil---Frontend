import React from 'react';
import Logo from './Logo';

const roleViews = ['Customer', 'Shop Owner', 'NGO', 'Admin'];
const subTabs = ['Agent & Safety Rails', 'WhatsApp Vendor Studio', 'Community & NGO Rescue Feed'];

export default function DashboardNav({ activeRole, setActiveRole, activeTab, setActiveTab, onReset, onLogout }) {
  return (
    <div style={{ background: '#fff', borderBottom: '2px solid var(--border)', position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Top bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 24px',
      }}>
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Logo size={24} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)' }}>+ Panvel</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green-accent)' }} />
              <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Live Sync</span>
            </div>
          </div>
        </div>

        {/* Center — role switcher */}
        <div style={{ display: 'flex', gap: 4 }}>
          {roleViews.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRole(r)}
              style={{
                padding: '7px 16px',
                borderRadius: 50,
                fontSize: 13,
                fontWeight: 500,
                border: '2px solid',
                borderColor: activeRole === r ? 'var(--green-dark)' : 'transparent',
                background: activeRole === r ? 'var(--green-dark)' : 'transparent',
                color: activeRole === r ? '#fff' : 'var(--text-secondary)',
                fontWeight: activeRole === r ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={onReset}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: 13,
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            Reset
          </button>
          <button
            style={{
              background: 'var(--green-dark)',
              color: '#fff',
              border: 'none',
              borderRadius: 50,
              padding: '8px 16px',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Run POS Audit
          </button>
          <button
            onClick={onLogout}
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '7px 10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              color: 'var(--text-secondary)',
            }}
            title="Logout"
          >
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sub-tabs (only for Admin or when multiple tabs relevant) */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 4,
        padding: '8px 24px 12px',
      }}>
        {subTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '8px 20px',
              borderRadius: 50,
              fontSize: 13,
              fontWeight: 500,
              border: '2px solid',
              borderColor: activeTab === tab ? 'var(--green-dark)' : 'var(--border)',
              background: activeTab === tab ? 'var(--green-dark)' : 'transparent',
              color: activeTab === tab ? '#fff' : 'var(--text-secondary)',
              fontWeight: activeTab === tab ? 700 : 500,
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
