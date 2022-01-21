let userInputCity;
let weatherDefault;
let weatherForecastINFO;

function getDefaultCity(){
    return fetch('https://api.openweathermap.org/data/2.5/forecast?q=stockton&appid=e6a6df4d7f01f6e8e6a96e582a67ae93').then(resp => resp.json()).then(data => weatherDefault = data 
    );
}


function getCityWeather(userInputCity){
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInputCity}&appid=e6a6df4d7f01f6e8e6a96e582a67ae93`).then(resp => resp.json()).then(data => weatherForecastINFO = data);
}

export {weatherDefault, weatherForecastINFO, getDefaultCity, getCityWeather}