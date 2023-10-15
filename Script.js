// Script.js

// Wait for the document to be fully loaded before adding interactivity
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the button with the class "country-btn"
    const countryButton = document.querySelector(".country-btn");

    // Add a click event listener to the button
    countryButton.addEventListener("click", function () {
        // Display an alert when the button is clicked
        alert("Button clicked!");
    });
});
