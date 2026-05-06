class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = '';
        for( let i of strs){
            str = str + i.length + '#'+i
        }
        
        return str;

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

      let res= [];
      let i = 0;
       while (i<str.length){
        let j = i;
      while(str[j] !== '#'){j++;};
       let len = parseInt(str.substring(i,j))
       console.log(len)
        i = j + 1;
        j = i + len;
       res.push(str.substring(i,j));
       i=j
       }
       return res;



    }
}
