import { selectedCity } from "./Country+State+District-City-Data";
let avrgTemPF1 = null;
let avrgTemPF2 = null;
let avrgTemPF3 = null;
let maxtemp_cF1 = null;
let maxtemp_cF2 = null;
let maxtemp_cF3 = null;
let conditionF1 = null;
let conditionF2 = null;
let conditionF3 = null;
let iconF1 = null;
let iconF2 = null;
let iconF3 = null;
let conditionTextF1 = null;
let conditionTextF2 = null;
let conditionTextF3 = null;
let dateF1 = null;
let dateF2 = null;
let dateF3 = null;
let mintemp_cF1 = null
let mintemp_cF2 = null
let mintemp_cF3 = null





export async function fetchWeatherData(selectedCity) {
    try {
        const apiKey = 'e8380e9f23134e7aa2470254242206';
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${selectedCity}&days=3`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Assign values to the exported constants
        const forecastDay1 = data.forecast.forecastday[0];
        const forecastDay2 = data.forecast.forecastday[1];
        const forecastDay3 = data.forecast.forecastday[2];

        avrgTemPF1 = forecastDay1.day.avgtemp_c;
        avrgTemPF2 = forecastDay2.day.avgtemp_c;
        avrgTemPF3 = forecastDay3.day.avgtemp_c;

        maxtemp_cF1 = forecastDay1.day.maxtemp_c;
        maxtemp_cF2 = forecastDay2.day.maxtemp_c;
        maxtemp_cF3 = forecastDay3.day.maxtemp_c;

        conditionF1 = forecastDay1.day.condition.code;
        conditionF2 = forecastDay2.day.condition.code;
        conditionF3 = forecastDay3.day.condition.code;

        iconF1 = forecastDay1.day.condition.icon;
        iconF2 = forecastDay2.day.condition.icon;
        iconF3 = forecastDay3.day.condition.icon;

        conditionTextF1 = forecastDay1.day.condition.text;
        conditionTextF2 = forecastDay2.day.condition.text;
        conditionTextF3 = forecastDay3.day.condition.text;

        dateF1 = forecastDay1.date;
        dateF2 = forecastDay2.date;
        dateF3 = forecastDay3.date;

        mintemp_cF1 = forecastDay1.day.mintemp_c
        mintemp_cF2 = forecastDay2.day.mintemp_c
        mintemp_cF3 = forecastDay3.day.mintemp_c

 

        return {
            forecastDay1,
            forecastDay2,
            forecastDay3,
        };

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

 



 

export {
    avrgTemPF1,
    avrgTemPF2,
    avrgTemPF3,
    maxtemp_cF1,
    maxtemp_cF2,
    maxtemp_cF3,
    conditionF1,
    conditionF2,
    conditionF3,
    iconF1,
    iconF2,
    iconF3,
    conditionTextF1,
    conditionTextF2,
    conditionTextF3,
    dateF1,
    dateF2,
    dateF3,
    mintemp_cF1,
    mintemp_cF2,
    mintemp_cF3
};


