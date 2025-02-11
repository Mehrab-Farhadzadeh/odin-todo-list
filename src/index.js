import "./style.css";
import AppLogic from "./appLogic/AppLogic";
import domLogic from "./domLogic/domLogic";

// Default Project
AppLogic.addProject("Groceries");
AppLogic.projects[0].addItem("Fruit", "Aisle 10", new Date(2014, 1, 11));
AppLogic.projects[0].addItem("Diary", "Aisle 13");
AppLogic.projects[0].addItem("Meat", "Aisle 13");
AppLogic.projects[0].items[0].toggleCheck();
console.log(AppLogic.projects);

domLogic(AppLogic);