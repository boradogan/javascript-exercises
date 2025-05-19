const removeFromArray = function(arr, ...numbers) {
    return arr.filter(item => !numbers.includes(item));
    

};

// Do not edit below this line
module.exports = removeFromArray;
