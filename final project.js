//Function shows alert//
function showAlert(){
  //get current dates//
  var todaysDate=new Date();

  var displayDate=(todaysDate.getMonth()+1)+"/"+todaysDate.getDate()+"/"+todaysDate.getFullYear();

  alert("Today's date is:" + displayDate);
}

function changeColor(){
   document.getElementById("btnAlert").style.backgroundColor="gold";
}

function revertColor(){
  document.getElementById("btnAlert").style.backgroundColor="red";
}