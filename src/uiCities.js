import { iconC1,iconC2,avrgTemC1,avrgTemC2 ,conditionC1, conditionC2   } from "./fetch";
import { city1,city2, selectedCities } from ".";
export function updateWeatherUICity() {
    // Update UI elements with weatherData
    const iconElement1 = document.querySelector('.icon-upper1');
    const iconElement2 = document.querySelector('.icon-upper2');

    iconElement1.style.backgroundImage = `url('${iconC1}')`;
    iconElement1.style.backgroundSize = '100%';  
    iconElement1.style.backgroundPosition = 'center';  
    iconElement1.style.backgroundRepeat = 'no-repeat';  

    iconElement2.style.backgroundImage = `url('${iconC2}')`;
    iconElement2.style.backgroundSize = '100%';  
    iconElement2.style.backgroundPosition = 'center';  
    iconElement2.style.backgroundRepeat = 'no-repeat';  

    document.querySelector('.temp-upper1').textContent = avrgTemC1;
    document.querySelector('.temp-upper2').textContent = avrgTemC2;

    document.querySelector('.condition1').textContent = conditionC1;
    document.querySelector('.condition2').textContent = conditionC2;


    if (selectedCities.length > 1) {
        document.querySelector('.location1').textContent = city1;
        document.querySelector('.location2').textContent = city2;
    } else if (selectedCities.length === 1) {
        document.querySelector('.location1').textContent = selectedCities[0];
        document.querySelector('.location2').textContent = '';
    } else {
        document.querySelector('.location1').textContent = '';
        document.querySelector('.location2').textContent = '';
    }

    console.log(city1);
}