import displayProjects from "./displayProjects";
import addProjectListener from "./addProjectListener";
import displayTodoList from "./displayTodoList";
import addItemListener from "./addItemListener";
import selectProjectListener from "./selectProjectListener";

export default function (AppLogic) {
   displayProjects(AppLogic);
   displayTodoList(AppLogic);
   addProjectListener(AppLogic);
   addItemListener(AppLogic);
   selectProjectListener(AppLogic);
}
