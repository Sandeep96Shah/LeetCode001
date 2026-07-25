/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(magazine.length < ransomNote.length) return false;
    const map = new Map();
    for(let i = 0 ; i < magazine.length; i++){
        map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);
    }

    for(let i = 0; i < ransomNote.length; i++){
        const count = map.get(ransomNote[i]) || 0;
        if(!count) return false;
        map.set(ransomNote[i], count - 1);
    }
    return true;
};