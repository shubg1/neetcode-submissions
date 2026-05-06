class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
    let l=0, r=numbers.length - 1
       while(l<r) {
        const carSum = numbers[l] + numbers[r]
        if(carSum>target){
        r--;
        }
        else if(carSum<target){
        l++;
        }
        else return [l+1,r+1]
       }
     return []
    }
}
