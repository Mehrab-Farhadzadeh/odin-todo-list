import displayProjects from "./displayProjects";
import displayTodoList from "./displayTodoList";

export default function (AppLogic) {
   const ul = document.querySelector("ul.projects");
   const dialog = document.querySelector("#editProject");
   const confirmBtn = document.querySelector(".confirm-btn");
   const editFrom = document.querySelector("#editProjectForm");
   const input = document.querySelector("#editProjectTitle");
   // I think closure helps to access `projectId` value in two different event
   // listeners. Another option that comes to my mind is defining a
   // `editProjectId` variable in `AppLogic` and work with `AppLogic`
   // as a mediator separately in each of the listener.
   let projectId;

   ul.addEventListener("click", (e) => {
      if (!e.target.classList.contains("edit-btn")) return;
      projectId = +e.target.parentNode.dataset.id;
      dialog.showModal();
      input.value = AppLogic.getSelectedProjectById(projectId).title;
   });

   dialog.addEventListener("close", (e) => {
      editFrom.reset();
      return;
   });

   confirmBtn.addEventListener("click", (e) => {
      e.preventDefault();
      AppLogic.editProject(projectId, input.value);
      dialog.close();
      displayTodoList(AppLogic);
      displayProjects(AppLogic);
   });
}
