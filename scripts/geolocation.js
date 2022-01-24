import {forGeoLocation} from './scripts.js'

let currrentLongitude, currentLatitude;

function success(position){
    console.log(position);
    currrentLongitude = position.coords.longitude;
    currentLatitude = position.coords.latitude;
    forGeoLocation(currrentLongitude, currentLatitude);
}

function error(err){
    console.warn(err);
}

let options = {
    enableHighAccuracy: true,
    timeout: 5000, 
    maximumAge:0
}


navigator.geolocation.getCurrentPosition(success,error,options);

export {success,error, options, currrentLongitude, currentLatitude};