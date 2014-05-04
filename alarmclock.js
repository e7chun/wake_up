function updateClock ( )
{
  var currentTime = new Date ( );
  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
  var alarmTime = "070000"
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
  var rawTime = currentHours + currentMinutes + currentSeconds
  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;

}
  
// <body onload="updateClock(); setInterval('updateClock()', 1000 )"> runs updates clock every second. 

// timer starts when alarm starts
// button appears when alarm starts 
//checkin to GTFU -> on click says STFU -> 
window.onload = function() {
    document.getElementById('check_in').addEventListener('click', function() {
    document.getElementById('check_in').innerHTML = "<h1>STAY THE FUCK UP</h1>"
    setInterval(enableDisable, 1000); // checks enableDisable
    enableDisable()
    })
}

var enableDisable = function(){
  var hour = 12
  var currentHour = 12
  if ( hour == currentHour){
    document.getElementById('check_in').disabled = true;
    document.getElementById('check_in').style.display = 'none';
  }
  else
  {
    document.getElementById("check_in").disabled = true;
    document.getElementById("check_in").style.display = 'none';  
  }
}
window. onload = function() { 
  }
// enable disables a button or somethn  i could do some inline crap to make it do something else.. i guess?

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




