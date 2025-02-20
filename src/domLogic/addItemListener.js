import displayTodoList from "./displayTodoList";

function showAddTodoItemBtnListener(form) {
   const btn = document.querySelector(".showAddTodoItemForm");
   btn.addEventListener("click", () => {
      form.classList.toggle("hidden");
   });
}

export default function (AppLogic) {
   const form = document.querySelector("form#todoItemForm");
   showAddTodoItemBtnListener(form);
   const dueDate = document.querySelector("#todoItemDueDate");
   dueDate.valueAsDate = new Date();

   form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.querySelector("#todoItemTitle");
      const desc = document.querySelector("#todoItemDesc");
      const priority = document.querySelector("#todoItemPriority");
      if (!AppLogic.getSelectedProject()) {
         alert("Please select or create a project first");
         return;
      }
      AppLogic.getSelectedProject().addItem(
         title.value,
         desc.value,
         dueDate.valueAsDate,
         priority.value
      );
      displayTodoList(AppLogic);
      title.value = "";
      desc.value = "";
   });
}
