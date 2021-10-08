window.onload=function(){
 console.log("currentgoal.js is ready")
 //////////////////////////////////////////////////////////


 // Event listeners
 var withdrawBtn = document.getElementById("withdrawBtn");
 withdrawBtn.addEventListener("click", withdraw);
 withdrawBtn.addEventListener("mouseover", mouseover);

 var saveupBtn = document.getElementById("saveupBtn");
 saveupBtn.addEventListener("click", saveup);
 saveupBtn.addEventListener("mouseover", mouseover);

 var editGoalBtn = document.getElementById("editGoalBtn");
 editGoalBtn.addEventListener("click", editgoal);
 editGoalBtn.addEventListener("mouseover", mouseover);

 // Functions

 function mouseover() {
  console.log("moused over");
  this.style.cursor = "pointer";
 }

 function withdraw() {
  console.log("money withdrawn from savings")
  console.log("added to history and progress chart")


 }

 function saveup() {
  console.log("money added to savings")
  console.log("added to history and progress chart")


 }

 function editgoal() {
  console.log("opening edit goal page")


 }

 ////////////////////////////////////////////////////////////
}