class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let shortarr = nums.sort((a,b)=>a-b);
        let i = 0
        const res = [];

       for(let i = 0; i<shortarr.length;i++){
        if (shortarr[i]>0){
        break;
        }
        if(shortarr[i]==shortarr[i-1]){
            continue;
        }
        let l = i+1
        let r = shortarr.length - 1

        while(l<r){
            const sum = shortarr[i]+shortarr[l]+shortarr[r]
            if(sum>0){
                r--;
            }
             else if(sum<0){
                l++;
            }
             else if (sum==0){
                  res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while(l<r && nums[l]==nums[l-1]){
                    l++;
                }
            }


            
        }



       }
        return res;
    }
}
