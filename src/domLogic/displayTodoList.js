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
   // Display project title
   todoListTitle.classList.remove("empty");
   todoListTitle.textContent = selectedProject.title;
   // Display items
   for (const todoItem of selectedProject.items) {
      const newLi = document.createElement("li");
      newLi.classList.add("todo-item");
      newLi.setAttribute("data-id", todoItem.id);
      newLi.textContent = todoItem.title;
      ul.append(newLi);
   }
   // Add seleceted class
   const selectedItem = AppLogic.getSelectedProject().getSelectedItem();
   if (selectedItem)
      document
         .querySelector(`.todo-item[data-id=\"${selectedItem.id}\"`)
         .classList.add("selected");
}
