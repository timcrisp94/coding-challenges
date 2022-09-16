/*
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

*/

// Dynamic Programming Approach:

const longestCommonSubsequence = function(text1, text2) {  
  let m = text1.length;
  let n = text2.length
  let DP = new Array(m + 1).fill(0).map((_) => new Array(n+1).fill(0))
    
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
     if (text1[i] === text2[j]) {      
       DP[i][j] = 1 + DP[i + 1][j + 1]
     } else {      
       DP[i][j] = Math.max(DP[i + 1][j], DP[i][j + 1])
     }
    }
  }    
  return DP[0][0];
};


