import React, { useState } from 'react';

export default function Settings() {
  const [schoolName, setSchoolName] = useState('Mount Columbus School');
  const [board, setBoard] = useState('CBSE');
  const [academicYear, setAcademicYear] = useState('2024-25');
  const [savedMsg, setSavedMsg] = useState('');

  const handleSave = () => {
    setSavedMsg('Settings saved successfully!');
    setTimeout(() => setSavedMsg(''), 3000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px' }}>
      <h1>Settings</h1>
      <p style={{ color: '#555', marginBottom: '1.5rem' }}>Configure your school and system preferences.</p>

      <section style={section}>
        <h2 style={sectionTitle}>School Configuration</h2>
        <div style={fieldGroup}>
          <label style={label}>School Name</label>
          <input style={input} value={schoolName} onChange={e => setSchoolName(e.target.value)} />
        </div>
        <div style={fieldGroup}>
          <label style={label}>Board</label>
          <select style={input} value={board} onChange={e => setBoard(e.target.value)}>
            <option>CBSE</option>
            <option>ICSE</option>
            <option>State Board</option>
          </select>
        </div>
        <div style={fieldGroup}>
          <label style={label}>Academic Year</label>
          <input style={input} value={academicYear} onChange={e => setAcademicYear(e.target.value)} />
        </div>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>Assessment Settings</h2>
        <div style={fieldGroup}>
          <label style={label}>Classes Covered</label>
          <input style={input} value="6, 7, 8, 9, 10" readOnly />
        </div>
        <div style={fieldGroup}>
          <label style={label}>Default Passing Score (%)</label>
          <input style={input} type="number" defaultValue={33} min={0} max={100} />
        </div>
        <div style={fieldGroup}>
          <label style={label}>Report Export Format</label>
          <select style={input}>
            <option>PDF</option>
            <option>Excel (.xlsx)</option>
            <option>CSV</option>
          </select>
        </div>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>About</h2>
        <p style={{ margin: 0, color: '#555' }}>CBSE AI Assessment System v1.0.0<br />Built with React + Vite | Deployed on Netlify<br />Aligned with NEP 2020, NCF, and CBSE CT & AI guidelines.</p>
      </section>

      <button onClick={handleSave} style={{ marginTop: '1rem', padding: '0.75rem 2rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}>
        Save Settings
      </button>

      {savedMsg && <p style={{ marginTop: '0.75rem', color: '#10b981', fontWeight: 500 }}>{savedMsg}</p>}
    </div>
  );
}

const section = { marginBottom: '1.5rem', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px' };
const sectionTitle = { margin: '0 0 1rem', fontSize: '1rem', fontWeight: 700 };
const fieldGroup = { marginBottom: '0.75rem' };
const label = { display: 'block', fontWeight: 500, marginBottom: '0.3rem', fontSize: '0.9rem' };
const input = { width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '0.95rem', boxSizing: 'border-box' };
