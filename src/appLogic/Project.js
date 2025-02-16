import TodoItem from "./TodoItem";

export default (id, title) => {
   const items = [];
   let lastItemId = -1;
   let selectedItemId;

   function addItem(title, desc, dueDate, priority) {
      items.push(TodoItem(++lastItemId, title, desc, dueDate, priority));
   }

   function removeItem(itemId) {
      if (itemId === selectedItemId) selectedItemId = undefined;
      const itemIdx = items.findIndex((item) => item.id === itemId);
      items.splice(itemIdx, 1);
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
      removeItem,
      setSelectedItemId,
      getSelectedItem,
   };
};
