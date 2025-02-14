import displayProjects from "./displayProjects";
import displayTodoList from "./displayTodoList";

export default function (AppLogic) {
   const ul = document.querySelector("ul.todo-list");

   ul.addEventListener("click", (e) => {
      if (e.target.classList.contains("todo-item")) {
         const selectedItemId = +e.target.dataset.id;
         AppLogic.getSelectedProject().setSelectedItemId(selectedItemId);
      }
      displayProjects(AppLogic);
      displayTodoList(AppLogic);
   });
}
