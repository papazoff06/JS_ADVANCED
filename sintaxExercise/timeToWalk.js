function timeToWalk(step, foot_length, speed){
    let distanceInKm = (step * foot_length) / 1000;
    let rest = Math.floor((distanceInKm * 1000) / 500);
    let oneKmSpeed = (  1 / speed) * 60;
    let result = (distanceInKm * oneKmSpeed) + rest;
    let hours = Math.floor(result / 60);
    let minutes = Math.floor(result % 60);
    let seconds = Math.round((result * 60) % 60);

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`)
}


timeToWalk(2564, 0.70, 5.5);