export default function (
   id,
   title,
   desc,
   dueDate = new Date(),
   priority = "Medium",
   checkedState = false
) {
   const toggleCheck = () => {
      checkedState = !checkedState;
   };

   function isChecked() {
      return checkedState;
   }

   return { id, title, desc, dueDate, priority, isChecked, toggleCheck };
}
