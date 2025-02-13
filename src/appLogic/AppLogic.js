import Project from "./Project";

export default (function () {
   const projects = [];
   let lastProjectId = -1;
   let selectedProjectId;

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

   function setSelectedProjectId(id) {
      selectedProjectId = id;
   }

   function getSelectedProject() {
      return projects.find((project) => project.id === selectedProjectId);
   }

   return {
      projects,
      addProject,
      removeProject,
      setSelectedProjectId,
      getSelectedProject,
   };
})();
