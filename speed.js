function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    }

     else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(Demerit points: `${demeritPoints}`);


        if (demeritPoints >= 12) {
            console.log("License suspended");
        }
    }
}

checkSpeed(80);