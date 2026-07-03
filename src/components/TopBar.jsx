import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function TopBar() {
  const { pathname } = useLocation()
  const nav = [
    { label: 'Teacher Dashboard', path: '/teacher' },
    { label: 'Student Dashboard', path: '/student' },
  ]
  return (
    <nav style={{ background: '#1e293b', padding: '0 24px', display: 'flex', alignItems: 'center', gap: '32px', height: '56px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
      <span style={{ color: '#38bdf8', fontWeight: 700, fontSize: '16px' }}>CBSE AI Assessment</span>
      {nav.map(n => (
        <Link key={n.path} to={n.path} style={{ color: pathname === n.path ? '#38bdf8' : '#94a3b8', textDecoration: 'none', fontWeight: pathname === n.path ? 600 : 400, fontSize: '14px', borderBottom: pathname === n.path ? '2px solid #38bdf8' : '2px solid transparent', paddingBottom: '2px' }}>
          {n.label}
        </Link>
      ))}
    </nav>
  )
}
