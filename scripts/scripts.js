let weatherDefault;

import {displayData} from './app.js'
import {success, error, options, currrentLongitude, currentLatitude} from './geolocation.js';

function getCityWeather(userInputCity){
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInputCity}&appid=e6a6df4d7f01f6e8e6a96e582a67ae93`).then(resp => resp.json()).then(data => weatherDefault = data);
}

function forGeoLocation(longitude, latitude)
{
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=&appid=e6a6df4d7f01f6e8e6a96e582a67ae93`).then(resp => resp.json()).then(data => {
        weatherDefault = data
        displayData()});
}

function errorMsg(){
    alert('gay')
}

export {weatherDefault, getCityWeather, forGeoLocation}