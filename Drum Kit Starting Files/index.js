var buttons = document.querySelectorAll(".drum")


//playing music when the funtion gets called.

function musicPlayer(keypressed){
    switch(keypressed){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            console.log("Unidentified Key.")
     
    }
}

// adding eventlistener to all the buttons and calls the music player if the buttons gets pressed.
for(i=0;i<buttons.length; i++){
    buttons[i].addEventListener("click", function (){
        musicPlayer(this.innerHTML)
        buttonAnimation(this.innerHTML)
       
    });    
}
// listening to the keypress.
document.addEventListener("keydown", function (event){
    musicPlayer(event.key.toLowerCase())
    buttonAnimation(event.key)
})

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 62);


}


