import React, { useState } from 'react';
import Logo from '../components/Logo';

const roles = ['Shop Owner', 'NGO', 'Shopper', 'Admin'];

const demos = [
  { label: 'Demo: Store', role: 'Shop Owner' },
  { label: 'Demo: Bakery', role: 'Shop Owner' },
  { label: 'Demo: NGO', role: 'NGO' },
  { label: 'Demo: Shopper', role: 'Shopper' },
];

export default function LoginPage({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState('Shop Owner');
  const [credential, setCredential] = useState('');

  const handleLogin = (role) => {
    onLogin(role || selectedRole);
  };

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
        padding: '44px 40px',
        width: '100%',
        maxWidth: 440,
        boxShadow: '0 8px 32px rgba(15,45,26,0.13)',
        border: '1.5px solid var(--border)',
      }}>
        {/* Logo */}
        <div style={{ marginBottom: 6 }}>
          <Logo size={34} />
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14, fontWeight: 500, marginBottom: 32 }}>
          Save food. Share locally.
        </p>

        {/* Role tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              style={{
                padding: '8px 17px',
                borderRadius: 24,
                fontSize: 13,
                fontWeight: 600,
                border: '2px solid',
                borderColor: selectedRole === role ? 'var(--green-dark)' : 'var(--border)',
                background: selectedRole === role ? 'var(--green-dark)' : '#fff',
                color: selectedRole === role ? '#fff' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Input */}
        <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 7 }}>
          Email / Phone
        </label>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 14px',
            border: '2px solid var(--border)',
            borderRadius: 11,
            fontSize: 14,
            marginBottom: 18,
            color: 'var(--text-primary)',
            background: '#fff',
            transition: 'border-color 0.15s',
          }}
          onFocus={e => e.target.style.borderColor = 'var(--green-accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
          placeholder=""
        />

        {/* Login button */}
        <button
          onClick={() => handleLogin()}
          style={{
            width: '100%',
            padding: '14px',
            background: 'var(--green-dark)',
            color: '#fff',
            borderRadius: 50,
            fontSize: 15,
            fontWeight: 700,
            marginBottom: 20,
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.01em',
            boxShadow: '0 4px 14px rgba(15,45,26,0.3)',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => e.target.style.opacity = '0.88'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >
          Log In
        </button>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em' }}>QUICK DEMO</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        {/* Demo shortcuts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {demos.map((d) => (
            <button
              key={d.label}
              onClick={() => handleLogin(d.role)}
              style={{
                padding: '11px',
                background: 'var(--green-light)',
                border: '1.5px solid var(--green-pill)',
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--green-dark)',
                cursor: 'pointer',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--green-pill)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--green-light)'}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
