class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = new Array(temperatures.length).fill(0);
        for(let i = 0; i<temperatures.length;i++){
            let temp = 0;
             for(let j = i+1; j<temperatures.length;j++){
                if(temperatures[i]<temperatures[j]){
                    stack[i] = j-i;
                    break;
                }
             }
            

        }
        return stack
    }
}
