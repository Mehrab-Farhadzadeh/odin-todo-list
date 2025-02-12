import displayProjects from "./displayProjects";
import displayTodoList from "./displayTodoList";

export default function (AppLogic) {
   const form = document.querySelector("#projectForm");

   form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.querySelector("#project");
      AppLogic.addProject(input.value);
      const selectedProjectId = AppLogic.getSelectedProjectId();
      displayProjects(AppLogic.projects, selectedProjectId);
      displayTodoList(AppLogic.projects[selectedProjectId].items);
      e.target.reset();
   });
}
