const fibonacci = function(index) {
    fib_seq = [1, 1];
    index = parseInt(index, 10);
    if (index === 0) {
        return 0
    } else if (index < 0) {
        return 'OOPS';
    }
    while (fib_seq.length < index) {
        fib_seq.push(fib_seq.at(-1) + fib_seq.at(-2));
    }
    return fib_seq.at(-1);

};

// Do not edit below this line
module.exports = fibonacci;
