class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      let temp={};
      for(let i=0;i<=nums.length; i++){
        let diff  = target - nums[i];
        console.log(temp)
        if(diff in temp)
        return [temp[diff], i];
        temp[nums[i]] = i;
      }
    }
}
