import Project from "./Project";
import TodoItem from "./TodoItem";

export default (function () {
   const projects = [];
   let lastProjectId = 0;
   let selectedProjectId;

   function addProject(title) {
      projects.push(Project(lastProjectId++, title));
      setSelectedProjectId(lastProjectId - 1);
   }

   function setSelectedProjectId(id) {
      selectedProjectId = id;
   }

   function getSelectedProjectId() {
      return selectedProjectId;
   }

   return {
      projects,
      addProject,
      setSelectedProjectId,
      getSelectedProjectId,
   };
})();
