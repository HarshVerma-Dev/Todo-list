let todolist = [{
        item: 'Buy milk',
        dueDate: '25/05/26'
    },
    {
        item: 'go to work',
        dueDate: '25/05/26'
    }
];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todolist.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todolist.length; i++) {
        // let item = todolist[i].item;
        // let dueDate = todolist[i].dueDate;
        let { item, dueDate } = todolist[i];
        newHtml += `
       
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todolist.splice(${i}, 1);
        displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
}