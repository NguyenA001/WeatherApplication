
import creatingElements from './elements.js'
import {weatherDefault, getCityWeather} from './scripts.js';
import convertoF from './conversions.js';

creatingElements();

searchCityBTN.addEventListener('click', async function(e){
        await getCityWeather(userInputCity.value.toLowerCase());
        displayData();
    
        let data = GetLocalStorage();
        if(data.includes(weatherDefault.city.name))
        {
            favoriteBTN.src = "./images/RedHeart.png"
            favON = true;
        }
        else
        {
            favoriteBTN.src = "./images/Heart.png"
            favON = false;
        }
        
});

card1.addEventListener('click', function(){
    currentDegrees.textContent = `${convertoF(weatherDefault.list[0].main.temp)}°F`;
    currentLowDegrees.textContent = `${convertoF(weatherDefault.list[0].main.temp_min)}°F`;
    currentHighDegrees.textContent = `${convertoF(weatherDefault.list[0].main.temp_max)}°F`;
    currenWind.textContent = `${(weatherDefault.list[0].wind.speed).toFixed(1)}km/hr`;
    currentHumidity.textContent = `${weatherDefault.list[0].main.humidity}%`;
    currentIcon.src = `./images/${weatherDefault.list[0].weather[0].icon}.png`;
    currentDay.textContent = displayWeekDay(weatherDefault.list[0].dt_txt);
    currentDATE.textContent = displayDate(weatherDefault.list[0].dt_txt);
});

card2.addEventListener('click', function(){
    currentDegrees.textContent = `${convertoF(weatherDefault.list[8].main.temp)}°F`;
    currentLowDegrees.textContent = `${convertoF(weatherDefault.list[8].main.temp_min)}°F`;
    currentHighDegrees.textContent = `${convertoF(weatherDefault.list[8].main.temp_max)}°F`;
    currenWind.textContent = `${(weatherDefault.list[8].wind.speed).toFixed(1)}km/hr`;
    currentHumidity.textContent = `${weatherDefault.list[8].main.humidity}%`;
    currentIcon.src = `./images/${weatherDefault.list[8].weather[0].icon}.png`;
    currentDay.textContent = displayWeekDay(weatherDefault.list[8].dt_txt);
    currentDATE.textContent = displayDate(weatherDefault.list[8].dt_txt);
});
card3.addEventListener('click', function(){
    currentDegrees.textContent = `${convertoF(weatherDefault.list[16].main.temp)}°F`;
    currentLowDegrees.textContent = `${convertoF(weatherDefault.list[16].main.temp_min)}°F`;
    currentHighDegrees.textContent = `${convertoF(weatherDefault.list[16].main.temp_max)}°F`;
    currenWind.textContent = `${(weatherDefault.list[16].wind.speed).toFixed(1)}km/hr`;
    currentHumidity.textContent = `${weatherDefault.list[16].main.humidity}%`;
    currentIcon.src = `./images/${weatherDefault.list[16].weather[0].icon}.png`;
    currentDay.textContent = displayWeekDay(weatherDefault.list[16].dt_txt);
    currentDATE.textContent = displayDate(weatherDefault.list[16].dt_txt);
});
card4.addEventListener('click', function(){
    currentDegrees.textContent = `${convertoF(weatherDefault.list[24].main.temp)}°F`;
    currentLowDegrees.textContent = `${convertoF(weatherDefault.list[24].main.temp_min)}°F`;
    currentHighDegrees.textContent = `${convertoF(weatherDefault.list[24].main.temp_max)}°F`;
    currenWind.textContent = `${(weatherDefault.list[24].wind.speed).toFixed(1)}km/hr`;
    currentHumidity.textContent = `${weatherDefault.list[24].main.humidity}%`;
    currentIcon.src = `./images/${weatherDefault.list[24].weather[0].icon}.png`;
    currentDay.textContent = displayWeekDay(weatherDefault.list[24].dt_txt);
    currentDATE.textContent = displayDate(weatherDefault.list[24].dt_txt);
});
card5.addEventListener('click', function(){
    currentDegrees.textContent = `${convertoF(weatherDefault.list[32].main.temp)}°F`;
    currentLowDegrees.textContent = `${convertoF(weatherDefault.list[32].main.temp_min)}°F`;
    currentHighDegrees.textContent = `${convertoF(weatherDefault.list[32].main.temp_max)}°F`;
    currenWind.textContent = `${(weatherDefault.list[32].wind.speed).toFixed(1)}km/hr`;
    currentHumidity.textContent = `${weatherDefault.list[32].main.humidity}%`;
    currentIcon.src = `./images/${weatherDefault.list[32].weather[0].icon}.png`;
    currentDay.textContent = displayWeekDay(weatherDefault.list[32].dt_txt);
    currentDATE.textContent = displayDate(weatherDefault.list[32].dt_txt);
});

function displayWeekDay(time){
    let d = new Date(time);
    let weekday = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
    return weekday[d.getUTCDay()];
}

function displayDate(x){
    let DATEdisplay = (x).split(' ');
    return DATEdisplay[0];
}

import {RemoveFromLocalStorage, SaveToLocalStoragebyCityName, GetLocalStorage} from './favorites.js'
let favoriteBTN = document.getElementById('favoriteBTN');
let injectHere = document.getElementById('injectHere');
let favON = false;

favoriteBTN.addEventListener('click', function(){

    if(favON == true){
        favoriteBTN.src = "./images/Heart.png"
        RemoveFromLocalStorage(weatherDefault.city.name);
        emptyHTML(weatherDefault.city.name);
    }
    else{
        favoriteBTN.src = "./images/RedHeart.png"
        SaveToLocalStoragebyCityName(weatherDefault.city.name);
        creatingFavoriteList(weatherDefault.city.name);
    }
    favON = !favON;

});

