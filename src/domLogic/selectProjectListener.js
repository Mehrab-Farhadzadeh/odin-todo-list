import displayProjects from "./displayProjects";
import displayTodoList from "./displayTodoList";

export default function (AppLogic) {
   const ul = document.querySelector("ul.projects");

   ul.addEventListener("click", (e) => {
      const selectedProjectId = +e.target.dataset.id;
      AppLogic.setSelectedProjectId(selectedProjectId);
      displayProjects(AppLogic);
      displayTodoList(AppLogic);
   });
}
