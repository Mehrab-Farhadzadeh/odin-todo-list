import displayTodoList from "./displayTodoList";

export default function (AppLogic) {
   const dialog = document.querySelector("#editTodoItem");
   const confirmBtn = document.querySelector("#editTodoItem .confirm-btn");
   const editFrom = document.querySelector("#editTodoItemForm");

   const dueDate = document.querySelector("#editTodoItemDueDate");
   const title = document.querySelector("#editTodoItemTitle");
   const desc = document.querySelector("#editTodoItemDesc");
   const priority = document.querySelector("#editTodoItemPriority");

   confirmBtn.addEventListener("click", (e) => {
      e.preventDefault();
      AppLogic.getSelectedProject().editItem(
         title.value,
         desc.value,
         dueDate.valueAsDate,
         priority.value
      );
      displayTodoList(AppLogic);
      dialog.close();
   });
}
