import displayProjects from "./displayProjects";
import addProjectListener from "./addProjectListener";
import displayTodoList from "./displayTodoList";
import addItemListener from "./addItemListener";

export default function (AppLogic) {
   const DEFAULT_PROJECT_IDX = 0;
   displayProjects(AppLogic.projects, AppLogic.getSelectedProjectId());
   displayTodoList(AppLogic.projects[DEFAULT_PROJECT_IDX].items);
   addProjectListener(AppLogic);
   addItemListener(AppLogic);
}
