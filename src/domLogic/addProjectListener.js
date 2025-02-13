import displayProjects from "./displayProjects";
import displayTodoList from "./displayTodoList";

export default function (AppLogic) {
   const form = document.querySelector("#projectForm");

   form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.querySelector("#project");
      AppLogic.addProject(input.value);
      displayProjects(AppLogic);
      displayTodoList(AppLogic);
      e.target.reset();
   });
}
