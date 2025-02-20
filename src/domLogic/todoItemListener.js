import displayProjects from "./displayProjects";
import displayTodoList from "./displayTodoList";
import editTodoItemDialogListener from "./editTodoItemDialogListener";

function deselectTodoItem(AppLogic) {
   const main = document.querySelector(".main");
   main.addEventListener("click", (e) => {
      if (e.target.classList.contains("main")) {
         AppLogic.getSelectedProject().setSelectedItemId(-1);
         displayTodoList(AppLogic);
      }
   });
}

export default function (AppLogic) {
   const ul = document.querySelector("ul.todo-list");

   editTodoItemDialogListener(AppLogic);
   deselectTodoItem(AppLogic);

   ul.addEventListener("click", (e) => {
      let selectedItemId;
      if (e.target.classList.contains("todo-item")) {
         selectedItemId = +e.target.dataset.id;
      }
      if (e.target.parentNode.classList.contains("todo-item")) {
         selectedItemId = +e.target.parentNode.dataset.id;
      }
      if (
         e.target.classList.contains("remove-btn") &&
         confirm("Do you want to delete the item?")
      ) {
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

         const projectList = document.querySelector("#projectList");
         const dueDate = document.querySelector("#editTodoItemDueDate");
         const title = document.querySelector("#editTodoItemTitle");
         const desc = document.querySelector("#editTodoItemDesc");
         const priority = document.querySelector("#editTodoItemPriority");

         //  Add the current selected Item info
         const selectedItem = AppLogic.getSelectedProject().getSelectedItem();
         if (selectedItem) {
            dueDate.valueAsDate = selectedItem.dueDate;
            title.value = selectedItem.title;
            desc.value = selectedItem.desc;
            priority.value = selectedItem.priority.toLowerCase();

            // populate projectList
            projectList.innerHTML = "";
            const selectedProjectId = AppLogic.getSelectedProject().id;
            for (const project of AppLogic.projects) {
               const option = document.createElement("option");
               option.value = project.title;
               option.dataset.id = project.id;
               option.textContent = project.title;
               if (project.id === selectedProjectId) option.selected = true;
               projectList.append(option);
            }
         }
      }

      AppLogic.getSelectedProject().setSelectedItemId(selectedItemId);
      displayProjects(AppLogic);
      displayTodoList(AppLogic);
   });
}
