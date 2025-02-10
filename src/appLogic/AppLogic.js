import Project from "./Project";
import TodoItem from "./TodoItem";

export default (function () {
   const projects = [];
   function addProject(title) {
      projects.push(Project(title));
   }
   return { projects, addProject };
})();
