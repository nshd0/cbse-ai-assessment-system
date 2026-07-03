import React, { useState } from 'react';

const mockReports = [
  { id: 1, student: 'Aarav Sharma', class: 'Class 9', term: 'Term 1', score: 82, grade: 'A', topics: { 'Python for AI': 90, 'Data Analysis': 78, 'ML Algorithms': 80 } },
  { id: 2, student: 'Priya Nair', class: 'Class 9', term: 'Term 1', score: 75, grade: 'B+', topics: { 'Python for AI': 72, 'Data Analysis': 80, 'ML Algorithms': 73 } },
  { id: 3, student: 'Rohan Gupta', class: 'Class 10', term: 'Term 1', score: 88, grade: 'A+', topics: { 'Deep Learning': 92, 'Computer Vision': 88, 'NLP': 85 } },
  { id: 4, student: 'Sneha Patel', class: 'Class 7', term: 'Term 2', score: 68, grade: 'B', topics: { 'How Machines Learn': 70, 'AI Ethics': 65, 'Pattern Recognition': 68 } },
];

function gradeColor(grade) {
  if (grade.startsWith('A')) return '#10b981';
  if (grade.startsWith('B')) return '#3b82f6';
  return '#f59e0b';
}

export default function Reports() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Report Cards</h1>
      <p style={{ color: '#555', marginBottom: '1.5rem' }}>View and export student performance reports.</p>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
          <thead>
            <tr style={{ background: '#f1f5f9' }}>
              <th style={th}>#</th>
              <th style={th}>Student</th>
              <th style={th}>Class</th>
              <th style={th}>Term</th>
              <th style={th}>Score</th>
              <th style={th}>Grade</th>
              <th style={th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {mockReports.map(r => (
              <tr key={r.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={td}>{r.id}</td>
                <td style={td}>{r.student}</td>
                <td style={td}>{r.class}</td>
                <td style={td}>{r.term}</td>
                <td style={td}>{r.score}%</td>
                <td style={td}><span style={{ background: gradeColor(r.grade), color: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>{r.grade}</span></td>
                <td style={td}><button onClick={() => setSelected(r)} style={{ padding: '0.3rem 0.8rem', borderRadius: '4px', background: '#3b82f6', color: 'white', border: 'none', cursor: 'pointer' }}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <div style={{ marginTop: '2rem', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#f8fafc' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ margin: 0 }}>{selected.student} — {selected.class} {selected.term}</h2>
            <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>×</button>
          </div>
          <p><strong>Overall Score:</strong> {selected.score}% <span style={{ background: gradeColor(selected.grade), color: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px', marginLeft: '0.5rem' }}>{selected.grade}</span></p>
          <h3>Topic-wise Breakdown</h3>
          {Object.entries(selected.topics).map(([topic, score]) => (
            <div key={topic} style={{ marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                <span>{topic}</span><span>{score}%</span>
              </div>
              <div style={{ background: '#e2e8f0', borderRadius: '4px', height: '8px' }}>
                <div style={{ width: `${score}%`, background: score >= 80 ? '#10b981' : score >= 60 ? '#3b82f6' : '#ef4444', height: '8px', borderRadius: '4px' }} />
              </div>
            </div>
          ))}
          <p style={{ marginTop: '1rem', color: '#888', fontSize: '0.8rem' }}>PDF & Excel export coming soon. Connect your backend to enable full report generation.</p>
        </div>
      )}
    </div>
  );
}

const th = { padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 };
const td = { padding: '0.75rem 1rem' };
