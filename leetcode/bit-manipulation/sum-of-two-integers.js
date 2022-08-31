// Given two integers a and b, return the sum of the two integers without using the operators + and -.

const getSum = (a, b) => {
  let carry
  while ((a & b) !== 0) {
    carry = (a & b) << 1
    a = a ^ b
    b = carry
  }
  return a ^ b  
} 

console.log(getSum(2,3))

// recursive

const getSumRecursive = function (a, b) {
  return b ? getSumRecursive(a ^ b, (a & b) << 1) : a
}

console.log(getSumRecursive(2,3))