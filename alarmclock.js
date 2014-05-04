

window.onload = function() {
    // document.getElementById('count_down').style.visiblity = 'hidden'
    document.getElementById('start').addEventListener('click', function() {
    document.getElementById('start').innerHTML = "STAY AWAKE"
    setInterval(im_still_awake, 1000)
    // im_still_awake();
    document.getElementById('count_down').style.visbility = 'visible'
    displayTimeLeft();
    setInterval(displayTimeLeft, 1000)
    })
    setInterval(enableDisable, 1000); // checks enableDisable
    enableDisable()
    updateClock()
    setInterval(updateClock,1000)
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
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + " " + timeOfDay;
  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;

}
  
// // <body onload="updateClock(); setInterval('updateClock()', 1000 )"> runs updates clock every second. 

// // timer starts when alarm starts
// // button appears when alarm starts 
// //checkin to GTFU -> on click says STFU -> 


var enableDisable = function(){
  
  if ( time_left == 0 ){
    document.getElementById('end').style.visibility = 'visible';
    document.getElementById('end').addEventListener('click', function() {
        document.getElementById('end').innerHTML = "GOOD. NOW GET THE F*CK OUT OF BED"
    })
  }
  else
  {
    document.getElementById("end").style.visibility = 'hidden';  
  }
}
  
var displayTimeLeft = function(){
  document.getElementById('count_down').firstChild.nodeValue = time_left;
}

var time_left = 10
var im_still_awake = function(){
  if (time_left > 0) 
  {
    time_left--;
  }
}
