const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

const matchDrivers = findMatching(drivers, "Bobby")

console.log(matchDrivers);


function fuzzyMatch(drivers, word){
    return drivers.filter(driver => driver.toLowerCase().substring(0, word.length) === word.toLowerCase());
}
 const firstLetter = fuzzyMatch(drivers, "Sa");

console.log(firstLetter);


function matchName(drivers, match){
    return drivers.filter(drivers => drivers.name === match)
}