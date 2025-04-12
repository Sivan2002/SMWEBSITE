// Function to animate number counting from 0 to the target value
function animateCounter(elementId, targetValue, duration) {
    let startValue = 0;
    const element = document.getElementById(elementId);
    const stepTime = Math.abs(Math.floor(duration / targetValue)); // Time between each increment

    const interval = setInterval(() => {
        startValue++;
        element.innerText = startValue + "+";
        
        if (startValue === targetValue) {
            clearInterval(interval);
        }
    }, stepTime);
}

// Wait until the page is fully loaded
window.onload = function() {
    // Call the animateCounter function for each stat
    animateCounter("clients-count", 50, 2000); // 50 clients, over 2 seconds
    animateCounter("experience-count", 20, 2000); // 20 years, over 2 seconds
};
