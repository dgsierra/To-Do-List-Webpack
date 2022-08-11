/* eslint-disable semi */
import './style.css'
// Project Modules
import addTaskForm from './eventListeners.js'
import loadContent from './LoadStorage.js'

addTaskForm();

// Load content from localStorage
loadContent();
