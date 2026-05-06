class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = [];
        let paircar = position.map((a,i)=>[a,speed[i]])
        paircar.sort((a,b)=>b[0]-a[0])
      
        for(let i of paircar){
            //   console.log(i[0])
            let t = (target - i[0])/i[1];
             stack.push(t)
            if(stack.length>=2 &&  (stack[stack.length-2] >= stack[stack.length-1])){
           stack.pop();
            }
           
        }
         console.log(stack)
        return stack.length
    }
}
