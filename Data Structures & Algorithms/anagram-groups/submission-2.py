class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        temp = {}
        for item in sorted(strs):
            x = ','.join(sorted(item))

            print(item)
            print(x)
            if x in temp:
              temp[x].append(item)
            else: 
                temp[x] =  [item]
        print(temp.values())
        return list(temp.values())