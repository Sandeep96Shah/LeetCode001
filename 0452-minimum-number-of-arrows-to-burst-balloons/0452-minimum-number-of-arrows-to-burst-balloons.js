/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points = points.sort((a, b) => {
       if(a[0] != b[0]) return a[0] - b[0]
       return a[1] - b[1];
}
);
    let count = 1;
    let start = 1;
    let current = points[0];
    while(start < points.length){
        if(points[start][0] <= current[1]){
            current[0] = Math.max(current[0], points[start][0]);
            current[1] = Math.min(current[1], points[start][1]);
        }else{
            current = points[start];
            count++;
        }
        start++;
    }
    return count;
};