/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations = citations.sort((a, b) => b - a);
    let h = 0;
    const n = citations.length;
    let maxH = h;
    while(h < n){
        if(citations[h] >= h + 1){
            maxH = Math.max(maxH, h + 1);
        }
        h++;
    }
    return maxH;
};