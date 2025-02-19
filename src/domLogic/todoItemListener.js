import displayProjects from "./displayProjects";
import displayTodoList from "./displayTodoList";
import editTodoItemDialogListener from "./editTodoItemDialogListener";

export default function (AppLogic) {
   const ul = document.querySelector("ul.todo-list");

   editTodoItemDialogListener(AppLogic);

   ul.addEventListener("click", (e) => {
      let selectedItemId;
      if (e.target.classList.contains("todo-item")) {
         selectedItemId = +e.target.dataset.id;
      }
      if (e.target.parentNode.classList.contains("todo-item")) {
         selectedItemId = +e.target.parentNode.dataset.id;
      }
      if (e.target.classList.contains("remove-btn")) {
         AppLogic.getSelectedProject().removeItem(selectedItemId);
      }
      if (e.target.name === "checkedState") {
         AppLogic.getSelectedProject().toggleCheck(selectedItemId);
         const selectedItem = AppLogic.getSelectedProject().getSelectedItem();
         if (selectedItem) selectedItemId = selectedItem.id;
         else selectedItemId = -1;
      }

      if (e.target.classList.contains("edit-btn")) {
         const dialog = document.querySelector("#editTodoItem");
         dialog.showModal();

         const dueDate = document.querySelector("#editTodoItemDueDate");
         const title = document.querySelector("#editTodoItemTitle");
         const desc = document.querySelector("#editTodoItemDesc");
         const priority = document.querySelector("#editTodoItemPriority");

         const selectedItem = AppLogic.getSelectedProject().getSelectedItem();

         if (selectedItem) {
            dueDate.valueAsDate = selectedItem.dueDate;
            title.value = selectedItem.title;
            desc.value = selectedItem.desc;
            priority.value = selectedItem.priority.toLowerCase();
         }
      }

      AppLogic.getSelectedProject().setSelectedItemId(selectedItemId);
      displayProjects(AppLogic);
      displayTodoList(AppLogic);
   });
}
