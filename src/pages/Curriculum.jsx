import React, { useState } from 'react';

const curriculum = {
  'Class 6': [
    { topic: 'Introduction to AI', type: 'Awareness', term: 'Term 1' },
    { topic: 'AI in Daily Life', type: 'Activity', term: 'Term 1' },
    { topic: 'Data and Information', type: 'Awareness', term: 'Term 2' },
    { topic: 'Simple ML Concepts', type: 'Activity', term: 'Term 2' },
  ],
  'Class 7': [
    { topic: 'How Machines Learn', type: 'Awareness', term: 'Term 1' },
    { topic: 'AI Ethics Basics', type: 'Activity', term: 'Term 1' },
    { topic: 'Data Collection', type: 'Awareness', term: 'Term 2' },
    { topic: 'Pattern Recognition', type: 'Activity', term: 'Term 2' },
  ],
  'Class 8': [
    { topic: 'Supervised Learning', type: 'Awareness', term: 'Term 1' },
    { topic: 'Unsupervised Learning', type: 'Activity', term: 'Term 1' },
    { topic: 'Neural Networks Intro', type: 'Awareness', term: 'Term 2' },
    { topic: 'AI Project (Mini)', type: 'Project', term: 'Term 2' },
  ],
  'Class 9': [
    { topic: 'Python for AI', type: 'Theory + Practical', term: 'Term 1' },
    { topic: 'Data Analysis with Pandas', type: 'Practical', term: 'Term 1' },
    { topic: 'ML Algorithms', type: 'Theory', term: 'Term 2' },
    { topic: 'AI Project (Intermediate)', type: 'Project', term: 'Term 2' },
  ],
  'Class 10': [
    { topic: 'Deep Learning Basics', type: 'Theory + Practical', term: 'Term 1' },
    { topic: 'Computer Vision', type: 'Practical', term: 'Term 1' },
    { topic: 'NLP Introduction', type: 'Theory', term: 'Term 2' },
    { topic: 'Capstone AI Project', type: 'Project', term: 'Term 2' },
  ],
};

export default function Curriculum() {
  const [selectedClass, setSelectedClass] = useState('Class 6');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>CBSE AI Curriculum</h1>
      <p style={{ color: '#555', marginBottom: '1.5rem' }}>Grade-wise topic mapping aligned with NEP 2020 and CBSE CT & AI framework.</p>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {Object.keys(curriculum).map(cls => (
          <button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              border: '1px solid #3b82f6',
              background: selectedClass === cls ? '#3b82f6' : 'white',
              color: selectedClass === cls ? 'white' : '#3b82f6',
              cursor: 'pointer',
            }}
          >{cls}</button>
        ))}
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f1f5f9' }}>
            <th style={th}>Topic</th>
            <th style={th}>Assessment Type</th>
            <th style={th}>Term</th>
          </tr>
        </thead>
        <tbody>
          {curriculum[selectedClass].map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={td}>{row.topic}</td>
              <td style={td}>{row.type}</td>
              <td style={td}>{row.term}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = { padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 };
const td = { padding: '0.75rem 1rem' };
