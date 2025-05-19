const sumAll = function(a, b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || !Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return 'ERROR';
    }
    largerNumber = a > b? a: b;
    smallerNumber= b > a? a : b;
    
    return (largerNumber - smallerNumber + 1) * (smallerNumber + largerNumber) / 2;



};

// Do not edit below this line
module.exports = sumAll;
