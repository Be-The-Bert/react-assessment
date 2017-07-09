import axios from 'axios';


export function getTasksService() {
    return axios.get('https://practiceapi.devmountain.com/api/tasks/').then( res => {
        let temp = res.data;
        for (let i = 0; i < temp.length; i++){
            temp[i].title ? null : temp[i].title = 'blank';
            temp[i].description ? null: temp[i].description = '';
            temp[i].completed !== undefined ? null : temp[i].completed = false;
        }
        return temp
    });
}
export function deleteTaskService(id) {
    return axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(res => res.data);
}
export function updateTaskService(id, title, description, completed) {
    return axios.patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {title: title, description: description, completed: completed}).then( res => res.data );
}
export function addTaskService(title) {
    return axios.post('https://practiceapi.devmountain.com/api/tasks', {title}).then(res => res.data)
}