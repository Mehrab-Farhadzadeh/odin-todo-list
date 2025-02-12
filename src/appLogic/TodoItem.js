export default function (
   id,
   title,
   desc,
   dueDate = new Date(),
   priority = "Medium"
) {
   function toggleCheck() {
      this.isChecked = !this.isChecked;
   }

   return { id, title, desc, dueDate, priority, isChecked: false, toggleCheck };
}
