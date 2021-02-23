import React, { useEffect } from 'react';
import StudentList from './components/studentList/StudentList';
import Search from './components/Search';
import { studentsData, URL } from './common/api';
import './App.css';
import { updateStudents } from './common/state';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    studentsData(URL).then((students) => {
      dispatch(updateStudents(students));
    });
  }, [dispatch])

  return (
    <div className="app-container">
      <Search />
      <StudentList />
    </div>
  );
}

export default App;
