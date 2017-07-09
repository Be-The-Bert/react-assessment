const ADD_TASK = 'ADD_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const initialState = {
    tasks: [],
    flags: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks: action.payload.tasks,
                flags: action.payload.flags
            }
        case COMPLETE_TASK:
            return {
                tasks: [...state.tasks],
                flags: action.payload
            }
        case DELETE_TASK:
            return {
                tasks: action.payload.tasks,
                flags: action.payload.flags
            }
        default: return state;
    }
}