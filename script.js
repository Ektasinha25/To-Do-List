const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask(){
    const task = taskInput.value.trim();

    if(task === ""){
        return;
    }

    const li = document.createElement("li");
    let displayTask = document.createTextNode(task);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () =>{
        li.style.textDecoration = "line-through";
    })

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    })

    li.appendChild(checkbox);
    li.appendChild(displayTask);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}


