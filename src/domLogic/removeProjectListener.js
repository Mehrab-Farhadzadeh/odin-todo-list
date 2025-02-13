import displayProjects from "./displayProjects";
import displayTodoList from "./displayTodoList";

export default function (AppLogic) {
   const ul = document.querySelector("ul.projects");

   ul.addEventListener("click", (e) => {
      if (!e.target.classList.contains("remove-btn")) return;
      const selectedProjectId = +e.target.parentNode.dataset.id;
      AppLogic.removeProject(selectedProjectId);
      displayProjects(AppLogic);
      displayTodoList(AppLogic);
   });
}
