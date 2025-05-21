const palindromes = function (word) {
    word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    indexStart = 0;
    indexEnd = word.length - 1;
    while (indexEnd > indexStart) {
        if (word[indexStart] !== word[indexEnd]){
            return false
        }
        indexStart++;
        indexEnd--;
    }
    return true

};

// Do not edit below this line
module.exports = palindromes;
