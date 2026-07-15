class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        for i in range(len(numbers)):
            for y in range(i,len(numbers)):
                if numbers[i] + numbers[y] == target :
                    return [i+1,y+1]

        return []


           