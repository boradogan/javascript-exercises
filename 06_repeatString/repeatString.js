const repeatString = function(str, repeatingTimes) {

    if (repeatingTimes < 0) {
        return "ERROR"
    }
    let accumulator = '';
    for (let i = 0; i < repeatingTimes; i++){
        accumulator = accumulator + str;
    }
    return accumulator;

};

// Do not edit below this line
module.exports = repeatString;
