export default function (projects, selectedProjectId) {
   const ul = document.querySelector("ul.projects");
   ul.innerHTML = "";
   for (const project of projects) {
      const newLi = document.createElement("li");
      newLi.className = "project";
      if (project.id === selectedProjectId) newLi.classList.add("selected");
      newLi.textContent = project.title;
      ul.append(newLi);
   }
}
