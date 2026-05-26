class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        temp = sorted(list(set(nums)))
        t = 1 

        maxs = []
        print(temp)
        if len(temp)> 0:
            for i in range(len(temp)-1):
                if temp[i+1] - temp[i] == 1 :
                    t = t+1
                else : 
                    maxs.append(t)
                    t = 1
        else : t = 0
        maxs.append(t)
        print(t)
        return max(maxs)