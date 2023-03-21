class Solution:
    def maxProduct(self, nums: list[int]) -> int:
        res = nums[0]
        curMin, curMax = 1,1

        for n in nums:
            temp = curMax * n
            curMax = max(n * curMax, n * curMin, n)
            curMin = min(temp, n * curMin, n)
            res = max(res, curMax)
        return res
    
sol = Solution()
print(sol.maxProduct([2,3,-2,4]))