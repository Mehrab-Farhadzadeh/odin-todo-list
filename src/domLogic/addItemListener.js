import displayTodoList from "./displayTodoList";

export default function (AppLogic) {
   const form = document.querySelector("form#todoItemForm");

   form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.querySelector("#todoItem");
      AppLogic.projects[0].addItem(input.value);
      displayTodoList(AppLogic.projects[0].items);
      e.target.reset();
   });
}
