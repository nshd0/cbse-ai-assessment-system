import React from 'react'
import ProgressBar from '../components/ProgressBar'

const topics = [
  { subject: 'AI Basics', score: 88 },
  { subject: 'Data Literacy', score: 72 },
  { subject: 'CV & NLP', score: 65 },
  { subject: 'Python', score: 58 },
  { subject: 'ML Models', score: 45 },
  { subject: 'Ethics', score: 80 },
]

const recentScores = [
  { topic: 'What is AI', score: 90, date: '2026-06-01', type: 'Quiz' },
  { topic: 'Data Types', score: 74, date: '2026-06-10', type: 'Activity' },
  { topic: 'Python Basics', score: 58, date: '2026-06-18', type: 'Practical' },
  { topic: 'ML Concepts', score: 45, date: '2026-06-25', type: 'Test' },
]

const badges = ['AI Explorer', 'Data Curious', 'Python Starter']

export default function StudentDashboard() {
  const overall = Math.round(topics.reduce((a, t) => a + t.score, 0) / topics.length)
  const weakTopics = topics.filter(t => t.score < 60)

  return (
    <div style={{padding:'24px',fontFamily:'sans-serif',background:'#f8fafc',minHeight:'100vh'}}>
      <h2 style={{fontSize:'22px',fontWeight:700,color:'#1e293b',marginBottom:'20px'}}>Student Dashboard</h2>
      <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginBottom:'24px'}}>
        <div style={{background:'#fff',borderRadius:'12px',padding:'20px',boxShadow:'0 1px 4px rgba(0,0,0,0.07)',flex:'1',minWidth:'200px'}}>
          <p style={{color:'#64748b',fontSize:'13px',marginBottom:'8px'}}>Student</p>
          <p style={{fontWeight:700,fontSize:'18px',color:'#1e293b'}}>Aarav Singh</p>
          <p style={{color:'#64748b',fontSize:'13px'}}>Class 9 | Section A | AI Subject</p>
        </div>
        <div style={{background:'#3b82f6',borderRadius:'12px',padding:'20px',flex:'1',minWidth:'200px',color:'#fff'}}>
          <p style={{fontSize:'13px',marginBottom:'8px',opacity:0.8}}>Overall Progress</p>
          <p style={{fontWeight:700,fontSize:'32px'}}>{overall}%</p>
          <ProgressBar value={overall} max={100} color="#fff" bg="rgba(255,255,255,0.3)" />
        </div>
      </div>
      <div style={{background:'#fff',borderRadius:'12px',padding:'20px',marginBottom:'24px',boxShadow:'0 1px 4px rgba(0,0,0,0.07)'}}>
        <h3 style={{marginBottom:'16px',color:'#334155'}}>Topic Progress</h3>
        {topics.map((t,i)=>(
          <div key={i} style={{marginBottom:'12px'}}>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:'13px',color:'#475569',marginBottom:'4px'}}>
              <span>{t.subject}</span><span>{t.score}%</span>
            </div>
            <ProgressBar value={t.score} max={100} color={t.score>=75?'#22c55e':t.score>=50?'#f59e0b':'#ef4444'} bg="#e2e8f0" />
          </div>
        ))}
      </div>
      {weakTopics.length>0&&(
        <div style={{background:'#fef2f2',borderRadius:'12px',padding:'20px',marginBottom:'24px',border:'1px solid #fecaca'}}>
          <h3 style={{color:'#dc2626',marginBottom:'12px'}}>Weak Areas - Needs Revision</h3>
          {weakTopics.map((t,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'8px'}}>
              <span style={{background:'#ef4444',color:'#fff',borderRadius:'50%',width:'20px',height:'20px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px'}}>!</span>
              <span style={{color:'#7f1d1d'}}>{t.subject} - Score: {t.score}%</span>
            </div>
          ))}
        </div>
      )}
      <div style={{background:'#fff',borderRadius:'12px',padding:'20px',marginBottom:'24px',boxShadow:'0 1px 4px rgba(0,0,0,0.07)'}}>
        <h3 style={{marginBottom:'16px',color:'#334155'}}>Recent Assessments</h3>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:'14px'}}>
          <thead><tr style={{background:'#f1f5f9'}}>
            <th style={{padding:'10px',textAlign:'left',color:'#475569'}}>Topic</th>
            <th style={{padding:'10px',textAlign:'left',color:'#475569'}}>Type</th>
            <th style={{padding:'10px',textAlign:'left',color:'#475569'}}>Date</th>
            <th style={{padding:'10px',textAlign:'left',color:'#475569'}}>Score</th>
          </tr></thead>
          <tbody>{recentScores.map((r,i)=>(
            <tr key={i} style={{borderBottom:'1px solid #f1f5f9'}}>
              <td style={{padding:'10px'}}>{r.topic}</td>
              <td style={{padding:'10px'}}>{r.type}</td>
              <td style={{padding:'10px'}}>{r.date}</td>
              <td style={{padding:'10px'}}><span style={{background:r.score>=75?'#dcfce7':r.score>=50?'#fef9c3':'#fee2e2',color:r.score>=75?'#166534':r.score>=50?'#854d0e':'#991b1b',padding:'2px 10px',borderRadius:'12px'}}>{r.score}%</span></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <div style={{background:'#fff',borderRadius:'12px',padding:'20px',boxShadow:'0 1px 4px rgba(0,0,0,0.07)'}}>
        <h3 style={{marginBottom:'12px',color:'#334155'}}>Achievements</h3>
        <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
          {badges.map((b,i)=>(<span key={i} style={{background:'#fef3c7',color:'#92400e',padding:'6px 16px',borderRadius:'20px',fontSize:'13px',fontWeight:600}}>{b}</span>))}
        </div>
      </div>
    </div>
  )
}
