import {weatherDefault, getDefaultCity, getCityWeather} from './scripts.js';
import convertoF from './conversions.js';

 let currentDegrees = document.getElementById('currentDegrees'),
 currentLowDegrees = document.getElementById('currentLowDegrees'),
 currentHighDegrees = document.getElementById('currentHighDegrees'),
 currenWind = document.getElementById('currenWind'),
 currentHumidity = document.getElementById('currentHumidity1'),
 currentDegrees1 = document.getElementById('currentDegrees1'),
 currentLowDegrees1 = document.getElementById('currentLowDegrees1'),
 currentHighDegrees1 = document.getElementById('currentHighDegrees1'),
 currentWind1 = document.getElementById('currentWind1'),
 currentHumidity1 = document.getElementById('currentHumidity1'),
 currentDegrees2 = document.getElementById('currentDegrees2'),
 currentLowDegrees2 = document.getElementById('currentLowDegrees2'),
 currentHighDegrees2 = document.getElementById('currentHighDegrees2'),
 currentWind2 = document.getElementById('currentWind2'),
 currentHumidity2 = document.getElementById('currentHumidity2'),
 currentDegrees3 = document.getElementById('currentDegrees3'),
 currentLowDegrees3 = document.getElementById('currentLowDegrees3'),
 currentHighDegrees3 = document.getElementById('currentHighDegrees3'),
 currentWind3 = document.getElementById('currentWind3'),
 currentHumidity3 = document.getElementById('currentHumidity3'),
 currentDegrees4 = document.getElementById('currentDegrees4'),
 currentLowDegrees4 = document.getElementById('currentLowDegrees4'),
 currentHighDegrees4 = document.getElementById('currentHighDegrees4'),
 currentWind4 = document.getElementById('currentWind4'),
 currentHumidity4 = document.getElementById('currentHumidity4'),
 currentDegrees5 = document.getElementById('currentDegrees5'),
 currentLowDegrees5 = document.getElementById('currentLowDegrees5'),
 currentHighDegrees5 = document.getElementById('currentHighDegrees5'),
 currentWind5 = document.getElementById('currentWind5'),
 currentHumidity5 = document.getElementById('currentHumidity5');


async function displayDefault(){
    await getDefaultCity();
    console.log(weatherDefault);
    currentDegrees.textContent = `${convertoF(weatherDefault.list[0].main.temp)}°F`;
    currentLowDegrees.textContent = `${convertoF(weatherDefault.list[0].main.temp_min)}°F`;
    currentHighDegrees.textContent = `${convertoF(weatherDefault.list[0].main.temp_max)}°F`;
    currenWind.textContent = `${(weatherDefault.list[0].wind.speed).toFixed(1)} km/hr`;
    currentHumidity.textContent = `${weatherDefault.list[0].main.humidity}%`;

    currentDegrees1.textContent = `${convertoF(weatherDefault.list[0].main.temp)}°F`;
    currentLowDegrees1.textContent = `${convertoF(weatherDefault.list[0].main.temp_min)}°F`;
    currentHighDegrees1.textContent = `${convertoF(weatherDefault.list[0].main.temp_max)}°F`;
    currentWind1.textContent = `${(weatherDefault.list[0].wind.speed).toFixed(1)}km/hr`;
    currentHumidity1.textContent = `${weatherDefault.list[0].main.humidity}%`;

    currentDegrees2.textContent = `${convertoF(weatherDefault.list[8].main.temp)}°F`;
    currentLowDegrees2.textContent = `${convertoF(weatherDefault.list[8].main.temp_min)}°F`;
    currentHighDegrees2.textContent = `${convertoF(weatherDefault.list[8].main.temp_max)}°F`;
    currentWind2.textContent = `${(weatherDefault.list[8].wind.speed).toFixed(1)}km/hr`;
    currentHumidity2.textContent = `${weatherDefault.list[8].main.humidity}%`;

    currentDegrees3.textContent = `${convertoF(weatherDefault.list[16].main.temp)}°F`;
    currentLowDegrees3.textContent = `${convertoF(weatherDefault.list[16].main.temp_min)}°F`;
    currentHighDegrees3.textContent = `${convertoF(weatherDefault.list[16].main.temp_max)}°F`;
    currentWind3.textContent = `${(weatherDefault.list[16].wind.speed).toFixed(1)}km/hr`;
    currentHumidity3.textContent = `${weatherDefault.list[16].main.humidity}%`;

    currentDegrees4.textContent = `${convertoF(weatherDefault.list[24].main.temp)}°F`;
    currentLowDegrees4.textContent = `${convertoF(weatherDefault.list[24].main.temp_min)}°F`;
    currentHighDegrees4.textContent = `${convertoF(weatherDefault.list[24].main.temp_max)}°F`;
    currentWind4.textContent = `${(weatherDefault.list[24].wind.speed).toFixed(1)}km/hr`;
    currentHumidity4.textContent = `${weatherDefault.list[24].main.humidity}%`;

    currentDegrees5.textContent = `${convertoF(weatherDefault.list[32].main.temp)}°F`;
    currentLowDegrees5.textContent = `${convertoF(weatherDefault.list[32].main.temp_min)}°F`;
    currentHighDegrees5.textContent = `${convertoF(weatherDefault.list[32].main.temp_max)}°F`;
    currentWind5.textContent = `${(weatherDefault.list[32].wind.speed).toFixed(1)}km/hr`;
    currentHumidity5.textContent = `${weatherDefault.list[32].main.humidity}%`;
};

displayDefault();
