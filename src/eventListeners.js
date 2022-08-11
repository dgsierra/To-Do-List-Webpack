import { task } from './DOMElements.js'
import { MyTasks } from './ClassCall.js'

export default addTaskForm => {
  task.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      MyTasks.addTask(task)
    }
  })
}
