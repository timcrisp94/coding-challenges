// Reverse bits of a given 32 bits unsigned integer.

// const reverseBits = function(n) {
//   let result = 0;
//   let count = 32;

//   while (count--) {
//     result *= 2;
//     result += n & 1;
//     n = n >> 1;
//   }
//   return result;
// };


// solution using only bit manipulation
// const reverseBits = n => {
//   let result = 0;
//   for (let i = 0; i < 32; i++) {
//     result <<= 1;
//     result |= n & 1;
//     n >>>= 1;
//     // uncomment for help visualiziing
//     // console.log(result.toString(2), '<<<', n.toString(2));
//   }
//   return result >>> 0;
// }

const reverseBits = function(n) {
  let bits = n.toString(2);
  bits = bits.split("").reverse().join("")
  for(i = 0; i < 32; i++){
    if(bits[i] === undefined){
      bits += 0;
    }
  }
  return parseInt(bits, 2);
};

console.log(reverseBits(00000010100101000001111010011100))
// output: 964176192