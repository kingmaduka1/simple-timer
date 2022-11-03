let countDown = () => {
    let countDate = new Date("December 25, 2022 00:00:00").getTime();
    let now = new Date().getTime();
    let gap = countDate - now;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let displayDay = Math.floor(gap / day);
    let displayHour = Math.floor((gap % day) / hour);
    let displayMinute = Math.floor((gap % hour) / minute);
    let displaySecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = displayDay;
    document.querySelector('.hour').innerText = displayHour;
    document.querySelector('.minute').innerText = displayMinute;
    document.querySelector('.second').innerText = displaySecond;

    if(displayDay === 1) {
        document.getElementById('time').innerText = "Day";
    }
    else {
        document.getElementById('time').innerText = "Days";
    }

    if(displayHour === 1) {
        document.getElementById('timeHour').innerText = "Hour";
    }

    else {
        document.getElementById('timeHour').innerText = "Hours";
    }

    if(displayMinute === 1) {
        document.getElementById('timeMin').innerText = "Minute"
    }
    else {
        document.getElementById('timeMin').innerText = "Minutes"
    }

    if(displaySecond === 1) {
        document.getElementById('timeSec').innerText = "Second";
    }
    else {
        document.getElementById('timeSec').innerText = "Seconds";
    }
}
setInterval(countDown, 1000);

