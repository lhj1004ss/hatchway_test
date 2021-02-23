import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import StudentExtra from '../student-extra/StudentExtra';
import './Student.css';

const Student = (student) => {
    const [isOpen, setIsOpen] = useState(false);
      console.log(student)
    return(
        <>
        <div className="student__container">
            <div className="student__img">
            <img src={student.pic} alt="img for student" />
            </div>
            <div className="student__info">
                <h1>{student.firstName} {student.lastName}</h1>
                <div>Email: {student.email}</div>
                <div>Company: {student.company}</div>
                <div>Skill: {student.skill}</div>
                <div>Average: {student.grades.reduce((a, b) => (Number(a) + Number(b))) / student.grades.length} %</div>
            </div>
            <div className="student__btn">
                <span className="expand-btn" onClick={()=>(setIsOpen(!isOpen))}>{isOpen ? <FiMinus/> : <FiPlus/>}</span>
            </div>
        </div>
        {isOpen && <StudentExtra id={student.id} tags={student.tags} grades={student.grades} /> }
    </>
    )
}

export default Student;