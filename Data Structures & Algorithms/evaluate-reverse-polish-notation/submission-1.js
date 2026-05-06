class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let c of tokens){
            if(c=='+'){
                let a = stack.pop();
                let b = stack.pop();
                stack.push(b+a)
            }
            else if(c=='-'){
                 let a = stack.pop();
                let b = stack.pop();
                stack.push(b-a)  
            }
            else if(c=='*'){
                  let a = stack.pop();
                let b = stack.pop();
                stack.push(b*a)
            }
            else if(c=='/'){
                  let a = stack.pop();
                let b = stack.pop();
                 stack.push(Math.trunc(b / a));
            }
            else{
                stack.push(parseInt(c))
            }
        }
        return stack[0]



    }
}
