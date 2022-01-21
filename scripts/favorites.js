let favON = false;

favoriteBTN.addEventListener('click', function(){
    if(favON == true){
        favoriteBTN.src = "./images/Heart.png"
    }
    else{
        favoriteBTN.src = "./images/RedHeart.png"
    }
    favON = !favON;
});