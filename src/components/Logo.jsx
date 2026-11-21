import React from 'react';

export default function Logo({ size = 24, withText = true, dark = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{
        width: size,
        height: size,
        background: dark ? '#fff' : 'var(--green-dark)',
        borderRadius: size * 0.25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3C9 3 6.5 5.5 6.5 8.5C6.5 11.5 9 14 12 14C15 14 17.5 11.5 17.5 8.5C17.5 5.5 15 3 12 3Z"
            fill={dark ? 'var(--green-dark)' : '#6fcf7a'}
          />
          <path
            d="M12 14C12 14 8 16 8 20H16C16 16 12 14 12 14Z"
            fill={dark ? 'var(--green-dark)' : '#a8e6b0'}
          />
        </svg>
      </div>
      {withText && (
        <span style={{
          fontWeight: 700,
          fontSize: size * 0.75,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          ZeroSpoil
        </span>
      )}
    </div>
  );
}
