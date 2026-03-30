const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === '') {
        alert('Please enter a task, bro!');
        return;
    }

    // Create the list item (li)
    const li = document.createElement('li');

    // Create a span for the text
    const span = document.createElement('span');
    span.classList.add('task-text');
    span.innerText = taskText;

    // Create a div for the action buttons
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    // Create Complete button
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('btn-complete');
    completeBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Create Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn-delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener('click', () => {
        li.style.transform = "scale(0.9)";
        li.style.opacity = "0";
        setTimeout(() => {
            li.remove();
        }, 200); // Wait for a quick fade out before removing
    });

    // Append buttons to the actions div
    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(deleteBtn);

    // Append text and actions to the list item
    li.appendChild(span);
    li.appendChild(actionsDiv);

    // Add the list item to the top of the ul
    taskList.prepend(li);

    // Clear the input field
    taskInput.value = '';
}

// Add task when clicking the button
addBtn.addEventListener('click', addTask);

// Add task when pressing the "Enter" key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});