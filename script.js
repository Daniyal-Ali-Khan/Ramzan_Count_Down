// Set the date we're counting down to (replace this with the Ramadan start date)
const ramadanStartDate = new Date('March 18, 2024 00:00:00 GMT+00:00').getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining until Ramadan starts
    const timeRemaining = ramadanStartDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown reaches zero, display a message and clear the interval
    if (timeRemaining <= 0) {
        countdownElement.innerHTML = 'Ramadan has started!';
        clearInterval(countdownInterval);
    }
}