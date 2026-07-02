import React from 'react';

// Fail Notice Component
const Fail = ({ studentName }) => (
  <div style={{ backgroundColor: '#ffebee', color: '#c62828', padding: '10px', borderRadius: '5px', marginTop: '5px', border: '1px solid #ef9a9a', display: 'inline-block' }}>
    <strong>Notice:</strong> {studentName} has failed. Needs improvement!
  </div>
);

function App() {
  const students = [
    { id: 1, name: "Ali", marks: 95 },
    { id: 2, name: "Ahmed", marks: 72 },
    { id: 3, name: "Zain", marks: 45 },
    { id: 4, name: "Sara", marks: 62 },
    { id: 5, name: "Raza", marks: 30 }
  ];

  const getGrade = (marks) => {
    if (marks >= 90 && marks <= 100) return 'A';
    if (marks >= 80 && marks < 90) return 'B';
    if (marks >= 70 && marks < 80) return 'C';
    if (marks >= 60 && marks < 70) return 'D';
    if (marks >= 50 && marks < 60) return 'E';
    return 'F';
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>React Assignment 01 - Student Results</h2>
      {students.map((student) => {
        const grade = getGrade(student.marks);
        return (
          <div key={student.id} style={{ margin: '20px 0', padding: '10px', borderRadius: '5px', background: '#f9f9f9', border: '1px solid #eee' }}>
            <h3>Name: {student.name}</h3>
            <p>Marks: {student.marks}</p>
            <p>Grade: <strong style={{ color: grade === 'F' ? '#c62828' : '#2e7d32' }}>{grade}</strong></p>
            {grade === 'F' && <Fail studentName={student.name} />}
          </div>
        );
      })}
    </div>
  );
}

export default App;