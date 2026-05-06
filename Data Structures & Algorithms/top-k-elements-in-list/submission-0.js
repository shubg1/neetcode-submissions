class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
         const freq = Array.from({ length: nums.length + 1 }, () => []);
        for (let n of nums){
            count[n] = 1 +  (count[n] || 0);
        }
        for( let i in count){
            freq[count[i]].push(i)
           
        }
        let res = []
       for(let x = freq.length-1 ;x>0 ;x-- ){
       
        for(let items of freq[x]){
        res.push(items);
        if(res.length == k)
        return res;

        }
       }
    }
}
