class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    let res = 0;
    let store = new Set(nums);
    for(let num of nums){
         console.log(num);
        let curr = num
        let streak = 0;
            while (store.has(curr)){
                curr = curr + 1
                streak = streak+1;
            }
           
        res = Math.max(res,streak)
    }
    return res;

    }
}
