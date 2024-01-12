function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = `<span>${taskInput.value}</span>
                    <button onclick="completeTask(this)">Complete</button>
                    <button onclick="editTask(this)">Edit</button>
                    <button onclick="removeTask(this)">Remove</button>`;
    taskList.appendChild(li);

    taskInput.value = "";
}

function completeTask(button) {
    var li = button.parentNode;
    li.classList.toggle("completed");
}

function editTask(button) {
    var li = button.parentNode;
    var span = li.querySelector("span");
    var newText = prompt("Edit task:", span.textContent);

    if (newText !== null) {
        span.textContent = newText;
    }
}

function removeTask(button) {
    var li = button.parentNode;
    var taskList = document.getElementById("taskList");
    taskList.removeChild(li);
}
