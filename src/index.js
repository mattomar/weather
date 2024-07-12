import { aaa, fetchWeatherData, fetchLastTwoCitiesWeather } from "./fetch";
import { initializeLocationSearch } from "./Country+State+District-City-Data"
import { updateWeatherUI, getDaysOfWeek, checkAndChangeBackground } from "./ui";
import { updateWeatherUI2, checkAndChangeBackground2 } from "./ui2";
import { updateWeatherUI3, checkAndChangeBackground3 } from "./ui3";


 
initializeLocationSearch()

const selectedCities = []
let city1 = null;
let city2 = null;




// Event listener to fetch weather data
document.getElementById('searchInput').addEventListener('change', function () {
    const selectedCity = this.value.trim(); // Get selected city from input
    if (selectedCity) {
        fetchWeatherData(selectedCity)
            .then(weatherData => {
                console.log('Weather data:', weatherData);
                getDaysOfWeek()
                checkAndChangeBackground()
                selectedCities.push(selectedCity);
                console.log(selectedCities)
                getLastTwoCities()
                fetchLastTwoCitiesWeather()
                updateWeatherUI()
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }
});

export function getLastTwoCities() {
    const lastIndex = selectedCities.length - 1;
      city1 = lastIndex >= 1 ? selectedCities[lastIndex - 1] : null;
      city2 = selectedCities[lastIndex];
    console.log(city1);
    return { city1, city2 };
}
document.querySelector('.day1').addEventListener('click', function () {
    updateWeatherUI();
    checkAndChangeBackground()

});


document.querySelector('.day2').addEventListener('click', function () {
    updateWeatherUI2();
    checkAndChangeBackground2()
});

document.querySelector('.day3').addEventListener('click', function () {
    updateWeatherUI3();
    checkAndChangeBackground3()

});


export { selectedCities, city1,city2 }



 
 