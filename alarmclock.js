// function updateClock ( )
// {
//   var currentTime = new Date ( );
//   var currentHours = currentTime.getHours ( );
//   var currentMinutes = currentTime.getMinutes ( );
//   var currentSeconds = currentTime.getSeconds ( );
//   var alarmTime = "070000"
//   // Pad the minutes and seconds with leading zeros, if required
//   currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
//   currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

//   // Choose either "AM" or "PM" as appropriate
//   var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

//   // Convert the hours component to 12-hour format if needed
//   currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

//   // Convert an hours component of "0" to "12"
//   currentHours = ( currentHours == 0 ) ? 12 : currentHours;

//   // Compose the string for display
//   var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
//   var rawTime = currentHours + currentMinutes + currentSeconds
//   // Update the time display
//   document.getElementById("clock").firstChild.nodeValue = currentTimeString;

// }
  
// <body onload="updateClock(); setInterval('updateClock()', 1000 )"> runs updates clock every second. 

function init ( )
{
  timeDisplay = document.createTextNode ( "" );
  document.getElementById("clock").appendChild ( timeDisplay );
}

var enableDisable = function(){
  var hour = 7
  var currentTime = new Date ();
  var currentHour = currentTime.getHours(); 
  if ( hour == currentHour){
    document.getElementById("check_in").disabled = false;
    document.getElementById("check_in").style.display = 'block';
  }
  else
  {
    document.getElementById("check_in").disabled = true;
    document.getElementById("check_in").style.display = 'none';  
  }
}
setInterval(enableDisable, 1000);
enableDisable()




var time_elapsed = 0
var checkinTimer = function(time_elapsed){
  time_elapsed++;
  console.log(time_elapsed)
}
var stop_timer = function(){
  document.getElementById('check_in').addEventListener('click')
}

var time = 0
var updateTimer = function(){

  document.getElementById("count_up").firstChild.nodeValue = time;
  time++;
}




