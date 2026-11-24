import React from 'react';

/**
 * ZeroSpoil logo mark — a rounded square badge with a bold sprouting-leaf icon.
 * The sprout has two leaves curling outward from a single stem, suggesting
 * growth, freshness, and rescue — distinct from a generic leaf blob.
 *
 * Props:
 *   size      — overall px size of the badge (default 28)
 *   withText  — render the wordmark beside the badge (default true)
 *   onDark    — invert colors for use on dark backgrounds (default false)
 */
export default function Logo({ size = 28, withText = true, onDark = false }) {
  const badgeBg   = onDark ? '#ffffff' : 'var(--green-dark)';
  const stemColor = onDark ? 'var(--green-dark)' : '#ffffff';
  const leafL     = onDark ? '#1e5c30' : '#4ade80';   // bright left leaf
  const leafR     = onDark ? '#25a244' : '#86efac';   // lighter right leaf
  const textColor = onDark ? '#ffffff' : 'var(--text-primary)';

  const r = size * 0.22; // corner radius for badge

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
      {/* Badge */}
      <div style={{
        width: size,
        height: size,
        background: badgeBg,
        borderRadius: r,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: onDark ? 'none' : '0 2px 8px rgba(15,45,26,0.25)',
      }}>
        {/*
          Sprout icon:
          - A vertical stem rising from the bottom center
          - Left leaf curling out to the left at mid-height
          - Right leaf curling out to the right, slightly higher
          Drawn in a 20×20 viewport, scaled to fit the badge.
        */}
        <svg
          width={size * 0.58}
          height={size * 0.58}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left leaf — curves from stem base leftward and up */}
          <path
            d="M10 13 C10 13 4 12 4 7 C4 7 8 7 10 10"
            fill={leafL}
          />
          {/* Right leaf — curves from stem midpoint rightward and up */}
          <path
            d="M10 10 C10 10 16 9 16 4 C16 4 11 4 10 8"
            fill={leafR}
          />
          {/* Stem — bold vertical line from bottom */}
          <path
            d="M10 17 Q10 14 10 10 Q10 8 10 5"
            stroke={stemColor}
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Wordmark */}
      {withText && (
        <span style={{
          fontWeight: 800,
          fontSize: size * 0.72,
          color: textColor,
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}>
          Zero<span style={{ color: onDark ? '#86efac' : 'var(--green-accent)' }}>Spoil</span>
        </span>
      )}
    </div>
  );
}
