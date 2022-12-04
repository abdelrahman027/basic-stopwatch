let hr = min = sec = ms = "0" + 0,
    startTime;

const startBtn = document.querySelector(".start"),
    stopBtn = document.querySelector(".stop"),
    resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);


function start() {
    startBtn.classList.add("active")
    stopBtn.classList.remove("st-active")
    startTime = setInterval(() => {
        ms++
        ms = ms < 10 ? "0" + ms : ms;
        if (ms == 100)
        {

            sec++;

            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;

        }

        if (sec == 60)
        {
            min++;

            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;

        }
        if (min == 60)
        {
            hr++;

            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;

        }

        assignValues()
    }, 10);
}
function stop() {
    startBtn.classList.remove("active")
    stopBtn.classList.add("st-active")
    clearInterval(startTime)
}
function reset() {
    startBtn.classList.remove("active")
    stopBtn.classList.remove("st-active")
    clearInterval(startTime);
    hr = min = sec = ms = "0" + 0;
    assignValues()
}


function assignValues() {
    document.querySelector(".millisec").innerText = ms;
    document.querySelector(".sec").innerText = sec;
    document.querySelector(".min").innerText = min;
    document.querySelector(".hour").innerText = hr;





}