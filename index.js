
const startButton = document.getElementById("startTimer")
const stopButton = document.getElementById("stopTimer")
const resetButton = document.getElementById("resetTimer")
const Timer = document.getElementById("Timer")

let counting = false
let currentTime = 0


function timer() {
    if (counting == true) {
        currentTime = currentTime + 1
        Timer.innerHTML = "Timer: " + currentTime
        setTimeout(timer, 1000);
    } else {
        return
    } 
}


startButton.addEventListener("click", () => {
    console.log("HELLO")
    if (!counting) {
        counting = true
        setTimeout(timer, 1000)
    }
})

stopButton.addEventListener("click", () => {
    if (counting) {
        counting = false
    }
})

resetButton.addEventListener("click", () => {
    currentTime = 0
    Timer.innerHTML = "Timer: " + currentTime
    counting = false
})
