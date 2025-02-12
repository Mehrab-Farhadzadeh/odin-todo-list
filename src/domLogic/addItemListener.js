import displayTodoList from "./displayTodoList";

export default function (AppLogic) {
   const form = document.querySelector("form#todoItemForm");

   form.addEventListener("submit", (e) => {
      e.preventDefault();
      const selectedProject =
         AppLogic.projects[AppLogic.getSelectedProjectId()];
      const input = document.querySelector("#todoItem");
      selectedProject.addItem(input.value);
      displayTodoList(selectedProject.items);
      e.target.reset();
   });
}
