const GET_TASKS = 'GET_TASKS';
const UPDATE_TASKS = 'UPDATE_TASKS';
const DELETE_TASK = 'DELETE_TASK';
const ADD_TASK = 'ADD_TASK';

const initialState = {
    tasks: [{title: 'Make bed', id: 0, description: 'yuck', completed: false}, {title: 'Brush teeth', id: 1, description: '', completed: false}, {title: 'Go to bank', id: 2, description: 'Cash paycheck', completed: false}]
}

export default function reducer(state = initialState, action) {
    switch (action.type){
        case GET_TASKS + '_PENDING':
            return state;
        case GET_TASKS + '_FULFILLED':
            console.log('reducer fired', action.payload);
            return Object.assign({}, {tasks: action.payload})
        // case GET_TASKS + '_REJECTED':
        case UPDATE_TASKS + '_PENDING':
            return state;
        case UPDATE_TASKS + '_FULFILLED':
            return Object.assign({}, state, {tasks: action.payload})
        case DELETE_TASK + '_PENDING':
            return state;
        case DELETE_TASK + '_FULFILLED':
            return Object.assign({}, state, {tasks: action.payload})
        case ADD_TASK + '_PENDING':
            return state;
        case ADD_TASK + '_FULFILLED':
            return Object.assign({}, state, {tasks: action.payload})
        default:
            return state;
    }
}