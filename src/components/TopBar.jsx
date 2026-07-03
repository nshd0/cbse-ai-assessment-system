import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const nav = [
  { label: 'Home',         path: '/',             icon: '🏠' },
  { label: 'Teacher',      path: '/teacher',      icon: '📊' },
  { label: 'Student',      path: '/student',      icon: '👨‍🎓' },
  { label: 'Curriculum',   path: '/curriculum',   icon: '📚' },
  { label: 'Questions',    path: '/question-bank',icon: '❓' },
  { label: 'Reports',      path: '/reports',      icon: '📄' },
  { label: 'Settings',     path: '/settings',     icon: '⚙️' },
];

export default function TopBar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={navStyle}>
        {/* Brand */}
        <Link to="/" style={brandStyle}>
          <span style={{ fontSize: '20px' }}>🧠</span>
          <span style={{ marginLeft: '8px', fontWeight: 700, fontSize: '15px' }}>CBSE AI Assessment</span>
        </Link>

        {/* Desktop links */}
        <div style={desktopLinksStyle}>
          {nav.map(n => (
            <Link
              key={n.path}
              to={n.path}
              style={{
                ...linkStyle,
                background: pathname === n.path ? 'rgba(255,255,255,0.15)' : 'transparent',
                borderRadius: '6px',
              }}
            >
              <span style={{ marginRight: '4px' }}>{n.icon}</span>
              {n.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          style={hamburgerStyle}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={mobileMenuStyle}>
          {nav.map(n => (
            <Link
              key={n.path}
              to={n.path}
              onClick={() => setMenuOpen(false)}
              style={{
                ...mobileLinkStyle,
                background: pathname === n.path ? '#2563eb' : 'transparent',
              }}
            >
              <span style={{ marginRight: '8px' }}>{n.icon}</span>
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

const navStyle = {
  background: '#1e293b',
  padding: '0 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '56px',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
};

const brandStyle = {
  display: 'flex',
  alignItems: 'center',
  color: '#f8fafc',
  textDecoration: 'none',
  flexShrink: 0,
};

const desktopLinksStyle = {
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  '@media (max-width: 768px)': { display: 'none' },
};

const linkStyle = {
  color: '#cbd5e1',
  textDecoration: 'none',
  padding: '6px 10px',
  fontSize: '13px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  transition: 'background 0.15s',
};

const hamburgerStyle = {
  display: 'none',
  background: 'none',
  border: 'none',
  color: '#f8fafc',
  fontSize: '22px',
  cursor: 'pointer',
  padding: '4px 8px',
  // shown via CSS media query in index.css
};

const mobileMenuStyle = {
  background: '#1e293b',
  display: 'flex',
  flexDirection: 'column',
  borderTop: '1px solid #334155',
  position: 'sticky',
  top: '56px',
  zIndex: 999,
};

const mobileLinkStyle = {
  color: '#cbd5e1',
  textDecoration: 'none',
  padding: '12px 20px',
  fontSize: '14px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #334155',
};
