function randomGetNumber(){
    return Math.ceil(Math.random()*5);
}

function winner(firstNumber, secondNumber){
    console.log(firstNumber, secondNumber);
    if (firstNumber > secondNumber){
        return "Player 1 Wins."
    }else if(firstNumber < secondNumber){
        return "Player 2 Wins."
    } else{
        return "Draw."
    }
}
let firstImage = randomGetNumber();
let secondImage = randomGetNumber();
document.querySelector("img.img1").setAttribute("src","images/dice"+firstImage+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+secondImage+".png");
let victory = winner(firstImage, secondImage);
document.querySelector("h1").innerHTML = victory;

