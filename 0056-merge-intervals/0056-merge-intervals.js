/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1) return intervals;
    intervals = intervals.sort((a, b) => a[0] - b[0]) 
    const result = [];
    let left = 0;
    let right = left + 1;
    let currentResult = intervals[left];
    while(right < intervals.length){
        if(currentResult[1] >= intervals[right][0]){
            currentResult = [currentResult[0], Math.max(intervals[right][1], currentResult[1])];
        }else{
            result.push(currentResult);
            currentResult = intervals[right];
        }
        right++;
    }
    result.push(currentResult);
    return result;
};