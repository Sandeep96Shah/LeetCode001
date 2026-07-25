/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();

    while(n !== 1 && !set.has(n)){
        set.add(n);
        n = getSquareOfN(n);
    }
    return n === 1;
};

const getSquareOfN = (n) => {
    let sum = 0;

    while(n > 0){
        const digit = n % 10;
        const digitSquare = digit * digit;
        sum += digitSquare;

        n = Math.floor(n/10);
    }

    return sum;
}