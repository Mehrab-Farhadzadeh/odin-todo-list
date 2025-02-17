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

function expandSelectedItemd(selectedItemEl, selectedItem) {
   // desc
   const dueDateDiv = document.createElement("div");
   dueDateDiv.textContent = selectedItem.desc;
   dueDateDiv.classList.add("desc");
   selectedItemEl.appendChild(dueDateDiv);
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
   if (selectedItem) {
      const selcetedItemEl = document.querySelector(
         `.todo-item[data-id=\"${selectedItem.id}\"`
      );
      selcetedItemEl.classList.add("selected");
      expandSelectedItemd(selcetedItemEl, selectedItem);
   }
}
