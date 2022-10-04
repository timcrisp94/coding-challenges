/*
206/12. REVERSE LINKED LIST

Given the head of a singly linked list, 
reverse the list, and return the reversed list.

Example : 
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

in:  (1)->(2)->(3)->(4)->(5)
out: (5)->(4)->(3)->(2)->(1)

- pseudo -
let [prev,cur] = [null,head]
WHILE cur
  [cur.next, prev, cur] = [prev, cur, cur.next]
return prec
*/

const reverseList = function(head) {
  let [prev, cur] = [null, head]
  while(cur) {
    [cur.next, prev, cur] = [prev, cur, cur.next]
  }
  return prev
}

console.log(reverseList([1,2,3,4,5]))