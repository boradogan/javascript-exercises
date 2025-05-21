const findTheOldest = function(arr) {
    arr.sort((a, b) => (a.yearOfDeath - a.yearOfBirth - b.yearOfDeath + b.yearOfBirth));
    console.log(arr.at(-1));
    return arr.at(-1)

};

// Do not edit below this line
module.exports = findTheOldest;
