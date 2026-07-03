# CBSE AI Assessment System

> A production-ready, CBSE-aligned digital assessment platform for AI subject — Classes 6 to 10. Built with React + Vite, featuring grade-wise topic tracking, teacher & student dashboards, rubric-based evaluation, and exportable report cards.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2-61dafb)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-5.1-646cff)](https://vitejs.dev)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00c7b7)](https://netlify.com)

---

## Overview

This system provides a complete digital assessment workflow for CBSE AI subject (Classes 6-10), aligned with:
- CBSE CT & AI framework for Classes 6-8 (awareness + activity-based)
- CBSE AI skill subject structure for Classes 9-10 (theory + practicals + project)
- NEP 2020 competency-based assessment principles

---

## Features

| Feature | Description |
|---|---|
| Grade-wise curriculum | Topics mapped from Class 6 to 10 per CBSE AI syllabus |
| Teacher Dashboard | Topic mastery heatmap, student overview, CSV export |
| Student Dashboard | Progress meter, weak area alerts, achievement badges |
| Rubric engine | Separate rubrics for Classes 6-8 and 9-10 |
| DB schema | 10-table PostgreSQL schema with mastery + progress tracking |
| Netlify ready | One-click deploy with netlify.toml |

---

## Project Structure

```
cbse-ai-assessment-system/
ss├── src/
ss│   ├── pages/
ss│   │   ├── TeacherDashboard.jsx
ss│   │   └── StudentDashboard.jsx
ss│   ├── components/
ss│   │   ├── KpiCard.jsx
ss│   │   ├── ProgressBar.jsx
ss│   │   ├── TopicTable.jsx
ss│   │   ├── TopBar.jsx
ss│   │   └── RubricCard.jsx
ss│   ├── App.jsx
ss│   ├── main.jsx
ss│   └── index.css
ss├── db/
ss│   └── schema.sql
ss├── data/
ss│   └── rubrics/
ss│       ├── class6_8.json
ss│       └── class9_10.json
ss├── index.html
ss├── package.json
ss├── vite.config.js
ss├── netlify.toml
ss└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/nshd0/cbse-ai-assessment-system.git

# Navigate into the project
cd cbse-ai-assessment-system

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## Deploy to Netlify

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) and click **Add new site**
3. Select **Import from Git** and choose this repository
4. Netlify auto-detects settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**

Every push to `main` triggers automatic redeployment.

---

## Database Schema

The `db/schema.sql` file contains a full PostgreSQL schema with 10 tables:

| Table | Purpose |
|---|---|
| `schools` | School and academic year setup |
| `classes` | Class and section records |
| `teachers` | Teacher profiles |
| `students` | Student profiles and enrollment |
| `curriculum_topics` | Grade-wise topic bank (Classes 6-10) |
| `assessments` | Assessment metadata |
| `questions` | Question bank with bloom levels |
| `student_responses` | Answers and scores per question |
| `student_mastery` | Per-topic mastery percent per student |
| `progress_snapshots` | Theory, practical, project scores over time |

---

## Assessment Rubrics

### Classes 6-8 (Activity-Based)

| Criterion | Levels |
|---|---|
| Concept Understanding | Excellent / Good / Developing / Needs Support |
| Participation | Excellent / Good / Developing / Needs Support |
| Activity Completion | Excellent / Good / Developing / Needs Support |
| Communication | Excellent / Good / Developing / Needs Support |
| Ethics and Safety | Excellent / Good / Developing / Needs Support |

### Classes 9-10 (Weighted Skill Assessment)

| Criterion | Weight |
|---|---|
| Subject Knowledge | 25% |
| Practical Skills | 25% |
| Project Execution | 25% |
| Viva and Explanation | 15% |
| Portfolio and File Work | 10% |

---

## CBSE Alignment

- **Classes 6-8**: CT & AI awareness modules, activity-based assessment
- **Classes 9-10**: Part A (Employability), Part B (Subject Theory), Part C (Practicals + Project)
- Aligned with CBSE Facilitator Handbooks and AI skill subject code
- Supports formative and summative assessment in one system

---

## Tech Stack

- **Frontend**: React 18 + Vite 5
- **Charts**: Recharts
- **Routing**: React Router DOM
- **Styling**: Inline CSS (no external library dependency)
- **Database**: PostgreSQL (schema provided)
- **Deployment**: Netlify

---

## Roadmap

- [ ] Supabase / Firebase backend integration
- [ ] PDF report card generator
- [ ] Parent portal with WhatsApp notifications
- [ ] AI-based weak topic recommendations
- [ ] Google Classroom integration
- [ ] Multi-school admin panel

---

## Contributing

Contributions are welcome from educators, developers, and EdTech enthusiasts.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

Built with purpose for Indian K-12 AI education.
Aligned with NEP 2020, NCF, and CBSE AI curriculum guidelines.

> For schools, teachers, and students across India building the next generation of AI literacy.
