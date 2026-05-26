class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        temp = []
        for i in range(len(nums)):
            t = 1
            for j in range(len(nums)):
               
                if i == j:
                   continue
               
                 
              

                t = t * nums[j]
                # print(t)
            temp.append(t)
        return temp

