export default function (projects) {
   const ul = document.querySelector("ul.projects");
   ul.innerHTML = "";
   for (const project of projects) {
      const newLi = document.createElement("li");
      newLi.classList.add("project");
      newLi.textContent = project.title;
      ul.append(newLi);
   }
}
