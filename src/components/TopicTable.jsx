import React from 'react'

const badge = (v) => ({ background: v ? '#fee2e2' : '#dcfce7', color: v ? '#991b1b' : '#166534', padding: '2px 10px', borderRadius: '12px', fontSize: '12px' })

export default function TopicTable({ students }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
        <thead>
          <tr style={{ background: '#f1f5f9' }}>
            {['Name', 'Grade', 'Score', 'Weak Area', 'Remedial'].map(h => (
              <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: '#475569', fontWeight: 600 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '10px 14px', fontWeight: 500 }}>{s.name}</td>
              <td style={{ padding: '10px 14px' }}>{s.grade}</td>
              <td style={{ padding: '10px 14px' }}>
                <span style={{ background: s.score >= 75 ? '#dcfce7' : s.score >= 50 ? '#fef9c3' : '#fee2e2', color: s.score >= 75 ? '#166534' : s.score >= 50 ? '#854d0e' : '#991b1b', padding: '2px 10px', borderRadius: '12px' }}>{s.score}%</span>
              </td>
              <td style={{ padding: '10px 14px', color: '#64748b' }}>{s.weakArea}</td>
              <td style={{ padding: '10px 14px' }}><span style={badge(s.remedial)}>{s.remedial ? 'Yes' : 'No'}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
