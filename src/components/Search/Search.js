import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { studentsData, URL } from '../../common/api';
import { updateStudents } from '../../common/state';
import './Search.css';

function Search() {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState('');
  const [tagKeyword, setTagKeyword] = useState('');

  const { tagsList } = useSelector(state => state.student);

  const updateSearchKeyword = (keyword, type) => {
    if(type === 'name') {
      studentsData(URL).then((students) => {
        if(keyword) {
          dispatch(updateStudents(students.filter((student) => student.firstName.toLowerCase().includes(keyword.toLowerCase()) || student.lastName.toLowerCase().includes(keyword.toLowerCase()))))
        } else {
          dispatch(updateStudents(students));
        }
      }); 
    } else {
      studentsData(URL).then((students) => {
        const ids = [];
        tagsList.forEach(tagsInfo => {
          const { id, tags } = tagsInfo;
          let filtered = tags.filter(tag => tag.includes(keyword));
          if (filtered.length > 0) {
            ids.push(id);
          }
        });

        if(keyword) {
          dispatch(updateStudents(students.filter((student) => ids.includes(student.id))));
        } else {
          dispatch(updateStudents(students));
        }
      }); 
    }

  }

  const changeHandler = (e) => {
    const { id, value } = e.target;
    switch(id) {
      case 'name-input':
        setKeyword(value);
        updateSearchKeyword(value, "name");
        break;
      default:
        setTagKeyword(value);
        updateSearchKeyword(value, "tags");
    }
    
  }
  return (
    <div className="search-container">
      <input className="search__input" id="name-input" placeholder="Search by name" onChange={changeHandler} value={keyword}></input>
      <input className="search__input" id="tag-input" placeholder="Search by tags" onChange={changeHandler} value={tagKeyword}></input>
    </div>
  )
}

export default Search
