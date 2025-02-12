import displayProjects from "./displayProjects";
import addProjectListener from "./addProjectListener";
import displayTodoList from "./displayTodoList";
import addItemListener from "./addItemListener";
import selectProjectListener from "./selectProjectListener";

export default function (AppLogic) {
   const DEFAULT_PROJECT_IDX = 0;
   displayProjects(AppLogic.projects, DEFAULT_PROJECT_IDX);
   displayTodoList(AppLogic.projects[DEFAULT_PROJECT_IDX].items);
   addProjectListener(AppLogic);
   addItemListener(AppLogic);
   selectProjectListener(AppLogic);
}
