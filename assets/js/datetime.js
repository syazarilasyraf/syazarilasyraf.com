// Get current date and time in Budapest Time
var now = new Date();
var budapestOptions = { timeZone: 'Europe/Budapest' };
var budapestTime = now.toLocaleString('en-US', { ...budapestOptions, hour12: false });

// Extract hours and minutes in 24-hour format
var [hours24, minutes] = budapestTime.split(',')[1].trim().split(':');

// Create a string in the format "HH:mm"
var time = hours24 + ':' + minutes;

// Insert date and time into HTML
document.getElementById("datetime").innerHTML = time;
