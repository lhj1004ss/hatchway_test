import React from 'react';
import { useSelector } from 'react-redux';
import Student from '../student';

function StudentList() {
  const {students} = useSelector(state => state.student);
  console.log(students)
  const renderStudents = () => students.map((student, i)=> {
    if(i !== students.length - 1) {
      
      return (
        <>
          <Student key={student.id} {...student}/>
          <hr />
        </>
      )

    } else {
      return <Student key={student.id} {...student} />
    }
    
  });

  return (
    <div className="list-container">
      {renderStudents()}
    </div>
  )
}

export default StudentList
