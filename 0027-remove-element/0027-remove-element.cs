public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int k = 0;
        int end = nums.Length - 1;
        int start = 0;

        while(start <= end){
            if(nums[start] == val){
                nums[start] = nums[end];
                nums[end] = val;
                end--;
            }else{
                start++;
                k++;
            }
        }
        return k;
    }
}