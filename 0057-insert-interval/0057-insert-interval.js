/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const n = intervals.length;
    // for(let i = 0; i < n - 1; i++){
    //     if(intervals[i][1] >= newInterval[0] && newInterval[1] <= intervals[i+1][0]){
    //         intervals.splice(i+1, 0, newInterval);
    //         break;
    //     }
    // }
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