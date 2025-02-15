import { format } from "date-fns";

function createTodoItem(item) {
   const newLi = document.createElement("li");
   newLi.classList.add("todo-item");
   newLi.setAttribute("data-id", item.id);

   // title
   const titleDiv = document.createElement("div");
   titleDiv.textContent = item.title;
   titleDiv.classList.add("title");
   newLi.appendChild(titleDiv);

   // dueDate
   const dueDateDiv = document.createElement("div");
   dueDateDiv.textContent = format(item.dueDate, "dd-MMM-yyyy");
   dueDateDiv.classList.add("due-date");
   newLi.appendChild(dueDateDiv);

   // proiority
   newLi.classList.add(item.priority.toLowerCase());

   return newLi;
}

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
      ul.append(createTodoItem(todoItem));
   }
   // Add seleceted class
   const selectedItem = AppLogic.getSelectedProject().getSelectedItem();
   if (selectedItem)
      document
         .querySelector(`.todo-item[data-id=\"${selectedItem.id}\"`)
         .classList.add("selected");
}
