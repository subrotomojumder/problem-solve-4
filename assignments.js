// problem: 1
function radianToDegree(radians) {
    if (typeof radians !== 'number') {
        return 'Error! Enter the number...';
    }
    const pi = Math.PI;
    const degree = radians * (180/pi);
    const degreeFixed = parseFloat(degree.toFixed(2));
    return degreeFixed;
}
// console.log(radianToDegree(10))

// problem: 2
function isJavaScriptFile(fileName) {
    if (typeof fileName !== 'string') {
        return 'Error! Enter the string...';
    }
    const fileCheck = fileName.endsWith('.js');
    return fileCheck;
}
// const myFile = 'hello.js';
// console.log(isJavaScriptFile(myFile))

// problem: 3
function oilPrice(dieselQua, petrolQua, octaneQua) {
    if (typeof dieselQua !== 'number' || typeof petrolQua !== 'number' || typeof octaneQua !== 'number') {
        return 'Error! Enter the number...';
    }
    const eachLiterDiesel = 114;
    const eachLiterPetrol = 130;
    const eachLiterOctane = 135;
    // each liter taka
    const totalDieselPrice = dieselQua * eachLiterDiesel;
    const totalPetrolPrice = petrolQua * eachLiterPetrol;
    const totalOctanePrice = octaneQua * eachLiterOctane;
    // total price
    const totalPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
    return totalPrice;    
}
// console.log(oilPrice(30, 20, 10))

// problem: 4
function publicBusFare(traveler) {
    if (typeof traveler !== 'number') {
        return 'Error! Enter the number...';
    }
    const busCapacity = 50;
    const microCapacity = 11;
    const localTicketPrice = 250;
    // after going by bus.
    const afterGoingBus = traveler % busCapacity;
    // after going by micro.
    const afterGoingMicro = afterGoingBus % microCapacity;
    // amount of local bus ticket purchase.
    const totalTicketsPrice = afterGoingMicro * localTicketPrice;
    return totalTicketsPrice;
}
const tourCandidate = 235;
const extraTicketPrice = publicBusFare(tourCandidate);
// console.log(extraTicketPrice)

// problem: 5
function isBestFriend(person1, person2) {
    if (typeof person1 !== 'object' || typeof person2 !== 'object') {
        return 'Error! Enter the object...';
    }
    const firstManName = person1['name'].toLowerCase();
    const firstManFriend = person1['friend'].toLowerCase();
    const secondManName = person2['name'].toLowerCase();
    const secondManFriend = person2['friend'].toLowerCase();
    if (firstManFriend === secondManName && secondManFriend === firstManName) {
        return true;
    }else{
        return false;
    }
}

// const tallBoy = {name:'Robin', class: 11, friend: 'Javed'};
// const smallGirl = {name: 'Javed', class: 10, friend: 'Robin'}
// const theyBestFriend = isBestFriend(tallBoy, smallGirl);
// console.log(theyBestFriend)
