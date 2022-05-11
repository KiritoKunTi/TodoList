
window.addEventListener('load', () => {
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

        const task_el = document.createElement("div");
        task_el.classList.add('box-task');

        const task_text = document.createElement('div');
        task_text.classList.add('place-center');
        task_text.classList.add('task');
        task_text.innerText = currentTask;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete';

        task_el.appendChild(task_text);
        task_el.appendChild(deleteBtn);
        nodeTasks.appendChild(task_el);

        inputNode.value = '';
    });

});

