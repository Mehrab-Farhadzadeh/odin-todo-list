import displayTodoList from "./displayTodoList";

export default function (AppLogic) {
   const form = document.querySelector("form#todoItemForm");

   form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.querySelector("#todoItemTitle");
      const dueDate = document.querySelector("#todoItemDueDate");
      const desc = document.querySelector("#todoItemDesc");
      if (!AppLogic.getSelectedProject()) {
         alert("Please select or create a project first");
         return;
      }
      AppLogic.getSelectedProject().addItem(
         title.value,
         desc.value,
         dueDate.valueAsDate
      );
      displayTodoList(AppLogic);
      e.target.reset();
   });
}
