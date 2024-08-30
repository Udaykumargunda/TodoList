// Get the task input field and add task button
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Initialize an empty array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        renderTaskList();
        taskInput.value = '';
    }
}

// Function to render the task list
function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task;
        taskElement.addEventListener('click', () => {
            // Remove the task when clicked
            tasks.splice(index, 1);
            renderTaskList();
        });
        taskList.appendChild(taskElement);
    });
}

// Add event listener to the add task button
addTaskBtn.addEventListener('click', addTask);

// Initialize the task list
renderTaskList();