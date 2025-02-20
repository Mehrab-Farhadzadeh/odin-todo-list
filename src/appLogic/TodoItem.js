export default function (
   id,
   title,
   desc,
   dueDate = new Date(),
   priority = "Medium",
   checkedState = false
) {
   function toggleCheck() {
      this.checkedState = !this.checkedState;
   }

   function isChecked() {
      return this.checkedState;
   }

   return {
      id,
      title,
      desc,
      dueDate,
      priority,
      checkedState,
      isChecked,
      toggleCheck,
   };
}
