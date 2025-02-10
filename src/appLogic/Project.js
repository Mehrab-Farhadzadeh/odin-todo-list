import TodoItem from "./TodoItem";

export default (title) => {
   const items = [];
   function addTodoItem(title, desc, dueDate, priority) {
      items.push(TodoItem(title, desc, dueDate, priority));
   }

   return { title, items, addTodoItem, isChecked: false };
};
