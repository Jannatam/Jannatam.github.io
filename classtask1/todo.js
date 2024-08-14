// Function to add a task to the list
function addTask() {
    // Get the value of the input field
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();  // Trim to remove extra spaces

    // Check if the input is not empty
    if (taskValue) {
        // Create a new list item element
        const li = document.createElement('li');
        li.textContent = taskValue;

        // Append the new task to the list
        const taskList = document.getElementById('taskList');
        taskList.appendChild(li);

        // Clear the input field for the next task
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}