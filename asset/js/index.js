let count = 0;
let min = 0;
let sec = 0;
let millsec = 0;
//start
let startTimer = () => {
    count++;

    min = Math.floor( (count /100) /60 );
    sec = Math.floor( (count /100) - (min *60) );
    millsec = Math.floor( count-(sec *100) - (min *6000) );

    document.getElementById('m-sec').textContent = count;
    document.getElementById('min').textContent = min;
    document.getElementById('sec').textContent = sec;
    document.getElementById('m-sec').textContent = millsec;

};

let btnStart = document.getElementById('start-btn');
btnStart.addEventListener('click', function(){
    setInterval(startTimer, 10);
});