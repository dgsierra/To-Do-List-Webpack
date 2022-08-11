/* eslint-disable semi */
import { container } from './DOMElements.js'
import { myArray } from './GlobalArray.js'

export default class MyTasksToDo {
  constructor () {
    this.counter = 0;
    this.tasks = [];
  }

  addTask (task) {
    const newDiv = document.createElement('div')
    this.tasks.push(task.value)
    newDiv.innerHTML = `
        <div class="taskcheck"> <input type="checkbox" class="checkbox" id="task_${this.counter}" name="task_${this.counter}">
        <label class="tasktext" for="task_${this.counter}">${task.value}</label></div><button class="delete"><i class="fa-solid fa-ellipsis-vertical edit"></i></button>`
    task.value = ''
    newDiv.classList.add('task');
    container.appendChild(newDiv);
    myArray.push(task.value);
    this.counter += 1;
    this.saveStorage()
  }

  retriveStorage (oldtask) {
    this.newDiv = document.createElement('div');
    this.tasks.push(oldtask);
    this.newDiv.innerHTML = `<div class="taskcheck"> <input type="checkbox" class="checkbox" id="task_${this.counter}" name="task_${this.counter}">
    <label class="tasktext" for="task_${this.counter}">${oldtask}</label></div><button class="delete"><i class="fa-solid fa-ellipsis-vertical edit"></i></button>`
    this.newDiv.classList.add('task');
    container.appendChild(this.newDiv);
    this.counter += 1;
    myArray.push(oldtask);
  }

  deleteTask (task) {
    this.tasks.splice(this.tasks.indexOf(task), 1)
  }

  testing () {
  }

  saveStorage () {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
