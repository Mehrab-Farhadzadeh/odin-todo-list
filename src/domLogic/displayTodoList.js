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
   dueDateDiv.textContent = format(item.dueDate, "MMM dd, yyyy");
   dueDateDiv.classList.add("due-date");
   newLi.appendChild(dueDateDiv);

   // priority
   newLi.classList.add(item.priority.toLowerCase());

   // checked state
   const checkboxDiv = document.createElement("div");
   checkboxDiv.classList.add("checkbox");
   const checkboxInput = document.createElement("input");
   checkboxInput.type = "checkbox";
   checkboxInput.name = "checkedState";
   checkboxInput.checked = item.isChecked();
   checkboxDiv.appendChild(checkboxInput);
   newLi.prepend(checkboxInput);

   // remove btn
   const removeBtn = document.createElement("button");
   removeBtn.classList.add("remove-btn");
   removeBtn.textContent = "🗑️";
   newLi.append(removeBtn);

   return newLi;
}

function expandSelectedItem(selectedItemEl, selectedItem) {
   // desc
   const dueDateDiv = document.createElement("div");
   dueDateDiv.textContent = selectedItem.desc;
   dueDateDiv.classList.add("desc");
   selectedItemEl.appendChild(dueDateDiv);

   // Edit
   const editBtn = document.createElement("button");
   editBtn.classList.add("edit-btn");
   editBtn.textContent = "✏️";
   selectedItemEl.append(editBtn);
}

export default function (AppLogic) {
   AppLogic.updateLocalStorage();
   const selectedProject = AppLogic.getSelectedProject();
   const ul = document.querySelector("ul.todo-list");
   ul.innerHTML = "";
   const todoListTitle = document.querySelector(".main .project-name");
   // Check if no project is selected
   if (!selectedProject) {
      todoListTitle.classList.add("empty");
      todoListTitle.textContent = "No project is selected...";
      return;
   }
   // Display project title
   todoListTitle.classList.remove("empty");
   todoListTitle.textContent = selectedProject.title;
   // Display items
   for (const todoItem of selectedProject.items) {
      ul.append(createTodoItem(todoItem));
   }
   // Add selected class
   const selectedItem = AppLogic.getSelectedProject().getSelectedItem();
   if (selectedItem) {
      const selectedItemEl = document.querySelector(
         `.todo-item[data-id=\"${selectedItem.id}\"`
      );
      selectedItemEl.classList.add("selected");
      expandSelectedItem(selectedItemEl, selectedItem);
   }
}
