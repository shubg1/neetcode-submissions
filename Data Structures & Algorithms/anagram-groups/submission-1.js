class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let logs = {};
        for (let s of strs){
            let st = s.split('').sort().join('');
            if(!logs[st]){
            logs[st] = [];
            }
            logs[st].push(s);
           

        }
        return Object.values(logs);
    }
}
