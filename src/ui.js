import {
    forecastDay1,
    forecastDay2,
    forecastDay3,
    avrgTemPF1,
    avrgTemPF2,
    avrgTemPF3,
    maxtemp_cF1,
    maxtemp_cF2,
    maxtemp_cF3,
    mintemp_cF1,
    mintemp_cF2,
    mintemp_cF3,
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
    dateF3
} from './fetch'
import { format, parseISO } from 'date-fns';



let dayNameF1 = undefined
let dayNameF2 = undefined
let dayNameF3 = undefined


/**
 * Function to get the day of the week from a date string.
 * @param {string} dateString - The date string in 'YYYY-MM-DD' format.
 * @returns {string} The full name of the day of the week (e.g., "Sunday", "Monday", etc.).
 */
export function getDaysOfWeek() {
    const parsedDateF1 = parseISO(dateF1);
    const parsedDateF2 = parseISO(dateF2);
    const parsedDateF3 = parseISO(dateF3);


    dayNameF1 = format(parsedDateF1, 'EEEE'); // 'EEEE' format gives full weekday name
    dayNameF2 = format(parsedDateF2, 'EEEE'); // 'EEEE' format gives full weekday name
    dayNameF3 = format(parsedDateF3, 'EEEE'); // 'EEEE' format gives full weekday name


    return dayNameF1, dayNameF2, dayNameF3;
}
export function updateWeatherUI() {
    // Update UI elements with weatherData
    // Example: assuming there are DOM manipulation methods
    document.querySelector('.avg').textContent = avrgTemPF1;
    document.querySelector('.max').textContent = maxtemp_cF1
    document.querySelector('.min').textContent = mintemp_cF1
    document.querySelector('.condition').textContent = conditionTextF1







    console.log(dayNameF3)
    // Update other UI elements as needed
}