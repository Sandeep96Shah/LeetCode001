/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let maxValue = 0;
    while(right < prices.length){
        if(prices[right] > prices[left]){
            const currentMax = prices[right] - prices[left];
            maxValue = Math.max(maxValue, currentMax);
            right++;
        }else{
            left = right;
            right++;
        }
    }
    return maxValue;
};