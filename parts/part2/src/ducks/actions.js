const ADD_TASK = 'ADD_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const DELETE_TASK = 'DELETE_TASK';

export function addTaskAction(taskArray, flagsArray){
    return {
        type: ADD_TASK,
        payload: {
            tasks: taskArray,
            flags: flagsArray
        }
    }
}
export function completeTaskAction(flagsArray){
    return {
        type: COMPLETE_TASK,
        payload: flagsArray
    }
}
export function deleteTaskAction(taskArray, flagsArray){
    return {
        type: DELETE_TASK,
        payload: {
            tasks: taskArray,
            flags: flagsArray
        }
    }
}