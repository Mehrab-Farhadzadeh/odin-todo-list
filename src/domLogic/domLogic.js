import displayProjects from "./displayProjects";
import addProjectListener from "./addProjectListener";
import displayTodoList from "./displayTodoList";
import addItemListener from "./addItemListener";
import selectProjectListener from "./selectProjectListener";
import removeProjectListener from "./removeProjectListener";
import todoItemListener from "./todoItemListener";
import editProjectListener from "./editProjectListener";

export default function (AppLogic) {
   displayProjects(AppLogic);
   displayTodoList(AppLogic);
   addProjectListener(AppLogic);
   addItemListener(AppLogic);
   selectProjectListener(AppLogic);
   removeProjectListener(AppLogic);
   todoItemListener(AppLogic);
   editProjectListener(AppLogic);
}
