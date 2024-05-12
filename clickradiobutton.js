// Get all radio inputs
const radioInputs = document.querySelectorAll('input[type="radio"]');

// Function to simulate tabbing through radio inputs
function simulateTab() {
    let currentIndex = -1;

    return function() {
        currentIndex++;
        if (currentIndex < radioInputs.length) {
            radioInputs[currentIndex].click();
        } else {
            console.log("All radio inputs clicked");
            clearInterval(interval);
        }
    };
}

// Start simulating tabbing through radio inputs
const tabThroughInputs = simulateTab();
const interval = setInterval(tabThroughInputs, 500); // Adjust the interval (in milliseconds) as needed
