const userInput = document.querySelector(".user-input");
const addButton = document.querySelector(".submit");
const clearAll = document.querySelector(".bottom>button");
const taskContainer = document.querySelector(".todo-task-container");

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (userInput.value === "") {
    alert(`You Must Enter A Task!`);
  } else {
    let li = document.createElement("li");
    li.innerHTML = userInput.value;
    taskContainer.appendChild(li);
    let span = document.createElement("span");
    span.style.backgroundImage = "url(/Assest/Icons/Trash-with-bgc.png)";
    li.appendChild(span);
    saveData();
  }
  userInput.value = "";
  saveData();
});

taskContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

clearAll.addEventListener("click", (e) => {
  let AllLi = document.querySelectorAll("li");
  AllLi.forEach((li) => {
    taskContainer.removeChild(li);
  });

  saveData();
});

function saveData() {
  localStorage.setItem("data", taskContainer.innerHTML);
}
function showData() {
  taskContainer.innerHTML = localStorage.getItem("data");
}
showData();
