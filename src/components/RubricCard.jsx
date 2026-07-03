import React from 'react'

const levelColors = {
  Excellent: { bg: '#dcfce7', color: '#166534' },
  Good: { bg: '#dbeafe', color: '#1e40af' },
  Developing: { bg: '#fef9c3', color: '#854d0e' },
  'Needs Support': { bg: '#fee2e2', color: '#991b1b' },
}

export default function RubricCard({ criterion, level, description }) {
  const style = levelColors[level] || { bg: '#f1f5f9', color: '#334155' }
  return (
    <div style={{ background: '#fff', borderRadius: '10px', padding: '16px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', marginBottom: '12px', borderLeft: `4px solid ${style.color}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
        <span style={{ fontWeight: 600, color: '#1e293b', fontSize: '14px' }}>{criterion}</span>
        <span style={{ background: style.bg, color: style.color, padding: '2px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 600 }}>{level}</span>
      </div>
      {description && <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>{description}</p>}
    </div>
  )
}
