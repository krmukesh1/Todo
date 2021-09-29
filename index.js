const Input = document.querySelector("#input");
const Form = document.querySelector("#form");
const Todos = document.querySelector("#todos");

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = Input.value;

  if (todoText) {
    const TodoEl = document.createElement("li");
    TodoEl.innerText = todoText;
    Todos.appendChild(TodoEl);

    TodoEl.addEventListener("click", () => {
      TodoEl.classList.toggle("completed");
    });

    TodoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      TodoEl.remove();
    });
    Input.value = "";
  }
});
