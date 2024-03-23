let dice = document.querySelectorAll('img');

let images = ["./resurces/dice-1.svg",
             "./resurces/dice-2.svg",
             "./resurces/dice-3.svg",
             "./resurces/dice-4.svg",
             "./resurces/dice-5.svg",
             "./resurces/dice-6.svg"];

let val = document.querySelector('#total');
function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout( function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        })
    },1000)
    
    let die1val = Math.floor(Math.random()*6);
    let die2val = Math.floor(Math.random()*6);
    
    document.querySelector("#die1").setAttribute("src", images[die1val]);
    document.querySelector("#die2").setAttribute("src", images[die2val]);

    val.innerHTML= ((die1val +1) + (die2val +1))
}
