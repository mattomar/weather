import { aaa, fetchWeatherData } from "./fetch";
import { initializeLocationSearch } from "./Country+State+District-City-Data"
import { updateWeatherUI, getDaysOfWeek } from "./ui";



initializeLocationSearch()



// Event listener to fetch weather data
document.getElementById('searchInput').addEventListener('change', function () {
    const selectedCity = this.value.trim(); // Get selected city from input
    if (selectedCity) {
        fetchWeatherData(selectedCity)
            .then(weatherData => {
                console.log('Weather data:', weatherData);
                getDaysOfWeek()
                updateWeatherUI()
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }
});



