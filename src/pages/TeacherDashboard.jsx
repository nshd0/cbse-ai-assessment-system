import React, { useState } from 'react'
import KpiCard from '../components/KpiCard'
import TopicTable from '../components/TopicTable'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const topicData = [
  { topic: 'What is AI', mastery: 88 },
  { topic: 'Data & Learning', mastery: 72 },
  { topic: 'Computer Vision', mastery: 65 },
  { topic: 'Python Basics', mastery: 58 },
  { topic: 'Neural Networks', mastery: 45 },
]

const students = [
  { name: 'Aarav Singh', grade: 9, score: 82, weakArea: 'Data Preprocessing', remedial: false },
  { name: 'Priya Sharma', grade: 10, score: 54, weakArea: 'Neural Networks', remedial: true },
  { name: 'Rohan Verma', grade: 8, score: 91, weakArea: 'None', remedial: false },
  { name: 'Sneha Patel', grade: 7, score: 47, weakArea: 'ML Concepts', remedial: true },
  { name: 'Arjun Nair', grade: 6, score: 76, weakArea: 'AI Ethics', remedial: false },
]

const getColor = (val) => val >= 75 ? '#22c55e' : val >= 50 ? '#f59e0b' : '#ef4444'

export default function TeacherDashboard() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? students : students.filter(s => s.grade === parseInt(filter))

  const handleExport = () => {
    const csv = [['Name','Grade','Score','Weak Area','Remedial'],...filtered.map(s=>[s.name,s.grade,s.score,s.weakArea,s.remedial?'Yes':'No'])].map(r=>r.join(',')).join('\n')
    const blob = new Blob([csv],{type:'text/csv'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href=url; a.download='teacher_report.csv'; a.click()
  }

  return (
    <div style={{padding:'24px',fontFamily:'sans-serif',background:'#f8fafc',minHeight:'100vh'}}>
      <h2 style={{fontSize:'22px',fontWeight:700,color:'#1e293b',marginBottom:'20px'}}>Teacher Dashboard</h2>
      <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginBottom:'24px'}}>
        <KpiCard title="Average Score" value="71.5%" color="#3b82f6" />
        <KpiCard title="Mastery Rate" value="64%" color="#22c55e" />
        <KpiCard title="Pending Assessments" value="3" color="#f59e0b" />
        <KpiCard title="Students Needing Help" value="2" color="#ef4444" />
      </div>
      <div style={{background:'#fff',borderRadius:'12px',padding:'20px',marginBottom:'24px',boxShadow:'0 1px 4px rgba(0,0,0,0.07)'}}>
        <h3 style={{marginBottom:'16px',color:'#334155'}}>Topic Mastery Heatmap</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={topicData}>
            <XAxis dataKey="topic" tick={{fontSize:12}} />
            <YAxis domain={[0,100]} />
            <Tooltip />
            <Bar dataKey="mastery">
              {topicData.map((e,i)=>(<Cell key={i} fill={getColor(e.mastery)} />))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{background:'#fff',borderRadius:'12px',padding:'20px',boxShadow:'0 1px 4px rgba(0,0,0,0.07)'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'16px'}}>
          <h3 style={{color:'#334155'}}>Student Overview</h3>
          <div style={{display:'flex',gap:'8px'}}>
            {['All','6','7','8','9','10'].map(g=>(
              <button key={g} onClick={()=>setFilter(g)} style={{padding:'4px 12px',borderRadius:'20px',border:'none',cursor:'pointer',background:filter===g?'#3b82f6':'#e2e8f0',color:filter===g?'#fff':'#334155'}}>{g==='All'?'All':`Gr ${g}`}</button>
            ))}
            <button onClick={handleExport} style={{padding:'4px 14px',borderRadius:'20px',border:'none',cursor:'pointer',background:'#22c55e',color:'#fff'}}>Export CSV</button>
          </div>
        </div>
        <TopicTable students={filtered} />
      </div>
    </div>
  )
}
