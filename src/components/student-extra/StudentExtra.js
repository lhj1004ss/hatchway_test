import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTagsList } from '../../common/state';
import './StudentExtra.css';

const StudentExtra = ({id, grades, tags: a}) => {
    const [tag, setTag] = useState('');
    const {tagsList} = useSelector(state => state.student);
    const dispatch = useDispatch();
    const tagsInfo = tagsList.find(tags => tags.id === id) || [];
    const handleChange = e => {
        setTag(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTags = new Set(tagsInfo.tags);
        newTags.add(tag);
        console.log(id, { id, tags: [...newTags]})
        dispatch(updateTagsList(id, { id, tags: [...newTags]}));
        setTag("");
    }
    return (
        <div className="student__extra">
            {
                grades.map((grade, i) => <div key={i}>Test{i + 1}: {grade}</div>)
            }
            {
                tagsInfo.tags && tagsInfo.tags.length > 0 && tagsInfo.tags.map((tag, i) => <button key={i} className="student__extra__button">{tag}</button>)
            }
            <form className="student__extra__tag-form" onSubmit={handleSubmit}>
                <input className="add-tag-input" placeholder="Add a tag" onChange={handleChange} value={tag}/>
            </form>
        </div>
    )
}

export default StudentExtra;