public class Solution {
    public int MajorityElement(int[] nums) {
        // Dictionary to get the count for each element.
        Dictionary<int, int> elements = new Dictionary<int, int>();
        int winner = nums[0];
        int count = 0;
        for(var i = 0; i < nums.Length; i++){
           if(count == 0){
            winner = nums[i];
           }
           if(winner == nums[i]) count++;
           else count--;
        }
        return winner;
    }
}