function creatingFavoriteList(cityName){
    var a = document.createElement('a');
    a.className = "dropdown-item textWhite";
    a.textContent = cityName;
    a.id = cityName;
    let li = document.createElement('li');
    li.appendChild(a); 
    injectHere.appendChild(li)

    let favoriteCities = document.getElementById(cityName);

    favoriteCities.addEventListener('click', async function(){
        await getCityWeather(cityName);
        let data = GetLocalStorage();
        if(data.includes(weatherDefault.city.name))
        {
            favoriteBTN.src = "./images/RedHeart.png"
            favON = true;
            displayData();
        }
        else
        {
            favoriteBTN.src = "./images/Heart.png"
            favON = false;
        }
    });
}

function emptyHTML(cityName){
    let x = document.getElementById(cityName);
    x.remove();
}

GetLocalStorage();

export function displayData(){
    currentDegrees.textContent = `${convertoF(weatherDefault.list[0].main.temp)}°F`;
    currentLowDegrees.textContent = `${convertoF(weatherDefault.list[0].main.temp_min)}°F`;
    currentHighDegrees.textContent = `${convertoF(weatherDefault.list[0].main.temp_max)}°F`;
    currenWind.textContent = `${(weatherDefault.list[0].wind.speed).toFixed(1)} km/hr`;
    currentHumidity.textContent = `${weatherDefault.list[0].main.humidity}%`;
    currentIcon.src = `./images/${weatherDefault.list[0].weather[0].icon}.png`;
    currentDay.textContent = displayWeekDay(weatherDefault.list[0].dt_txt);
    currentDATE.textContent = displayDate(weatherDefault.list[0].dt_txt);

    currentDegrees1.textContent = `${convertoF(weatherDefault.list[0].main.temp)}°F`;
    currentLowDegrees1.textContent = `${convertoF(weatherDefault.list[0].main.temp_min)}°F`;
    currentHighDegrees1.textContent = `${convertoF(weatherDefault.list[0].main.temp_max)}°F`;
    currentWind1.textContent = `${(weatherDefault.list[0].wind.speed).toFixed(1)}km/hr`;
    currentHumidity1.textContent = `${weatherDefault.list[0].main.humidity}%`;
    icon1.src = `./images/${weatherDefault.list[0].weather[0].icon}.png`;
    day1.textContent = displayWeekDay(weatherDefault.list[0].dt_txt);
    Date1.textContent = displayDate(weatherDefault.list[0].dt_txt);

    currentDegrees2.textContent = `${convertoF(weatherDefault.list[8].main.temp)}°F`;
    currentLowDegrees2.textContent = `${convertoF(weatherDefault.list[8].main.temp_min)}°F`;
    currentHighDegrees2.textContent = `${convertoF(weatherDefault.list[8].main.temp_max)}°F`;
    currentWind2.textContent = `${(weatherDefault.list[8].wind.speed).toFixed(1)}km/hr`;
    currentHumidity2.textContent = `${weatherDefault.list[8].main.humidity}%`;
    icon2.src = `./images/${weatherDefault.list[8].weather[0].icon}.png`;
    day2.textContent = displayWeekDay(weatherDefault.list[8].dt_txt);
    Date2.textContent = displayDate(weatherDefault.list[8].dt_txt);

    currentDegrees3.textContent = `${convertoF(weatherDefault.list[16].main.temp)}°F`;
    currentLowDegrees3.textContent = `${convertoF(weatherDefault.list[16].main.temp_min)}°F`;
    currentHighDegrees3.textContent = `${convertoF(weatherDefault.list[16].main.temp_max)}°F`;
    currentWind3.textContent = `${(weatherDefault.list[16].wind.speed).toFixed(1)}km/hr`;
    currentHumidity3.textContent = `${weatherDefault.list[16].main.humidity}%`;
    icon3.src = `./images/${weatherDefault.list[16].weather[0].icon}.png`;
    day3.textContent = displayWeekDay(weatherDefault.list[16].dt_txt);
    Date3.textContent = displayDate(weatherDefault.list[16].dt_txt);

    currentDegrees4.textContent = `${convertoF(weatherDefault.list[24].main.temp)}°F`;
    currentLowDegrees4.textContent = `${convertoF(weatherDefault.list[24].main.temp_min)}°F`;
    currentHighDegrees4.textContent = `${convertoF(weatherDefault.list[24].main.temp_max)}°F`;
    currentWind4.textContent = `${(weatherDefault.list[24].wind.speed).toFixed(1)}km/hr`;
    currentHumidity4.textContent = `${weatherDefault.list[24].main.humidity}%`;
    icon4.src = `./images/${weatherDefault.list[24].weather[0].icon}.png`;
    day4.textContent = displayWeekDay(weatherDefault.list[24].dt_txt);
    Date4.textContent = displayDate(weatherDefault.list[24].dt_txt);

    currentDegrees5.textContent = `${convertoF(weatherDefault.list[32].main.temp)}°F`;
    currentLowDegrees5.textContent = `${convertoF(weatherDefault.list[32].main.temp_min)}°F`;
    currentHighDegrees5.textContent = `${convertoF(weatherDefault.list[32].main.temp_max)}°F`;
    currentWind5.textContent = `${(weatherDefault.list[32].wind.speed).toFixed(1)}km/hr`;
    currentHumidity5.textContent = `${weatherDefault.list[32].main.humidity}%`;
    icon5.src = `./images/${weatherDefault.list[32].weather[0].icon}.png`;
    day5.textContent = displayWeekDay(weatherDefault.list[32].dt_txt);
    Date5.textContent = displayDate(weatherDefault.list[32].dt_txt);

    cityHead.textContent = `${weatherDefault.city.name}`
}

