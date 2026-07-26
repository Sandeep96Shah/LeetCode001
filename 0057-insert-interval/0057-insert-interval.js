/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const n = intervals.length;
    intervals.push(newInterval);
    
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    console.log("Intervals", intervals);
    const result = [];
    let currentResult = intervals[0];
    let start = 1;
    while(start < n+1){
        if(intervals[start][0] <= currentResult[1]){
            currentResult = [currentResult[0], Math.max(currentResult[1], intervals[start][1])];
            // console.log("CurrentResult", currentResult);
        }else{
            result.push(currentResult);
            // console.log("Inside Loop Result", result);
            currentResult = intervals[start];
        }
        start++;
    }
    result.push(currentResult);
    return result;
};