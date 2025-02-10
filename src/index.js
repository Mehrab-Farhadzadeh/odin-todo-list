import "./style.css";
import AppLogic from "./appLogic/AppLogic";
// import domLogic from "./domLogic/domLogic";

// domLogic(AppLogic);

AppLogic.addProject("Groceries");
AppLogic.projects[0].addTodoItem("Fruit", "Aisle 10");
AppLogic.projects[0].addTodoItem("Diary", "Aisle 13");
console.log(AppLogic.projects);
