/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    let start = 0;
    let end = nums.length-1;

    while(start <= end){
        if(nums[start] === val){
            const extra = nums[start];
            nums[start] = nums[end];
            nums[end] = extra;
            end--;
        }else{
            start++;
            k++;
        }
    }
    return k;
};