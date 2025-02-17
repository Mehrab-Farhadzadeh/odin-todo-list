import displayProjects from "./displayProjects";
import displayTodoList from "./displayTodoList";

export default function (AppLogic) {
   const ul = document.querySelector("ul.todo-list");

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
      AppLogic.getSelectedProject().setSelectedItemId(selectedItemId);
      displayProjects(AppLogic);
      displayTodoList(AppLogic);
   });
}
