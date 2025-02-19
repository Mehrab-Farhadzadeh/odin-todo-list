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

   function editItem(title, desc, dueDate, priority) {
      const item = getSelectedItem();
      if (item) {
         item.title = title;
         item.desc = desc;
         item.dueDate = dueDate;
         item.priority = priority;
      }
   }

   function setSelectedItemId(id) {
      selectedItemId = id;
   }

   function getSelectedItem() {
      return items.find((item) => item.id === selectedItemId);
   }

   function toggleCheck(selectedItemId) {
      items.find((item) => item.id === selectedItemId).toggleCheck();
   }

   return {
      id,
      title,
      items,
      isChecked: false,
      toggleCheck,
      addItem,
      removeItem,
      editItem,
      setSelectedItemId,
      getSelectedItem,
   };
};
