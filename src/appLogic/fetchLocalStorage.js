function fetchFromLocalStorage(AppLogic) {
   if (localStorage.getItem("projects")) {
      const JSONProjects = JSON.parse(localStorage.getItem("projects"));
      for (let i = 0; i < JSONProjects.length; i++) {
         AppLogic.addProject(JSONProjects[i].title);
         for (const JSONItem of JSONProjects[i].items) {
            AppLogic.projects[i].addItem(
               JSONItem.title,
               JSONItem.desc,
               new Date(JSONItem.dueDate),
               JSONItem.priority,
               JSONItem.checkedState
            );
         }
      }
   } else {
      // Default Project
      AppLogic.addProject("Groceries");
      AppLogic.projects[0].addItem(
         "Fruit",
         "Aisle 10",
         new Date(2014, 1, 11),
         "Low"
      );
      AppLogic.projects[0].addItem("Diary", "Aisle 13");
      AppLogic.projects[0].addItem("Meat", "Aisle 13", undefined, "High");
      AppLogic.projects[0].items[0].toggleCheck();

      AppLogic.addProject("Chores");
      AppLogic.projects[1].addItem(
         "Laundry",
         "Underwear",
         new Date(2024, 1, 11)
      );
      AppLogic.projects[1].addItem("Vacuuming", "It's Mat's turn");
      AppLogic.projects[1].addItem("Gardening", "Some description");
      AppLogic.projects[1].items[2].toggleCheck();

      AppLogic.addProject("Party");
      AppLogic.projects[2].addItem("Food", "10 people", new Date(2011, 1, 11));
      AppLogic.projects[2].addItem("Cake", "Sugarless");
      AppLogic.projects[2].addItem("DJ", "Classic");
      AppLogic.projects[2].items[0].toggleCheck();

      AppLogic.setSelectedProjectId(0);
   }
}

export { fetchFromLocalStorage };
