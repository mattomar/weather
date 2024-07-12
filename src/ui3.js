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

 
export function updateWeatherUI3() {
    // Update UI elements with weatherData
    // Example: assuming there are DOM manipulation methods
    document.querySelector('.avg').textContent = avrgTemPF3;
    document.querySelector('.max').textContent = maxtemp_cF3
    document.querySelector('.min').textContent = mintemp_cF3
    document.querySelector('.condition').textContent = conditionTextF3
    document.querySelector('.day1').textContent = dayNameF1
    document.querySelector('.day2').textContent = dayNameF2
    document.querySelector('.day3').textContent = dayNameF3
    document.querySelector('.temp1').textContent = avrgTemPF1
    document.querySelector('.temp2').textContent = avrgTemPF2
    document.querySelector('.temp3').textContent = avrgTemPF3
    const statusElement = document.querySelector('.status');

    statusElement.style.backgroundImage = `url('${iconF3}')`;
    statusElement.style.backgroundSize = '50%';  
    statusElement.style.backgroundPosition = 'center';  
    statusElement.style.backgroundRepeat = 'no-repeat';  









    console.log(dayNameF3)
    // Update other UI elements as needed
}

export function checkAndChangeBackground3() {
    // Check if conditionF3 is defined properly and is mutable
    if (conditionF3 === 1000) {
        document.body.style.backgroundImage = "url('/src/images/sunny.jpg')";
    } else if (conditionF3 === 1003) {
        document.body.style.backgroundImage = "url('/src/images/p-cloudy.jpg')";
    } else if (conditionF3 === 1006) {
        document.body.style.backgroundImage = "url('/src/images/cloudy.jpg')";
    } else if (conditionF3 === 1009) {
        document.body.style.backgroundImage = "url('/src/images/overcast.jpg')";
    } else if (conditionF3 === 1030) {
        document.body.style.backgroundImage = "url('/src/images/mist.jpg')";
    } else if (conditionF3 === 1063) {
        document.body.style.backgroundImage = "url('/src/images/patchyrain.jpg')";
    } else if (conditionF3 === 1066) {
        document.body.style.backgroundImage = "url('/src/images/patchysnow.jpg')";
    } else if (conditionF3 === 1069) {
        document.body.style.backgroundImage = "url('/src/images/patchysleet.jpg')";
    } else if (conditionF3 === 1072) {
        document.body.style.backgroundImage = "url('/src/images/patchy-drizzle.jpg')";
    } else if (conditionF3 === 1087) {
        document.body.style.backgroundImage = "url('/src/images/thyunderyoutbreaks.jpg')";
    } else if (conditionF3 === 1114) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF3 === 1117) {
        document.body.style.backgroundImage = "url('/src/images/blizard.jpg')";
    } else if (conditionF3 === 1135) {
        document.body.style.backgroundImage = "url('/src/images/fog.jpg')";
    } else if (conditionF3 === 1147) {
        document.body.style.backgroundImage = "url('/src/images/freezing-fog.jpg')";
    } else if (conditionF3 === 1150) {
        document.body.style.backgroundImage = "url('/src/images/drizzle.jpg')";
    } else if (conditionF3 === 1153) {
        document.body.style.backgroundImage = "url('/src/images/drizzle.jpg')";
    } else if (conditionF3 === 1168) {
        document.body.style.backgroundImage = "url('/src/images/drizzle.jpg')";
    } else if (conditionF3 === 1171) {
        document.body.style.backgroundImage = "url('/src/images/drizzle.jpg')";
    } else if (conditionF3 === 1080) {
        document.body.style.backgroundImage = "url('/src/images/patchyrain.jpg')";
    } else if (conditionF3 === 1083) {
        document.body.style.backgroundImage = "url('/src/images/patchyrain.jpg')";
    } else if (conditionF3 === 1086) {
        document.body.style.backgroundImage = "url('/src/images/moderate-rain.jpg')";
    } else if (conditionF3 === 1189) {
        document.body.style.backgroundImage = "url('/src/images/moderate-rain.jpg')";
    } else if (conditionF3 === 1192) {
        document.body.style.backgroundImage = "url('/src/images/heavy-rain.jpg')";
    } else if (conditionF3 === 1195) {
        document.body.style.backgroundImage = "url('/src/images/heavy-rain.jpg')";
    } else if (conditionF3 === 1198) {
        document.body.style.backgroundImage = "url('/src/images/heavy-rain.jpg')";
    } else if (conditionF3 === 1201) {
        document.body.style.backgroundImage = "url('/src/images/heavy-rain.jpg')";
    } else if (conditionF3 === 1204) {
        document.body.style.backgroundImage = "url('/src/images/sleet.jpg')";
    } else if (conditionF3 === 1210) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF3 === 1213) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF3 === 1216) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF3 === 1219) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF3 === 1222) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF3 === 1225) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF3 === 1237) {
        document.body.style.backgroundImage = "url('/src/images/sleet.jpg')";
    } else if (conditionF3 === 1240) {
        document.body.style.backgroundImage = "url('/src/images/patchyrain.jpg')";
    } else if (conditionF3 === 1243) {
        document.body.style.backgroundImage = "url('/src/images/patchyrain.jpg')";
    } else if (conditionF3 === 1246) {
        document.body.style.backgroundImage = "url('/src/images/patchyrain.jpg')";
    } else if (conditionF3 === 1249) {
        document.body.style.backgroundImage = "url('/src/images/sleet.jpg')";
    } else if (conditionF3 === 1252) {
        document.body.style.backgroundImage = "url('/src/images/sleet.jpg')";
    } else if (conditionF3 === 1255) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF3 === 1258) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF3 === 1261) {
        document.body.style.backgroundImage = "url('/src/images/sleet.jpg')";
    } else if (conditionF3 === 1264) {
        document.body.style.backgroundImage = "url('/src/images/sleet.jpg')";
    } else if (conditionF3 === 1276) {
        document.body.style.backgroundImage = "url('/src/images/thunderstorm-heavy.jpg')";
    } else if (conditionF3 === 1273) {
        document.body.style.backgroundImage = "url('/src/images/thyunderyoutbreaks.jpg')";
    } else if (conditionF3 === 1279) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    } else if (conditionF3 === 1282) {
        document.body.style.backgroundImage = "url('/src/images/snow.jpg')";
    }
    
    // Optionally, set other background properties like repeat and size
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover"; // Adjust as per your image requirements
}