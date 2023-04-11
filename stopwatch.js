let seconds=0
let minutes=0;
let hours=0;
let displaySeconds=0;
let displayMinutes=0;
let displayHours=0;
let interval=null;

const startButton=document.getElementById("startButton");
const stopButton=document.getElementById("stopButton");
const resetButton=document.getElementById("resetButton");
const timer=document.getElementById("timer");


function startTime()
{
    seconds+=1;

    if(seconds/60===1)
    {
        seconds=0;
        minutes+=1;
        if(minutes/60===1)
        {
            minutes=0;
            hours+=1;
        }
    }


    if(seconds<10)
    {
        displaySeconds="0"+seconds;
    }else
    {
        displaySeconds=seconds;
    }

    if(minutes<10)
    {
        displayMinutes="0"+minutes;
    }else
    {
        displayMinutes=minutes;
    }

    if(hours<10)
    {
        displayHours="0"+hours;
    }else
    {
        displayHours=hours;
    }

    timer.textContent= displayHours+":"+displayMinutes+":"+displaySeconds;
}
startButton.addEventListener("click", ()=>{
    clearInterval(interval);

    interval=setInterval(startTime,1000)
});

stopButton.addEventListener("click", ()=>{
    clearInterval(interval);
});

resetButton.addEventListener("click", ()=>{
    clearInterval(interval);
    seconds=0;
    minutes=0;
    hours=0;
    timer.textContent="00:00:00";
})