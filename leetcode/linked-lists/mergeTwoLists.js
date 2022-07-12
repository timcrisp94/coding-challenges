/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
*/

var mergeTwoLists = function(list1, list2) {
  let result = [], list1Index = 0, list2Index = 0

  while (list1Index < list1.length && list2Index < list2.length) {
    if (list1[list1Index] <= list2[list2Index]) {
      result.push(list1[list1Index])
      list1Index++
    } else {
      result.push(list2[list2Index])
      list2Index++
    }
    
  }
  return result.concat(list1.slice(list1Index)).concat(list2.slice(list2Index))

}

console.log(mergeTwoLists([1,2,4], [1,3,4]))