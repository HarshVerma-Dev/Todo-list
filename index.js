let todolist = [];

displayItems();

// Enable/Disable Add Button
function toggleButton() {
    let taskInput = document.querySelector("#todo-input");
    let addButton = document.querySelector("#add-btn");

    if (taskInput.value.trim() === "") {
        addButton.disabled = true;
    } else {
        addButton.disabled = false;
    }
}

// Add Todo
function addTodo() {
    let inputElement = document.querySelector("#todo-input");
    let dateElement = document.querySelector("#todo-date");

    let todoItem = inputElement.value.trim();
    let todoDate = dateElement.value;

    // Prevent empty task
    if (todoItem === "") {
        return;
    }

    // Add task
    todolist.push({
        item: todoItem,
        dueDate: todoDate
    });

    // Clear inputs
    inputElement.value = "";
    dateElement.value = "";

    // Disable button again
    toggleButton();

    // Refresh list
    displayItems();
}

// Display Todo List
function displayItems() {
    let containerElement = document.querySelector(".todo-container");
    let newHtml = "";

    for (let i = 0; i < todolist.length; i++) {

        let { item, dueDate } = todolist[i];

        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btn-delete" onclick="deleteTodo(${i})">
                Delete
            </button>
        `;
    }

    containerElement.innerHTML = newHtml;
}

// Delete Todo
function deleteTodo(index) {
    todolist.splice(index, 1);
    displayItems();
}
