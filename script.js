const addBtn = document.querySelector('#btn');
const tasks = document.querySelectorAll(".task");
const tasksContainer= document.querySelector("#todoCards");
addBtn.addEventListener('click', addTask);

function addTask(){
    const newTask = tasks[0].cloneNode();
    tasksContainer.appendChild(newTask);
    newTask.innerHTML = "New Task";

}