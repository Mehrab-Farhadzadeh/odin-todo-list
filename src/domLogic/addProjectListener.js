import displayProjects from "./displayProjects";

export default function (AppLogic) {
   const form = document.querySelector("#projectForm");

   form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.querySelector("#project");
      AppLogic.addProject(input.value);
      displayProjects(AppLogic.projects);
      e.target.reset();
   });
}
