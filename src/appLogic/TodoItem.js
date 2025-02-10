export default function (
   title,
   desc,
   dueDate = new Date(),
   priority = "Medium"
) {

   function toggleCheck() {
      this.isChecked = !this.isChecked;
   }
   
   return { title, desc, dueDate, priority, isChecked: false, toggleCheck };
}
