// Get the current time in Europe/Budapest timezone
const now = new Date().toLocaleString('en-US', { timeZone: 'Europe/Budapest' });

// Get the current day of the week (0 = Sunday, 6 = Saturday)
const dayOfWeek = new Date(now).getDay();

// Get the current hour
const hour = new Date(now).getHours();

// Display the appropriate status based on the day and time
const currentStatus = document.getElementById('current-status');

if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    if (hour >= 7 && hour < 17) {
        currentStatus.innerHTML = "Working <span class='blinking'>👷🏼</span>";
    } else if (hour >= 21 && hour < 24) {
        currentStatus.innerHTML = "Tinkering <span class='blinking'>👨🏻‍💻</span>";
    } else if (hour >= 0 && hour < 6) {
        currentStatus.innerHTML = "Sleeping <span class='blinking'>💤</span>";
    } else {
        currentStatus.innerHTML = "Tinkering <span class='blinking'>👨🏻‍💻</span>";
    }
} else {
    currentStatus.innerHTML = "Tinkering <span class='blinking'>👨🏻‍💻</span>";
}

// CSS for blinking animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes blink {
        0% { visibility: visible; }
        50% { visibility: hidden; }
        100% { visibility: visible; }
    }
    .blinking {
        animation: blink 2s steps(1, start) infinite;
    }
`;
document.head.appendChild(style);
