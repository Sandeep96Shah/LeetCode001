/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0;
    let start = 0; 
    let end = height.length - 1;
    while(start < end){
        const currentWater = (end - start) * (Math.min(height[start], height[end]));
        maxWater = Math.max(maxWater, currentWater);
        if(height[start] < height[end]){
            start++;
        }else{
            end--;
        }
    }
    return maxWater;
};