import displayProjects from "./displayProjects";
import addProjectListener from "./addProjectListener";
import displayTodoList from "./displayTodoList";
import addItemListener from "./addItemListener";

export default function (AppLogic) {
   displayProjects(AppLogic.projects);
   displayTodoList(AppLogic.projects[0].items);
   addProjectListener(AppLogic);
   addItemListener(AppLogic);
}
