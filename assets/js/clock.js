function updateClock(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    // Convert '0' to '12'
    hours = hours ? hours : 12;
  
    // Pad the time values with a zero if they are a single digit
    hours = hours < 10 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
  
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  
    var clock = document.getElementById('digital-clock');
    clock.textContent = timeString;
}

// Update the clock immediately and then update every second afterwards
updateClock();
setInterval(updateClock, 1000);
