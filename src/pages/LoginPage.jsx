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
      background: '#f0f0ea',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 20,
        padding: '40px 36px',
        width: '100%',
        maxWidth: 440,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <div style={{
            width: 36,
            height: 36,
            background: 'var(--green-dark)',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
              <path d="M12 3C9 3 6.5 5.5 6.5 8.5C6.5 11.5 9 14 12 14C15 14 17.5 11.5 17.5 8.5C17.5 5.5 15 3 12 3Z" fill="#6fcf7a" />
              <path d="M12 14C12 14 8 16 8 20H16C16 16 12 14 12 14Z" fill="#a8e6b0" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em' }}>ZeroSpoil</span>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 28 }}>
          Save food. Share locally.
        </p>

        {/* Role tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              style={{
                padding: '7px 16px',
                borderRadius: 24,
                fontSize: 13,
                fontWeight: 500,
                border: '1.5px solid',
                borderColor: selectedRole === role ? 'var(--green-dark)' : 'var(--border)',
                background: selectedRole === role ? 'var(--green-dark)' : '#fff',
                color: selectedRole === role ? '#fff' : 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Input */}
        <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>
          Email / Phone
        </label>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          style={{
            width: '100%',
            padding: '11px 14px',
            border: '1.5px solid var(--border)',
            borderRadius: 10,
            fontSize: 14,
            marginBottom: 16,
            color: 'var(--text-primary)',
            background: '#fff',
          }}
          placeholder=""
        />

        {/* Login button */}
        <button
          onClick={() => handleLogin()}
          style={{
            width: '100%',
            padding: '13px',
            background: 'var(--green-dark)',
            color: '#fff',
            borderRadius: 50,
            fontSize: 15,
            fontWeight: 600,
            marginBottom: 20,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Log In
        </button>

        {/* Demo shortcuts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {demos.map((d) => (
            <button
              key={d.label}
              onClick={() => handleLogin(d.role)}
              style={{
                padding: '10px',
                background: 'var(--green-light)',
                border: 'none',
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--green-dark)',
                cursor: 'pointer',
              }}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
