import Project from "./Project";

export default (function () {
   const projects = [];
   let lastProjectId = -1;
   let selectedProjectId;

   function updateLocalStorage() {
      localStorage.setItem("projects", JSON.stringify(projects));
   }

   function addProject(title) {
      projects.push(Project(++lastProjectId, title));
      setSelectedProjectId(lastProjectId);
   }

   function removeProject(projectId) {
      if (projectId === selectedProjectId) selectedProjectId = undefined;
      const projectIdx = projects.findIndex(
         (project) => project.id === projectId
      );
      projects.splice(projectIdx, 1);
   }

   function editProject(projectId, title) {
      const project = projects.find((project) => project.id === projectId);
      if (project && title) project.title = title;
   }

   function setSelectedProjectId(id) {
      selectedProjectId = id;
   }

   function getSelectedProject() {
      return projects.find((project) => project.id === selectedProjectId);
   }

   function getSelectedProjectById(projectId) {
      return projects.find((project) => project.id === projectId);
   }

   return {
      projects,
      addProject,
      removeProject,
      editProject,
      setSelectedProjectId,
      getSelectedProject,
      getSelectedProjectById,
      updateLocalStorage,
   };
})();
