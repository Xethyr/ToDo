const addTaskBtn = document.querySelector(".add-task-btn");
const listContainerNone = document.getElementById("list-container-none");
const taskInput = document.getElementById("input-box");

const addTask = () => {
  if (taskInput.value === "") {
    alert("Please enter a task.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    listContainerNone.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  taskInput.value = "";
  saveData();
};

listContainerNone.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", listContainerNone.innerHTML);
};

const showTask = () => {
  listContainerNone.innerHTML = localStorage.getItem("data");
};

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

addTaskBtn.addEventListener("click", addTask);

showTask();
