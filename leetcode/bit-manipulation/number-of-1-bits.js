// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

 var hammingWeight = function(n) {    
  let count = 0;  
  while( n ){          
    n = n & (n-1)            
    count += 1
  }  
  return count
};

console.log(hammingWeight(00000000000000000000000000001011))

// using bit shift left *faster run time*

const hammingWeight2 = (n) => {
  let res = 0
  let cur = 1
  for (let i = 0; i < 32; i++) {
    if ((n & cur) !== 0) {
      res++
    }
    cur = cur << 1
  }
  return res
}

console.log(hammingWeight2(00000000000000000000000000001011))