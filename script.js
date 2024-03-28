

function makeBubble(){
    var clutter = "";

for(var i=1; i<=192; i++){

    var rn = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbtm").innerHTML = clutter
}

var timer = 60
function runTimer(){
    var timerInt = setInterval(function(){
        if(timer > 0){
            timer--
            document.querySelector("#timerVal").textContent = timer
        }
        else{
            clearInterval(timerInt)
        }
    }, 1000)
}

var hitRn = 0
function newHit(){
    hitRn = Math.floor(Math.random()*10)
    document.querySelector("#hitVal").textContent = hitRn
}

var score = 0 
function increaseScore(){
    score += 10
    document.querySelector("#scoreVal").textContent = score
}

document.querySelector(".pbtm")
.addEventListener("click", function(details){
    // console.log(Number(details.target.textContent))
    var clickedNumber = Number(details.target.textContent)
    if(clickedNumber === hitRn){
        increaseScore()
    }
})

makeBubble()
runTimer()
newHit()
increaseScore()


 
