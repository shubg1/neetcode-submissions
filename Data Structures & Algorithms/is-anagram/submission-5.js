class Solution {
 
    
    isAnagram(s, t) {
    if( s.length == t.length){
    let temp  = false;
    let sarray = s.split('');
    let tarray = t.split('');
    let scount = {};
    let tcount = {};
    for(let i=0; i<sarray.length; i++){
      
        scount[sarray[i]] = 1 + (scount[sarray[i]]? scount[sarray[i]]:0);
        tcount[tarray[i]] = 1 + (tcount[tarray[i]]? tcount[tarray[i]]:0);
    }
 for(let s in scount){
  if(scount[s] != tcount[s])
   return false;
 }
 return true;
 }
 return false;
}

}
  // tarray.pop(sarray[i]);
        // console.log(tarray);