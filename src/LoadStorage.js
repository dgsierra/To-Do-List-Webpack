import { MyTasks } from './ClassCall.js';

const myStorage = JSON.parse(localStorage.getItem('tasks'));

export default () => {
  if (myStorage !== null) {
    document.addEventListener('DOMContentLoaded', () => {
      myStorage.forEach((task) => {
        MyTasks.retriveStorage(task);
      });
    });
  }
};
