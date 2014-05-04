
function init ( )
{
  timeDisplay = document.createTextNode ( "" );
  document.getElementById("clock").appendChild ( timeDisplay );
}

function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  
  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;

}

// <body onload="updateClock(); setInterval('updateClock()', 1000 )"> runs updates clock every second. 

var playSound = false

var alarmTime = "700"

var alarm = function(){
  playSound = true
};
var currentHours = currentTime.getHours ( );
var currentMinutes = currentTime.getMinutes ( );
var currentSeconds = currentTime.getSeconds ( );
var rawTime = currentHours + currentMinutes + currentSeconds

var time_elapsed = 0
var checkinTimer = function(time_elapsed){
  time_elapsed++;
  console.log(time_elapsed)
}

var stop_timer = function(){
  document.getElementById('stop_timer').addEventListener('click')
}

if ( alarmTime == currentTimeString )
{
  alarm()
}
var time = 0
var updateTimer = function(){

  document.getElementById("count_up").firstChild.nodeValue = time;
  time++;
}




