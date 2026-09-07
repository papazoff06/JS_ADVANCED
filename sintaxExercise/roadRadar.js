function roadRadar(speed, area){
    let obj = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let speedLimit = obj[area];
    let difference = speed - obj[area];

    if (obj[area] > speed){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }
    else 
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${getStatus(difference)}`)

    
    function getStatus(diff){
        
        if (difference <= 20){
            return 'speeding'
        }
        else if(difference <= 40){
            return "excessive speeding"
        }
        else if( difference > 40){
            return 'reckless driving'
        }
            
    }
}


roadRadar(0, 'city')
roadRadar(21, 'residential')
roadRadar(0, 'motorway')
roadRadar(120, 'interstate')