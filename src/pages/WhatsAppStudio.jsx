import React, { useState } from 'react';
import { stats, whatsappPresets } from '../data/mockData';

export default function WhatsAppStudio() {
  const [vendorMessage, setVendorMessage] = useState('');
  const [extractionResult, setExtractionResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activePreset, setActivePreset] = useState(null);

  const mockExtract = (msg) => {
    if (msg.toLowerCase().includes('gravy') || msg.toLowerCase().includes('5 hour') || msg.toLowerCase().includes('5-hr')) {
      return {
        status: 'BLOCKED',
        reason: 'FSSAI 2-Hr Danger-Zone Hard-Lock triggered',
        item: 'Paneer gravy',
        safety_verdict: 'UNSAFE — cooked food unchilled > 2 hours',
      };
    }
    if (msg.toLowerCase().includes('mango') || msg.toLowerCase().includes('banana')) {
      return {
        status: 'SAFE',
        sku: 'Ripe Alphonso Mangoes & Bananas',
        quantity: '12 kg',
        price: '₹60/kg',
        discount: '50%',
        pickup_deadline: 'Before 10 PM',
        safety_verdict: 'SAFE — ambient produce, no cold chain required',
      };
    }
    if (msg.toLowerCase().includes('sourdough') || msg.toLowerCase().includes('bread') || msg.toLowerCase().includes('bakery')) {
      return {
        status: 'SAFE',
        sku: 'Sourdough Bread & Masala Puffs',
        quantity: '15 loaves + 20 puffs',
        price: '₹80',
        discount: '50%',
        pickup_deadline: 'Before 10 PM',
        safety_verdict: 'SAFE — baked goods within window',
      };
    }
    return { status: 'awaiting_vendor_message' };
  };

  const handleSend = () => {
    if (!vendorMessage.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setExtractionResult(mockExtract(vendorMessage));
      setLoading(false);
    }, 1200);
  };

  const handlePreset = (preset) => {
    setActivePreset(preset.title);
    setVendorMessage(preset.desc);
    setExtractionResult(null);
  };

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

      {/* Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 6 }}>
            Multimodal Ingestion
          </p>
          <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em' }}>
            Local Bakery, Restaurant & Vendor WhatsApp Studio
          </h1>
        </div>
        <span style={{ fontSize: 13, color: 'var(--text-secondary)', alignSelf: 'flex-end' }}>
          One message in. Safe, structured inventory out.
        </span>
      </div>

      {/* Presets */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 28 }}>
        {whatsappPresets.map((p) => (
          <div
            key={p.title}
            onClick={() => handlePreset(p)}
            style={{
              background: activePreset === p.title ? 'var(--green-light)' : '#fff',
              border: `1.5px solid ${activePreset === p.title ? '#b8dac0' : '#f0f0eb'}`,
              borderRadius: 12,
              padding: '18px',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: 6 }}>
              {p.label}
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{p.title}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{p.desc}</div>
            {p.danger && (
              <span style={{
                display: 'inline-block',
                marginTop: 10,
                fontSize: 10,
                fontWeight: 700,
                background: '#fce4ec',
                color: '#c62828',
                padding: '3px 8px',
                borderRadius: 4,
              }}>
                {p.danger}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Bottom two columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* WhatsApp bot simulator */}
        <div style={{
          background: 'var(--green-dark)',
          borderRadius: 14,
          padding: '22px',
          color: '#fff',
        }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>WhatsApp Business Bot Simulator</div>
          <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 20 }}>+91.98200–ZEROSPOIL</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
            <label style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1.5px dashed rgba(255,255,255,0.3)',
              borderRadius: 10,
              padding: '20px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              fontSize: 13,
            }}>
              <input type="file" accept="image/*" style={{ display: 'none' }} />
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              Food photo · Accepts JPG/PNG
            </label>
            <button style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1.5px dashed rgba(255,255,255,0.3)',
              borderRadius: 10,
              padding: '20px 12px',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              fontSize: 13,
            }}>
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
              </svg>
              Upload voice note
            </button>
          </div>

          <label style={{ fontSize: 12, opacity: 0.7, display: 'block', marginBottom: 6 }}>Vendor message</label>
          <textarea
            value={vendorMessage}
            onChange={(e) => setVendorMessage(e.target.value)}
            placeholder="Describe your surplus food, quantity, temperature and offer..."
            rows={5}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: 10,
              border: '1.5px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              fontSize: 13,
              resize: 'vertical',
              marginBottom: 16,
            }}
          />

          <button
            onClick={handleSend}
            style={{
              background: '#fff',
              color: 'var(--green-dark)',
              border: 'none',
              borderRadius: 50,
              padding: '12px 24px',
              fontSize: 14,
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Send to ZeroSpoil Bot
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>

        {/* Extraction preview */}
        <div style={{
          background: '#fff',
          borderRadius: 14,
          padding: '22px',
          border: '1px solid #f0f0eb',
        }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Live Multimodal Extraction Preview</h3>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>
            Structured SKU extraction + deterministic safety verdict.
          </p>

          <div style={{
            background: '#f8f8f4',
            borderRadius: 10,
            padding: '16px',
            fontFamily: 'monospace',
            fontSize: 13,
            lineHeight: 1.7,
            marginBottom: 16,
            minHeight: 120,
            color: '#1a1a1a',
          }}>
            {loading ? (
              <span style={{ color: 'var(--text-muted)' }}>Extracting…</span>
            ) : extractionResult ? (
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {JSON.stringify(extractionResult, null, 2)}
              </pre>
            ) : (
              <span style={{ color: 'var(--text-muted)' }}>{'{ "status": "awaiting_vendor_message" }'}</span>
            )}
          </div>

          <div style={{
            background: '#f8f8f4',
            borderRadius: 10,
            padding: '12px 16px',
            fontSize: 12,
            color: 'var(--text-secondary)',
          }}>
            {extractionResult
              ? extractionResult.status === 'BLOCKED'
                ? '⚠️ Safety rail triggered. Item blocked from listing.'
                : extractionResult.status === 'SAFE'
                ? '✓ Safety check passed. Ready to publish.'
                : 'Select a preset or send a message to run the safety rail check.'
              : 'Select a preset or send a message to run the safety rail check.'}
          </div>
        </div>
      </div>
    </div>
  );
}
