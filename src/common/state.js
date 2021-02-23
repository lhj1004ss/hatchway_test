const initialState = {
    students: [],
    tagsList: [],
}

// actionTyps
const UPDATE_STUDENTS = 'UPDATE_STUDENTS';
const UPDATE_TAGS_LIST = 'UPDATE_TAGS_LIST';

// actionCreator
export const updateStudents = (students) => ({
    type: UPDATE_STUDENTS,
    payload: {
        students
    }
});


export const updateTagsList = (id, tags) => ({
    type: UPDATE_TAGS_LIST,
    payload: {
        id,
        tags
    }
})

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_STUDENTS:
            return {
                ...state,
                students: action.payload.students
            }
        case UPDATE_TAGS_LIST:
            const idx = state.tagsList.findIndex(tagsInfo => tagsInfo.id === action.payload.id);
            if(idx === -1) {
                return {
                    ...state,
                    tagsList: [ ...state.tagsList, action.payload.tags]
                }
            }
            return {
                ...state,
                tagsList: [...state.tagsList.slice(0, idx), action.payload.tags, ...state.tagsList.slice(idx + 1)]
            }
        default:
    }
    return state;
}

export default reducer;