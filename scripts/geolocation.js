import {forGeoLocation} from './scripts.js'
import {prod, dev} from './environment.js'
let apiKey;

if(prod.isLive){
    apiKey = prod.apiKey;
} else{
    apiKey = dev.apiKey;
}

let currrentLongitude, currentLatitude;

function success(position){
    console.log(position);
    currrentLongitude = position.coords.longitude;
    currentLatitude = position.coords.latitude;
    forGeoLocation(currrentLongitude, currentLatitude, apiKey);
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