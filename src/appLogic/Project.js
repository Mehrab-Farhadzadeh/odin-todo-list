import TodoItem from "./TodoItem";

export default (id, title) => {
   const items = [];
   let lastItemId = 0;
   function addItem(title, desc, dueDate, priority) {
      items.push(TodoItem(lastItemId++, title, desc, dueDate, priority));
   }

   function deleteItem(index) {
      items.splice(index, 1);
   }

   function toggleCheck() {
      this.isChecked = !this.isChecked;
   }

   return {
      id,
      title,
      items,
      isChecked: false,
      toggleCheck,
      addItem,
      deleteItem,
   };
};
