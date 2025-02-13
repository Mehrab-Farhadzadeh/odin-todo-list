import displayTodoList from "./displayTodoList";

export default function (AppLogic) {
   const form = document.querySelector("form#todoItemForm");

   form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.querySelector("#todoItem");
      if (!AppLogic.getSelectedProject()) {
         alert("Please select or create a project first");
         return;
      }
      AppLogic.getSelectedProject().addItem(input.value);
      displayTodoList(AppLogic);
      e.target.reset();
   });
}
