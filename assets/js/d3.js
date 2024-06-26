const newTask = document.getElementById("newTask");
const addButton = document.getElementById("addButton");
const tasks = document.getElementById("tasks");
const presetTask = document.getElementById("presetTask");
const plusP = document.getElementById("plusP");

const allTasck = [];

addButton.addEventListener("click", function (e) {
  e.preventDefault();
  addArray();
  addP();
  newTask.reset();
});

function addArray() {
  allTasck.push(presetTask.value);
}
function addP() {
  plusP.innerHTML = "";
  for (let i = 0; i < allTasck.length; i++) {
    let newp = document.createElement("p");
    newp.innerText = allTasck[i];
    let btnDelete = document.createElement("button");
    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("onclick", `deleteItem(${i});`);
    btnDelete.innerText = "❌";
    newp.appendChild(btnDelete);
    plusP.appendChild(newp);
  }
}

function deleteItem(index) {
  allTasck.splice(index, 1);
  addP();
}

const attachComplete = function () {
  let allTasks = document.querySelectorAll(".plusP");
  for (let i = 0; i < allTasck.length; i++) {
    allTasck[i].addEventListener("click", function () {
      this.classList.toggle("completed");
    });
  }
};
