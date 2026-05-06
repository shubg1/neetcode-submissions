class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    
    isAnagram(s, t) {
    if( s.length == t.length){
    let temp  = false;
let sarray = s.split('');
let tarray = t.split('')

    for(let i=0; i<sarray.length; i++){
      
 let charToRemove = sarray[i];
    let index = tarray.indexOf(charToRemove);

    if (index > -1) {
        tarray.splice(index, 1); // Removes 1 element at the found index
    }

    }
    if(tarray.length == 0){
        return true;
    }
    else{ return false;}
    


 }
 else{
    return false;

 }



    }
}
  // tarray.pop(sarray[i]);
        // console.log(tarray);