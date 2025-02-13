export default function (AppLogic) {
   const selectedProject = AppLogic.getSelectedProject();
   const ul = document.querySelector("ul.todo-list");
   ul.innerHTML = "";
   const todoListTitle = document.querySelector(".main .project-name");
   // Check if no project is selected
   if (!selectedProject) {
      todoListTitle.classList.add("empty");
      todoListTitle.textContent = "No project is selceted...";
      return;
   }

   todoListTitle.classList.remove("empty");
   todoListTitle.textContent = selectedProject.title;
   for (const todoItem of selectedProject.items) {
      const newLi = document.createElement("li");
      newLi.classList.add("todo-item");
      newLi.setAttribute("data-id", todoItem.id);
      newLi.textContent = todoItem.title;
      ul.append(newLi);
   }
}
