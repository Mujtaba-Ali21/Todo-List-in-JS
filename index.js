
function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");

    const todo = document.createElement("li");
    todo.classList.add("list-group-item", "d-flex", "align-items-center", "border-0", "mt-2", "rounded");
    todo.style.backgroundColor = "#f4f6f7";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input", "me-2");

    if (todoInput.value == "") {
        alert("You cannot make an empty list")
    } else {
        checkbox.addEventListener("click", function () {
            if (checkbox.checked) {
                todoText.classList.add("strikethrough");
            } else {
                todoText.classList.remove("strikethrough");
            }
        });

        const todoText = document.createElement("div");
        todoText.innerHTML = todoInput.value;
        todoText.addEventListener("dblclick", function () {
            todoText.contentEditable = true;
        })
        todoText.classList.add("flex-fill", "ms-2");
        todoText.setAttribute("spellcheck", "false")
        todo.appendChild(checkbox);
        todo.appendChild(todoText);

        
        const close = document.createElement("span");
            close.classList.add("todo-close");
            close.addEventListener("click", function () {
                todoList.removeChild(todo);
            });
            todo.appendChild(close);

        todoList.appendChild(todo);

        todoInput.value = "";
    }
}

