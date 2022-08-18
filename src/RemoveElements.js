import { MyTasks } from './ClassCall.js';
import { clearbtn } from './DOMElements.js';

export default () => {
  clearbtn.addEventListener('click', () => {
    MyTasks.clearCompleted();
    clearbtn.classList.remove('active-btn');
  });
};
