class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let response = [];
        let prefix = 1;

         response[0] = 1;
        for (let i=1; i<nums.length; i++ ){
           prefix = prefix * nums[i-1];
           response[i] = prefix;
          console.log(response)
        }
         prefix = 1;
         for (let j=nums.length-2; j>=0; j-- ){
           prefix = prefix * nums[j+1];
           response[j] = prefix * response[j];
          console.log(response)
        }
       return response;

    }
}
