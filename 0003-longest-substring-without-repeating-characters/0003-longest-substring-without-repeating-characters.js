/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let maxLength=0;
    let left=0;
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            left = Math.max(map.get(s[i])+1, left);
        }
        map.set(s[i], i);
        maxLength = Math.max(maxLength, i-left+1);
    }
    return maxLength;
};