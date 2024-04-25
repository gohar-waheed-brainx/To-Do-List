const taskInput = document.getElementById("Task");
const taskList = document.querySelector(".task-list ol");

// Function to handle task removal
function removeTask(event) {
    const taskItem = event.target.closest('li');
    if (taskItem) {
        taskItem.remove();
    }
}

// Function to handle task editing
function editTask(event) {
    const taskItem = event.target.closest('li');
    if (taskItem) {
        const taskText = taskItem.querySelector('span.task-text');
        const editText = prompt('Edit Task:', taskText.textContent);
        if (editText !== null && editText.trim() !== '') {
            taskText.textContent = editText.trim();
        }
    }
}

// Function to handle task completion
function completeTask(event) {
    const taskItem = event.target.closest('li');
    if (taskItem) {
        taskItem.classList.toggle('completed');
    }
}

// Event listener for adding new task on Enter key press
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const newTask = document.createElement('li');
            newTask.innerHTML = `
                <i class="fa fa-check" style="font-size:25px"></i>
                <span class="task-text">${taskText}</span>
                <i class="fa fa-remove" style="font-size:25px"></i>
                <i class="fa fa-edit" style="font-size:25px"></i>
            `;
            taskList.appendChild(newTask);
            taskInput.value = ''; // Clear the input field
        }
    }
});

// Event listener for task removal when remove icon is clicked
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-remove')) {
        removeTask(event);
    } else if (event.target.classList.contains('fa-edit')) {
        editTask(event);
    } else if (event.target.classList.contains('fa-check')) {
        completeTask(event);
    }
});
