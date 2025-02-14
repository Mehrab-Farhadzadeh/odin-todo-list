import TodoItem from "./TodoItem";

export default (id, title) => {
   const items = [];
   let lastItemId = -1;
   let selectedItemId;

   function addItem(title, desc, dueDate, priority) {
      items.push(TodoItem(++lastItemId, title, desc, dueDate, priority));
   }

   function setSelectedItemId(id) {
      selectedItemId = id;
   }

   function getSelectedItem() {
      return items.find((item) => item.id === selectedItemId);
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
      setSelectedItemId,
      getSelectedItem,
   };
};
