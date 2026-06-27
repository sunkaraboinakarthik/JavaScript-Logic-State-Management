let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask(){

const input = document.getElementById("taskInput");

if(input.value.trim()==""){

alert("Please Enter Task");

return;

}

tasks.push({

text:input.value,

completed:false

});

input.value="";

saveTasks();

displayTasks();

}

function displayTasks(){

const list = document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((task,index)=>{

let li=document.createElement("li");

if(task.completed){

li.classList.add("completed");

}

li.innerHTML=`

<span>${task.text}</span>

<div class="actions">

<button class="complete" onclick="toggleTask(${index})">

✔

</button>

<button class="edit" onclick="editTask(${index})">

Edit

</button>

<button class="delete" onclick="deleteTask(${index})">

Delete

</button>

</div>

`;

list.appendChild(li);

});

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

displayTasks();

}

function editTask(index){

let newTask=prompt("Edit Task",tasks[index].text);

if(newTask!==null && newTask.trim()!=""){

tasks[index].text=newTask;

saveTasks();

displayTasks();

}

}

function toggleTask(index){

tasks[index].completed=!tasks[index].completed;

saveTasks();

displayTasks();

}

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}