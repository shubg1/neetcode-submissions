class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
    let l = 0;
    let r = heights.length-1;
    let area = 0;
        let res = 0;
        while(l<r){
            area = (r-l)*(Math.min(heights[l],heights[r]))
            console.log(area)
            res = Math.max(area, res)
            if(heights[l]>heights[r]){
                r--;
            } else { l++;}

            }
            
        return res; 
        }

}