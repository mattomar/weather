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
    let imageUrl;

    switch (conditionF3) {
        case 1000:
            imageUrl = "./images/sunny.jpg";
            break;
        case 1003:
            imageUrl = "./images/p-cloudy.jpg";
            break;
        case 1006:
            imageUrl = "./images/cloudy.jpg";
            break;
        case 1009:
            imageUrl = "./images/overcast.jpg";
            break;
        case 1030:
            imageUrl = "./images/mist.jpg";
            break;
        case 1063:
            imageUrl = "./images/patchyrain.jpg";
            break;
        case 1066:
            imageUrl = "./images/patchysnow.jpg";
            break;
        case 1069:
            imageUrl = "./images/patchysleet.jpg";
            break;
        case 1072:
            imageUrl = "./images/patchy-drizzle.jpg";
            break;
        case 1087:
            imageUrl = "./images/thyunderyoutbreaks.jpg";
            break;
        case 1114:
            imageUrl = "./images/snow.jpg";
            break;
        case 1117:
            imageUrl = "./images/blizard.jpg";
            break;
        case 1135:
            imageUrl = "./images/fog.jpg";
            break;
        case 1147:
            imageUrl = "./images/freezing-fog.jpg";
            break;
        case 1150:
        case 1153:
        case 1168:
        case 1171:
            imageUrl = "./images/drizzle.jpg";
            break;
        case 1080:
        case 1083:
            imageUrl = "./images/patchyrain.jpg";
            break;
        case 1086:
        case 1189:
            imageUrl = "./images/moderate-rain.jpg";
            break;
        case 1192:
        case 1195:
        case 1198:
        case 1201:
            imageUrl = "./images/heavy-rain.jpg";
            break;
        case 1204:
        case 1237:
        case 1249:
        case 1252:
        case 1255:
        case 1258:
            imageUrl = "./images/sleet.jpg";
            break;
        case 1210:
        case 1213:
        case 1216:
        case 1219:
        case 1222:
        case 1225:
            imageUrl = "./images/snow.jpg";
            break;
        case 1240:
        case 1243:
        case 1246:
            imageUrl = "./images/patchyrain.jpg";
            break;
        case 1261:
        case 1264:
            imageUrl = "./images/sleet.jpg";
            break;
        case 1276:
            imageUrl = "./images/thunderstorm-heavy.jpg";
            break;
        case 1273:
            imageUrl = "./images/thyunderyoutbreaks.jpg";
            break;
        case 1279:
        case 1282:
            imageUrl = "./images/snow.jpg";
            break;
        default:
            // Default image if no condition matches
            imageUrl = "./images/default.jpg";
            break;
    }

    document.body.style.backgroundImage = `url('${imageUrl}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover"; // Adjust as per your image requirements
}