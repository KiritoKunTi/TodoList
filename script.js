const inputNode = document.getElementById('add-task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const nodeTasks = document.getElementById('tasks');

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let currentTask = inputNode.value;

    if (!currentTask) {
        alert('Please, add task!');
        return;
    }

    let localItems = JSON.parse(localStorage.getItem('localItem'));

    if (localItems === null) {
        taskList = [];
    } else {
        taskList = localItems;
    }

    taskList.push(inputNode.value);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    setTasks();    

    inputNode.value = '';

    deleteBtn.addEventListener('click', () => {
        nodeTasks.removeChild(task_el);
    });

});

function setTasks() {
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    if (localItems === null) {
        taskList = [];
    } else {
        taskList = localItems;
    }

    let nodeTask = '';
    const itemShow = document.querySelector('.tasks');

    taskList.forEach((task, index) => {
        nodeTask += 
            `<div class="box-task">
                <div class="task place-center">${task}</div>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </div>`;
    });

    itemShow.innerHTML = nodeTask;
}   

setTasks();

function deleteTask(index) {
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    taskList.splice(index, 1);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    setTasks();
};