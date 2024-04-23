const form = document.querySelector(".todo-form");
const myTaskInput = document.querySelector("#task");
const taskList = document.querySelector("#todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!myTaskInput.value.trim()) {
    return;
  }

  const task = document.createElement("li");
  task.classList.add("list-group-item");
  task.innerHTML = `
    <span>${myTaskInput.value.trim()}</span>
    <button type="button" class="btn btn-danger btn-sm" data-action="delete">
      <i class="fas fa-trash"></i>
    </button>
  `;

  taskList.appendChild(task);
  myTaskInput.value = "";

  task.querySelector('[data-action="delete"]').addEventListener("click", () => {
    taskList.removeChild(task);
  });
});
