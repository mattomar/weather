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
    document.querySelector('.avg').textContent = avrgTemPF3;+"°"
    document.querySelector('.max').textContent = maxtemp_cF3+"°"
    document.querySelector('.min').textContent = mintemp_cF3+"°"
    document.querySelector('.condition').textContent = conditionTextF3
    document.querySelector('.day1').textContent = dayNameF1
    document.querySelector('.day2').textContent = dayNameF2
    document.querySelector('.day3').textContent = dayNameF3
    document.querySelector('.temp1').textContent = avrgTemPF1+"°"
    document.querySelector('.temp2').textContent = avrgTemPF2+"°"
    document.querySelector('.temp3').textContent = avrgTemPF3+"°"
    const statusElement = document.querySelector('.status');

    statusElement.style.backgroundImage = `url('${iconF3}')`;
    statusElement.style.backgroundSize = '50%';  
    statusElement.style.backgroundPosition = 'center';  
    statusElement.style.backgroundRepeat = 'no-repeat';  









    console.log(dayNameF3)
    // Update other UI elements as needed
}

export function checkAndChangeBackground3() {
    // Check if conditionF1 is defined properly and is mutable
    if (conditionF1 === 1000) {
        document.body.style.backgroundImage = "url('./images/sunny.jpg')";
    } else if (conditionF1 === 1003) {
        document.body.style.backgroundImage = "url('./images/p-cloudy.jpg')";
    } else if (conditionF1 === 1006) {
        document.body.style.backgroundImage = "url('./images/cloudy.jpg')";
    } else if (conditionF1 === 1009) {
        document.body.style.backgroundImage = "url('./images/overcast.jpg')";
    } else if (conditionF1 === 1030) {
        document.body.style.backgroundImage = "url('./images/mist.jpg')";
    } else if (conditionF1 === 1063) {
        document.body.style.backgroundImage = "url('./images/patchyrain.jpg')";
    } else if (conditionF1 === 1066) {
        document.body.style.backgroundImage = "url('./images/patchysnow.jpg')";
    } else if (conditionF1 === 1069) {
        document.body.style.backgroundImage = "url('./images/patchysleet.jpg')";
    } else if (conditionF1 === 1072) {
        document.body.style.backgroundImage = "url('./images/patchy-drizzle.jpg')";
    } else if (conditionF1 === 1087) {
        document.body.style.backgroundImage = "url('./images/thyunderyoutbreaks.jpg')";
    } else if (conditionF1 === 1114) {
        document.body.style.backgroundImage = "url('./images/snow.jpg')";
    } else if (conditionF1 === 1117) {
        document.body.style.backgroundImage = "url('./images/blizard.jpg')";
    } else if (conditionF1 === 1135) {
        document.body.style.backgroundImage = "url('./images/fog.jpg')";
    } else if (conditionF1 === 1147) {
        document.body.style.backgroundImage = "url('./images/freezing-fog.jpg')";
    } else if (conditionF1 === 1150) {
        document.body.style.backgroundImage = "url('./images/drizzle.jpg')";
    } else if (conditionF1 === 1153) {
        document.body.style.backgroundImage = "url('./images/drizzle.jpg')";
    } else if (conditionF1 === 1168) {
        document.body.style.backgroundImage = "url('./images/drizzle.jpg')";
    } else if (conditionF1 === 1171) {
        document.body.style.backgroundImage = "url('./images/drizzle.jpg')";
    } else if (conditionF1 === 1080) {
        document.body.style.backgroundImage = "url('./images/patchyrain.jpg')";
    } else if (conditionF1 === 1083) {
        document.body.style.backgroundImage = "url('./images/patchyrain.jpg')";
    } else if (conditionF1 === 1086) {
        document.body.style.backgroundImage = "url('./images/moderate-rain.jpg')";
    } else if (conditionF1 === 1189) {
        document.body.style.backgroundImage = "url('./images/moderate-rain.jpg')";
    } else if (conditionF1 === 1192) {
        document.body.style.backgroundImage = "url('./images/heavy-rain.jpg')";
    } else if (conditionF1 === 1195) {
        document.body.style.backgroundImage = "url('./images/heavy-rain.jpg')";
    } else if (conditionF1 === 1198) {
        document.body.style.backgroundImage = "url('./images/heavy-rain.jpg')";
    } else if (conditionF1 === 1201) {
        document.body.style.backgroundImage = "url('./images/heavy-rain.jpg')";
    } else if (conditionF1 === 1204) {
        document.body.style.backgroundImage = "url('./images/sleet.jpg')";
    } else if (conditionF1 === 1210) {
        document.body.style.backgroundImage = "url('./images/snow.jpg')";
    } else if (conditionF1 === 1213) {
        document.body.style.backgroundImage = "url('./images/snow.jpg')";
    } else if (conditionF1 === 1216) {
        document.body.style.backgroundImage = "url('./images/snow.jpg')";
    } else if (conditionF1 === 1219) {
        document.body.style.backgroundImage = "url('./images/snow.jpg')";
    } else if (conditionF1 === 1222) {
        document.body.style.backgroundImage = "url('./images/snow.jpg')";
    } else if (conditionF1 === 1225) {
        document.body.style.backgroundImage = "url('./images/snow.jpg')";
    } else if (conditionF1 === 1237) {
        document.body.style.backgroundImage = "url('./images/sleet.jpg')";
    } else if (conditionF1 === 1240) {
        document.body.style.backgroundImage = "url('./images/patchyrain.jpg')";
    } else if (conditionF1 === 1243) {
        document.body.style.backgroundImage = "url('./images/patchyrain.jpg')";
    } else if (conditionF1 === 1246) {
        document.body.style.backgroundImage = "url('./images/patchyrain.jpg')";
    } else if (conditionF1 === 1249) {
        document.body.style.backgroundImage = "url('./images/sleet.jpg')";
    } else if (conditionF1 === 1252) {
        document.body.style.backgroundImage = "url('./images/sleet.jpg')";
    } else if (conditionF1 === 1255) {
        document.body.style.backgroundImage = "url('./images/snow.jpg')";
    } else if (conditionF1 === 1258) {
        document.body.style.backgroundImage = "url('./images/snow.jpg')";
    } else if (conditionF1 === 1261) {
        document.body.style.backgroundImage = "url('./images/sleet.jpg')";
    } else if (conditionF1 === 1264) {
        document.body.style.backgroundImage = "url('./images/sleet.jpg')";
    } else if (conditionF1 === 1276) {
        document.body.style.backgroundImage = "url('./images/thunderstorm-heavy.jpg')";
    } else if (conditionF1 === 1273) {
        document.body.style.backgroundImage = "url('./images/thyunderyoutbreaks.jpg')";
    } else if (conditionF1 === 1279) {
        document.body.style.backgroundImage = "url('./images/snow.jpg')";
    } else if (conditionF1 === 1282) {
        document.body.style.backgroundImage = "url('./images/snow.jpg')";
    }

    // Optionally, set other background properties like repeat and size
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover"; // Adjust as per your image requirements
}