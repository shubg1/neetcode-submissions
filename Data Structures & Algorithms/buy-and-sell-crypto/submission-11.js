class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
 
    maxProfit(prices) {
        let maxP = 0;
        let minB = prices[0] ;
        for (let sell of prices){
            minB = Math.min(minB,sell)
            maxP = Math.max(maxP, sell - minB);
           
        }
        return maxP
    }
    }