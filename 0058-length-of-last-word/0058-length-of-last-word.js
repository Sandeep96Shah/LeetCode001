/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const wordList = s.split(" ");
    for(let i = wordList.length - 1; i >= 0; i--){
        if(wordList[i]){
            return wordList[i].length
        }
    }
};