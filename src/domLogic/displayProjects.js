function appendRemoveButton(li) {
   const removeBtn = document.createElement("button");
   removeBtn.classList.add("remove-btn");
   removeBtn.textContent = "🗑️";
   li.append(removeBtn);
}

function appendEditButton(li) {
   const editBtn = document.createElement("button");
   editBtn.classList.add("edit-btn");
   editBtn.textContent = "✏️";
   li.append(editBtn);
}

export default function (AppLogic) {
   AppLogic.updateLocalStorage();
   const ul = document.querySelector("ul.projects");
   ul.innerHTML = "";
   for (const project of AppLogic.projects) {
      const newLi = document.createElement("li");
      newLi.className = "project";
      newLi.setAttribute("data-id", project.id);
      newLi.textContent = project.title;
      appendEditButton(newLi);
      appendRemoveButton(newLi);
      ul.append(newLi);
   }
   if (AppLogic.getSelectedProject()) {
      document
         .querySelector(
            `.project[data-id=\"${AppLogic.getSelectedProject().id}\"`
         )
         .classList.add("selected");
      localStorage.setItem(
         "selectedProjectId",
         AppLogic.getSelectedProject().id
      );
   }
}
