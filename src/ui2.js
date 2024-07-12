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

import { dayNameF1, dayNameF2,dayNameF3 } from './ui';
 
 
export function updateWeatherUI2() {
    // Update UI elements with weatherData
    // Example: assuming there are DOM manipulation methods
    document.querySelector('.avg').textContent = avrgTemPF2;+"°"
    document.querySelector('.max').textContent = maxtemp_cF2+"°"
    document.querySelector('.min').textContent = mintemp_cF2+"°"
    document.querySelector('.condition').textContent = conditionTextF2
    document.querySelector('.day1').textContent = dayNameF1
    document.querySelector('.day2').textContent = dayNameF2
    document.querySelector('.day3').textContent = dayNameF3
    document.querySelector('.temp1').textContent = avrgTemPF1+"°"
    document.querySelector('.temp2').textContent = avrgTemPF2+"°"
    document.querySelector('.temp3').textContent = avrgTemPF3+"°"
    const statusElement = document.querySelector('.status');

    statusElement.style.backgroundImage = `url('${iconF2}')`;
    statusElement.style.backgroundSize = '50%';  
    statusElement.style.backgroundPosition = 'center';  
    statusElement.style.backgroundRepeat = 'no-repeat';  










    console.log(dayNameF3)
    // Update other UI elements as needed
}

export function checkAndChangeBackground2() {
    // Check if conditionF2 is defined properly and is mutable
    if (conditionF2 === 1000) {
        document.body.style.backgroundImage = "url('/src/images/sunny.jpg')";
    } else if (conditionF2 === 1003) {
        document.body.style.backgroundImage = "url('/src/images/p-cloudy.jpg')";
    } else if (conditionF2 === 1006) {
        document.body.style.backgroundImage = "url('/src/images/cloudy.jpg')";
    } else if (conditionF2 === 1009) {
        document.body.style.backgroundImage = "url('/src/images/overcast.jpg')";
    } else if (conditionF2 === 1030) {
        document.body.style.backgroundImage = "url('/src/images/mist.jpg')";
    } else if (conditionF2 === 1063) {
        document.body.style.backgroundImage = "url('/src/images/patchyrain.jpg')";
    } else if (conditionF2 === 1066) {
        document.body.style.backgroundImage = "url('/src/images/patchysnow.jpg')";
    } else if (conditionF2 === 1069) {
        document.body.style.backgroundImage = "url('/src/images/patchysleet.jpg')";
    } else if (conditionF2 === 1072) {
        document.body.style.backgroundImage = "url('/src/images/patchy-drizzle.jpg')";
    } else if (conditionF2 === 1087) {
        document.body.style.backgroundImage = "url('/src/images/thyunderyoutbreaks.jpg')";
    } else if (conditionF2 === 1114) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF2 === 1117) {
        document.body.style.backgroundImage = "url('/src/images/blizard.jpg')";
    } else if (conditionF2 === 1135) {
        document.body.style.backgroundImage = "url('/src/images/fog.jpg')";
    } else if (conditionF2 === 1147) {
        document.body.style.backgroundImage = "url('/src/images/freezing-fog.jpg')";
    } else if (conditionF2 === 1150) {
        document.body.style.backgroundImage = "url('/src/images/drizzle.jpg')";
    } else if (conditionF2 === 1153) {
        document.body.style.backgroundImage = "url('/src/images/drizzle.jpg')";
    } else if (conditionF2 === 1168) {
        document.body.style.backgroundImage = "url('/src/images/drizzle.jpg')";
    } else if (conditionF2 === 1171) {
        document.body.style.backgroundImage = "url('/src/images/drizzle.jpg')";
    } else if (conditionF2 === 1080) {
        document.body.style.backgroundImage = "url('/src/images/patchyrain.jpg')";
    } else if (conditionF2 === 1083) {
        document.body.style.backgroundImage = "url('/src/images/patchyrain.jpg')";
    } else if (conditionF2 === 1086) {
        document.body.style.backgroundImage = "url('/src/images/moderate-rain.jpg')";
    } else if (conditionF2 === 1189) {
        document.body.style.backgroundImage = "url('/src/images/moderate-rain.jpg')";
    } else if (conditionF2 === 1192) {
        document.body.style.backgroundImage = "url('/src/images/heavy-rain.jpg')";
    } else if (conditionF2 === 1195) {
        document.body.style.backgroundImage = "url('/src/images/heavy-rain.jpg')";
    } else if (conditionF2 === 1198) {
        document.body.style.backgroundImage = "url('/src/images/heavy-rain.jpg')";
    } else if (conditionF2 === 1201) {
        document.body.style.backgroundImage = "url('/src/images/heavy-rain.jpg')";
    } else if (conditionF2 === 1204) {
        document.body.style.backgroundImage = "url('/src/images/sleet.jpg')";
    } else if (conditionF2 === 1210) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF2 === 1213) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF2 === 1216) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF2 === 1219) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF2 === 1222) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF2 === 1225) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF2 === 1237) {
        document.body.style.backgroundImage = "url('/src/images/sleet.jpg')";
    } else if (conditionF2 === 1240) {
        document.body.style.backgroundImage = "url('/src/images/patchyrain.jpg')";
    } else if (conditionF2 === 1243) {
        document.body.style.backgroundImage = "url('/src/images/patchyrain.jpg')";
    } else if (conditionF2 === 1246) {
        document.body.style.backgroundImage = "url('/src/images/patchyrain.jpg')";
    } else if (conditionF2 === 1249) {
        document.body.style.backgroundImage = "url('/src/images/sleet.jpg')";
    } else if (conditionF2 === 1252) {
        document.body.style.backgroundImage = "url('/src/images/sleet.jpg')";
    } else if (conditionF2 === 1255) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF2 === 1258) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF2 === 1261) {
        document.body.style.backgroundImage = "url('/src/images/sleet.jpg')";
    } else if (conditionF2 === 1264) {
        document.body.style.backgroundImage = "url('/src/images/sleet.jpg')";
    } else if (conditionF2 === 1276) {
        document.body.style.backgroundImage = "url('/src/images/thunderstorm-heavy.jpg')";
    } else if (conditionF2 === 1273) {
        document.body.style.backgroundImage = "url('/src/images/thyunderyoutbreaks.jpg')";
    } else if (conditionF2 === 1279) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF2 === 1282) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    }
    
    // Optionally, set other background properties like repeat and size
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover"; // Adjust as per your image requirements
}