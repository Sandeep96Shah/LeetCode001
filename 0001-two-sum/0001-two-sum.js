/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0 ; i < nums.length; i++){
        const remaining = target - nums[i];
        if(map.has(remaining)){
            return [map.get(remaining), i];
        }else{
            map.set(nums[i], i);
        }
    }
};