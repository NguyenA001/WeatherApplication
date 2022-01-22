let favorites = [];

function SaveToLocalStoragebyCityName(cityName)
{
    favorites.push(cityName);
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

function SaveToLocalStorage()
{
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

function RemoveFromLocalStorage(cityName){
    let cityIndex = favorites.indexOf(cityName);
    favorites.splice(cityIndex,1);
    SaveToLocalStorage();
}

function GetLocalStorage(){
    const localStorageData = localStorage.getItem('Favorites');
    favorites = JSON.parse(localStorageData);
    return favorites;
}

//LOCAL STORAGE-----------------------------------------------------

let injectHere = document.getElementById('injectHere');

function creatingFavoriteList(cityName){
    var a = document.createElement('a');
    a.className = "dropdown-item textWhite";
    a.textContent = cityName;
    a.id = cityName;
    let li = document.createElement('li');
    li.appendChild(a);
    return injectHere.appendChild(li);
}

function emptyHTML(cityName){
    let x = document.getElementById(cityName);
    x.remove();
}

// let cityName = document.getElementById('cityName');

// a.id.addEventListener('click', function(cityName){
//     getCityWeather(cityName);
//     displayData();
// });



export {RemoveFromLocalStorage, SaveToLocalStoragebyCityName, creatingFavoriteList, emptyHTML, GetLocalStorage}