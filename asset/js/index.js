let count = 0;
let min = 0;
let sec = 0;
let millsec = 0;
let interval = 0;
let timeRunning = false;
//start
let startTimer = () => {
    count++;    

    min = Math.floor( (count /100) /60 );
    sec = Math.floor( (count /100) - (min *60) );
    millsec = Math.floor( count-(sec *100) - (min *6000) );



    document.getElementById('min').textContent = leadingZero(min);
    document.getElementById('sec').textContent = leadingZero(sec);
    document.getElementById('m-sec').textContent = leadingZero(millsec);

};

let btnStart = document.getElementById('start-btn');
btnStart.addEventListener('click', function(){
    if(!timeRunning){
            interval = setInterval(startTimer, 10);
            timeRunning = true;
    }else{
        console.log('The timer has already started');
    }
});

//leading 0
let leadingZero = (time) => {
    if (time <= 9){
        return "0" + time;
    }else{
        return time;
    }
}

//stop btn

let btnStop = document.getElementById('stop-btn');
btnStop.addEventListener('click',function(){
    clearInterval(interval); //stop the timer
});

//reset btn
let btnReset = document.getElementById('Reset-btn');
btnReset.addEventListener('click', function (){
    clearInterval(interval) //stop the timer
    count = 0;
    min = 0;
    sec = 0;
    millsec = 0;
    interval = 0;
    timeRunning = false;
    document.getElementById('min').textContent = '00';
    document.getElementById('sec').textContent = '00';
    document.getElementById('m-sec').textContent = '00';
});