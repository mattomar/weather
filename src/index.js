import { fetchWeatherData } from "./fetch";

fetchWeatherData()
  .then(function(data) {
    // Success handling: `data` contains the weather data
    console.log('Weather data:', data);
    // Perform further operations with the data
  })
  .catch(function(error) {
    // Error handling
    console.error('Error fetching data:', error);
  });
 
  

window.onload = function () {
    var searchInput = document.getElementById("searchInput");
    var locationDisplay = document.getElementById("locationDisplay");

    // Function to update location display
    searchInput.addEventListener("input", function() {
        var userInput = this.value.trim();
        locationDisplay.textContent = userInput;
    });
};