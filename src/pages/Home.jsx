import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
        CBSE AI Assessment System
      </h1>
      <p style={{ color: '#555', marginBottom: '2rem' }}>
        A production-ready digital assessment platform for AI subject — Classes 6 to 10.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <Link to="/teacher" style={cardStyle}>
          <h2>Teacher Dashboard</h2>
          <p>Topic mastery heatmap, student overview, CSV export</p>
        </Link>
        <Link to="/student" style={cardStyle}>
          <h2>Student Dashboard</h2>
          <p>Progress tracker, weak areas, achievement badges</p>
        </Link>
        <Link to="/curriculum" style={cardStyle}>
          <h2>Curriculum</h2>
          <p>CBSE-aligned AI syllabus for Classes 6–10</p>
        </Link>
        <Link to="/question-bank" style={cardStyle}>
          <h2>Question Bank</h2>
          <p>Grade-wise, topic-wise assessment questions</p>
        </Link>
        <Link to="/reports" style={cardStyle}>
          <h2>Reports</h2>
          <p>Exportable PDF & Excel report cards</p>
        </Link>
        <Link to="/settings" style={cardStyle}>
          <h2>Settings</h2>
          <p>School configuration and user management</p>
        </Link>
      </div>
    </div>
  );
}

const cardStyle = {
  display: 'block',
  padding: '1.5rem',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  background: '#f8fafc',
  textDecoration: 'none',
  color: '#1a202c',
  transition: 'box-shadow 0.2s',
};
