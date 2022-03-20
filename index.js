// Code your solution in this file!
function distanceFromHqInBlocks(street){
    if (street > 42){
        return street-42;
    }
    else if (street <= 42){
        return 42 - street;
    }
    else
        return "Please enter a valid street number";
};

function distanceFromHqInFeet(street){
   let blocks = distanceFromHqInBlocks(street)
   return blocks * 264;
};

function distanceTravelledInFeet(startStreet, endStreet){
    if (startStreet >= endStreet){
        return (startStreet-endStreet) * 264;
    }
    else if (startStreet < endStreet){
        return (endStreet-startStreet) * 264;
    }
    else return "Please enter a valid street number"
}

function calculatesFarePrice(startStreet, endStreet){
    let distance = distanceTravelledInFeet(startStreet, endStreet);
    if (distance <= 400){
        return 0
    }
    else if (distance > 400 && distance < 2000){
        return (distance - 400)*0.02
    }
    else if (distance >= 2000 && distance <=2500){
        return 25
    }
    else return "cannot travel that far"
}