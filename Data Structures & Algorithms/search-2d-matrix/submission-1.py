class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for items in matrix:
            for item in items:
                if target == item:
                    return True
        return False