import TodoItem from "./TodoItem";

export default (title) => {
   const items = [];
   function addItem(title, desc, dueDate, priority) {
      items.push(TodoItem(title, desc, dueDate, priority));
   }

   function deleteItem(index) {
      items.splice(index, 1);
   }

   function toggleCheck() {
      this.isChecked = !this.isChecked;
   }

   return { title, items, isChecked: false, toggleCheck, addItem, deleteItem };
};
