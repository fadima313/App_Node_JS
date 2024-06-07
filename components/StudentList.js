import React from 'react';

const StudentList = ({ students }) => (
  <ul>
    {students.map((student, index) => (
      <li key={index}>{student.name}</li>
    ))}
  </ul>
);

export default StudentList;
