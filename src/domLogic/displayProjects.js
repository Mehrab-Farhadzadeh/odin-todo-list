export default function (projects, selectedProjectId) {
   const ul = document.querySelector("ul.projects");
   ul.innerHTML = "";
   for (const project of projects) {
      const newLi = document.createElement("li");
      newLi.className = "project";
      newLi.setAttribute("data-id", project.id);
      if (project.id === selectedProjectId) {
         newLi.classList.add("selected");
         const todoListTitle = document.querySelector(".main .project-name");
         todoListTitle.textContent = project.title;
      }
      newLi.textContent = project.title;
      ul.append(newLi);
   }
}
