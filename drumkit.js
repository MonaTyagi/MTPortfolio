//Detecting Button Press
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(i=0;i<numberOfDrumButtons;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
// console.log(this.style.color="white");
var buttonInnerHTML=this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});

}

//Detecting KeyPress
document.addEventListener("keypress",function(event){
  makeSound(event.key);
});
buttonAnimation(event.key);
function makeSound(key)
{
  switch(key){
    case "w":
    var tom1=new Audio("tom-1.mp3");
    tom1.play();
    break;
    case "W":
    var tom1=new Audio("tom-1.mp3");
    tom1.play();
    break;
    case "a":
    var tom2=new Audio("tom-2.mp3");
    tom2.play();
    break;
    case "A":
    var tom2=new Audio("tom-2.mp3");
    tom2.play();
    break;
    case "s":
    var tom3=new Audio("tom-3.mp3");
    tom3.play();
    break;
    case "S":
    var tom3=new Audio("tom-3.mp3");
    tom3.play();
    break;
    case "d":
    var tom4=new Audio("tom-4.mp3");
    tom4.play();
    break;
    case "D":
    var tom2=new Audio("tom-4.mp3");
    tom4.play();
    break;
    case "j":
    var crash=new Audio("crash.mp3");
    crash.play();
    break;
    case "J":
    var crash=new Audio("crash.mp3");
    crash.play();
    break;
    case "k":
    var kick=new Audio("kick-bass.mp3");
    kick.play();
    break;
    case "K":
    var kick=new Audio("kick-bass.mp3");
    kick.play();
    break;
    case "l":
    var snare=new Audio("snare.mp3");
    snare.play();
    break;
    default:
    alert("Please press another key");
    break;
}
}
function buttonAnimation(currentKey)
{
var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){activeButton.classList.remove("pressed");},100);
}
// function IGotClicked()
// {
// var audio=new Audio("sounds/tom-1.mp3");
// audio.play();
