let favorites = [];

function SaveToLocalStoragebyCityName(cityName)
{
    if(localStorage.getItem('Favorites') === null)
    {
        favorites = [];
    }
    else
    {
        favorites = JSON.parse(localStorage.getItem('Favorites'));
    }
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

if (window.PerformanceNavigationTiming.type != "reload" ) 
{
    localStorage.clear('Favorites');
}

export {RemoveFromLocalStorage, SaveToLocalStoragebyCityName, GetLocalStorage}