import { getTasksService, updateTaskService, deleteTaskService, addTaskService } from './../services/service';
import axios from 'axios';

const GET_TASKS = 'GET_TASKS';
const UPDATE_TASKS = 'UPDATE_TASKS';
const DELETE_TASK = 'DELETE_TASK';
const ADD_TASK = 'ADD_TASK';

export function getTasks() {
    console.log('getTasks')
    return {
        type: GET_TASKS,
        payload: getTasksService()
    }
}
export function updateTasks(id, title, description, completed) {
    console.log('action creator fired');
    return {
        type: UPDATE_TASKS,
        payload: updateTaskService(id, title, description, completed)
    }
}
export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: deleteTaskService(id)
    }
}
export function addTask(title) {
    return {
        type: ADD_TASK,
        payload: addTaskService(title)
    }
}
