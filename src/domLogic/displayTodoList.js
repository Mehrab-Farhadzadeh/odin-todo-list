export default function (todoList) {
   const ul = document.querySelector("ul.todo-list");
   ul.innerHTML = "";
   for (const todoItem of todoList) {
      const newLi = document.createElement("li");
      newLi.classList.add("todo-item");
      newLi.setAttribute("data-id", todoItem.id);
      newLi.textContent = todoItem.title;
      ul.append(newLi);
   }
}
