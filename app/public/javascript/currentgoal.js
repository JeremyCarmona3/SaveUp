window.onload=function(){
 console.log("currentgoal.js is ready")
 //////////////////////////////////////////////////////////


 // Event listeners
 var withdrawBtn = document.getElementById("withdrawBtn");
 withdrawBtn.addEventListener("click", withdraw);

 var saveupBtn = document.getElementById("saveupBtn");
 saveupBtn.addEventListener("click", saveup);

 var editGoalBtn = document.getElementById("editGoalBtn");
 editGoalBtn.addEventListener("click", editgoal);

 // Functions

 function withdraw() {
  console.log("money withdrawn from savings")
 }

 function saveup() {
  console.log("money added to savings")
 }

 function editgoal() {
  console.log("opening edit goal page")
 }

 ////////////////////////////////////////////////////////////
}