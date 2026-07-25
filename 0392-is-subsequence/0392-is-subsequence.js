/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let startS = 0;
    let startT = 0;
    while(startT < t.length && startS < s.length){
        if(s[startS] === t[startT]){
            startS++;
        }
        startT++;
    }
    return startS >= s.length;
};