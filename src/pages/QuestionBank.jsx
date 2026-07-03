import React, { useState } from 'react';

const questions = {
  'Class 6': [
    { id: 1, topic: 'Introduction to AI', q: 'What does AI stand for?', type: 'MCQ', marks: 1 },
    { id: 2, topic: 'AI in Daily Life', q: 'Name two AI applications you use daily.', type: 'Short Answer', marks: 2 },
    { id: 3, topic: 'Data and Information', q: 'What is the difference between data and information?', type: 'Short Answer', marks: 2 },
  ],
  'Class 7': [
    { id: 4, topic: 'How Machines Learn', q: 'Explain supervised learning with an example.', type: 'Short Answer', marks: 3 },
    { id: 5, topic: 'AI Ethics', q: 'Why is bias in AI a problem? Give one example.', type: 'Short Answer', marks: 3 },
    { id: 6, topic: 'Pattern Recognition', q: 'What is pattern recognition? How do machines use it?', type: 'Short Answer', marks: 2 },
  ],
  'Class 8': [
    { id: 7, topic: 'Supervised Learning', q: 'What is a training dataset? Why is it important?', type: 'Short Answer', marks: 3 },
    { id: 8, topic: 'Neural Networks', q: 'Draw and label a simple neural network with 3 layers.', type: 'Diagram', marks: 5 },
    { id: 9, topic: 'AI Project', q: 'Design a mini AI project for your school. Describe inputs, processing, output.', type: 'Project', marks: 10 },
  ],
  'Class 9': [
    { id: 10, topic: 'Python for AI', q: 'Write a Python program to create a list and print its elements.', type: 'Practical', marks: 5 },
    { id: 11, topic: 'Data Analysis', q: 'Using Pandas, how would you load and display a CSV file?', type: 'Practical', marks: 5 },
    { id: 12, topic: 'ML Algorithms', q: 'Compare KNN and Decision Tree classifiers.', type: 'Long Answer', marks: 5 },
  ],
  'Class 10': [
    { id: 13, topic: 'Deep Learning', q: 'What is backpropagation? Explain with a diagram.', type: 'Long Answer', marks: 5 },
    { id: 14, topic: 'Computer Vision', q: 'Write a Python program using OpenCV to read and display an image.', type: 'Practical', marks: 5 },
    { id: 15, topic: 'Capstone Project', q: 'Build an AI system to solve a real-world problem. Submit code + report.', type: 'Project', marks: 20 },
  ],
};

const typeColors = { MCQ: '#3b82f6', 'Short Answer': '#10b981', 'Long Answer': '#f59e0b', Practical: '#8b5cf6', Diagram: '#ef4444', Project: '#ec4899' };

export default function QuestionBank() {
  const [selectedClass, setSelectedClass] = useState('Class 6');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Question Bank</h1>
      <p style={{ color: '#555', marginBottom: '1.5rem' }}>CBSE-aligned questions for AI subject, Classes 6–10.</p>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {Object.keys(questions).map(cls => (
          <button key={cls} onClick={() => setSelectedClass(cls)}
            style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid #3b82f6',
              background: selectedClass === cls ? '#3b82f6' : 'white',
              color: selectedClass === cls ? 'white' : '#3b82f6', cursor: 'pointer' }}>
            {cls}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {questions[selectedClass].map(q => (
          <div key={q.id} style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fafafa' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', background: typeColors[q.type] || '#6b7280', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{q.type}</span>
              <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{q.topic} • {q.marks} mark{q.marks > 1 ? 's' : ''}</span>
            </div>
            <p style={{ margin: 0, fontWeight: 500 }}>Q{q.id}. {q.q}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
