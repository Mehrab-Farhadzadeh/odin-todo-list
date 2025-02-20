import displayTodoList from "./displayTodoList";

export default function (AppLogic) {
   const dialog = document.querySelector("#editTodoItem");
   const confirmBtn = document.querySelector("#editTodoItem .confirm-btn");
   const projectList = document.querySelector("#projectList");

   const dueDate = document.querySelector("#editTodoItemDueDate");
   const title = document.querySelector("#editTodoItemTitle");
   const desc = document.querySelector("#editTodoItemDesc");
   const priority = document.querySelector("#editTodoItemPriority");

   confirmBtn.addEventListener("click", (e) => {
      e.preventDefault();
      AppLogic.getSelectedProject().editItem(
         title.value,
         desc.value,
         dueDate.valueAsDate,
         priority.value
      );

      // change the project
      // check if the selected project is changed
      const newSelectedProjectId = +projectList.selectedOptions[0].dataset.id;
      if (AppLogic.getSelectedProject().id !== newSelectedProjectId) {
         // add to new selected project
         AppLogic.getSelectedProjectById(newSelectedProjectId).addItem(
            title.value,
            desc.value,
            dueDate.valueAsDate,
            priority.value,
            AppLogic.getSelectedProject().getSelectedItem().isChecked()
         );
         // remove from previous project
         AppLogic.getSelectedProject().removeItem(
            AppLogic.getSelectedProject().getSelectedItem().id
         );
      }

      displayTodoList(AppLogic);
      dialog.close();
   });

   projectList.addEventListener("change", (e) => {
      console.log(e.target);
   });
}
