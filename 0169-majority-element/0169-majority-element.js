/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorityElem = null;
    let count = 0;
    for(const num of nums){
        if(count === 0){
            majorityElem = num;
        }

        if(num === majorityElem) count++;
        else count--;
    }
    return majorityElem;
};