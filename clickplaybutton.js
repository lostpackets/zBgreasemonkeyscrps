function clickPlayButtons() {
    const playButtons = document.querySelectorAll('div.play-button.bounce');
    playButtons.forEach(button => {
        button.click();
    });
}

// Call the function initially
clickPlayButtons();

// Set interval to continuously check for new play buttons
setInterval(clickPlayButtons, 300); // Adjust the interval (in milliseconds) as needed
