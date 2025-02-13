function appendRemoveButton(li) {
   const removeBtn = document.createElement("button");
   removeBtn.classList.add("remove-btn");
   removeBtn.textContent = "🗑️";
   li.append(removeBtn);
}

export default function (AppLogic) {
   const ul = document.querySelector("ul.projects");
   ul.innerHTML = "";
   for (const project of AppLogic.projects) {
      const newLi = document.createElement("li");
      newLi.className = "project";
      newLi.setAttribute("data-id", project.id);
      newLi.textContent = project.title;
      appendRemoveButton(newLi);
      ul.append(newLi);
   }
   if (AppLogic.getSelectedProject())
      document
         .querySelector(`[data-id=\"${AppLogic.getSelectedProject().id}\"`)
         .classList.add("selected");
}
