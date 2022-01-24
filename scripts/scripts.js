let weatherDefault;

import {displayData} from './app.js'
import {success, error, options, currrentLongitude, currentLatitude} from './geolocation.js';


function getCityWeather(userInputCity, apiKey){
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInputCity}&appid=${apiKey}`).then(resp => resp.json()).then(data => weatherDefault = data);
}

function forGeoLocation(longitude, latitude, apiKey)
{
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=&appid=${apiKey}`).then(resp => resp.json()).then(data => {
        weatherDefault = data
        displayData()});
}

export {weatherDefault, getCityWeather, forGeoLocation}