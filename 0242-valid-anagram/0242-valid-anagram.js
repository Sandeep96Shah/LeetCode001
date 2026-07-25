/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const obj = {};
    for(let i = 0 ; i < s.length; i++){
        if(s[i] in obj){
            obj[s[i]]++;
        }else{
            obj[s[i]] = 1;
        }
    }

    for(let i = 0 ; i < t.length; i++){
        if(t[i] in obj && obj[t[i]]){
            obj[t[i]]--;
        }else{
            return false;
        }
    }
    return true;
};