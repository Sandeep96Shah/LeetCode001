/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const n = haystack.length;
    const m = needle.length;
    for(let i = 0 ; i < n; i++){
        const str = haystack.substring(i, m + i);
        if(str === needle){
            return i;
        }
    }
    return -1;
};