import displayProjects from "./displayProjects";
import displayTodoList from "./displayTodoList";

function showAddProjectBtnListener(form) {
   const btn = document.querySelector(".showAddProjectForm");
   btn.addEventListener("click", () => {
      form.classList.toggle("hidden");
   });
}

export default function (AppLogic) {
   const form = document.querySelector("#projectForm");
   showAddProjectBtnListener(form);
   
   form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.querySelector("#projectTitle");
      AppLogic.addProject(input.value);
      displayProjects(AppLogic);
      displayTodoList(AppLogic);
      e.target.reset();
   });
}
