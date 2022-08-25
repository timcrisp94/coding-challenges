// BITWISE REFERENCE

// (&) AND
// a & b

const a = 5      // 00000000000000000000000000000101
const b = 3     // 00000000000000000000000000000011

console.log(`a & b: ${a & b}`)  // 00000000000000000000000000000001
// output: 1

// (&=) AND Assignment
// x &= y --> x = x & y

let c = 5;      // 00000000000000000000000000000101
c &= 3;         // 00000000000000000000000000000011

console.log(`c: ${c}`); // 00000000000000000000000000000001
// output: 1

// (~) NOT
// ~a

const d = 5;     // 00000000000000000000000000000101
const e = -3;    // 11111111111111111111111111111101

console.log(`~d ${~d}`); // 11111111111111111111111111111010
// output: -6

console.log(`~e: ${~e}`); // 00000000000000000000000000000010
// output: 2

// (|) OR
// a | b

const f = 5;        // 00000000000000000000000000000101
const g = 3;        // 00000000000000000000000000000011

console.log(`f | g : ${f | g}`); // 00000000000000000000000000000111
// output: 7

// (|=) OR Assignment
// x |= y --> x = x | y
let h = 5;      // 00000000000000000000000000000101
h |= 3;         // 00000000000000000000000000000011

console.log(`h: ${h}`); // 00000000000000000000000000000111
// output: 7

// XOR
// a ^ b

const i = 5;        // 00000000000000000000000000000101
const j = 3;        // 00000000000000000000000000000011

console.log(`i ^ j: ${i ^ j}`); // 00000000000000000000000000000110
// output: 6

let k = 5;      // 00000000000000000000000000000101
k ^= 3;         // 00000000000000000000000000000011

console.log(`k: ${k}`); // 00000000000000000000000000000110
// expected output: 6

// (<<) Zero Fill Left Shift
// a << b

let l = 5       // 00000000000000000000000000000101
l << 1          // 00000000000000000000000000001010 (10)

console.log(`l: ${l << 1}`)

// (>>) Sign Preserving Right Shift
//  a >> b

let m = -5     // 11111111111111111111111111111011
m >> 1         // 11111111111111111111111111111101 (-3)

console.log(`m: ${m >> 1}`)

// (>>>) Zero Fill Right Shift
// a >>> b

let n = 5       // 00000000000000000000000000000101
n >>> 5         // 00000000000000000000000000000010 (2)

console.log(`n: ${n >>> 1}`)
/*

Bitwise AND (&)

The bitwise AND operator(&) returns a 1 in each postion for which the corresponding bits of both operands are 1

The operands are converted to 32-bit integers and expressed by a series of bits (zeroes and ones). Numbers with more than 32 bits get their most significant bits discarded. For example, the following integer with more than 32 bits will be converted to a 32-bit integer:

Before: 
11100110111110100000000000000110000000000001
After:              
10100000000000000110000000000001

Each bit in the first operand is paired with the corresponding bit in the second operand: first bit to first bit, second bit to second bit, and so on.

The operator is applied to each pair of bits, and the result is constructed bitwise.

The truth table for the AND operation is:

a	b	a AND b
0	0	  0
0	1	  0
1	0	  0
1	1	  1

const a = 5      // 00000000000000000000000000000101
const b = 3     // 00000000000000000000000000000011

console.log(a & b)  // 00000000000000000000000000000001
output: 1

--

Bitwise AND assignment (&=)

The bitwise AND assignment operator (&=) uses the binary representation of both operands, does a bitwise AND operation on them and assigns the result to the variable.


let c = 5;      // 00000000000000000000000000000101
c &= 3;         // 00000000000000000000000000000011

console.log(c); // 00000000000000000000000000000001
output: 1

--

Bitwise NOT (~)

The bitwise NOT operator (~) inverts the bits of its operand. Like other bitwise operators, it converts the operand to a 32-bit signed integer

const a = 5;     // 00000000000000000000000000000101
const b = -3;    // 11111111111111111111111111111101

console.log(~a); // 11111111111111111111111111111010
output: -6

console.log(~b); // 00000000000000000000000000000010
output: 2

Bitwise NOTing any number x yields -(x + 1). For example, ~-5 yields 4.

--

Bitwise OR (|)

The bitwise OR operator (|) returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.

const a = 5;        // 00000000000000000000000000000101*
const b = 3;        // 00000000000000000000000000000011*

console.log(a | b); // 00000000000000000000000000000111*
output: 7

101
+++
011
___
111

The truth table for the OR operation is:

a	b	a OR b
0	0	0
0	1	1
1	0	1
1	1	1

___

Bitwise OR assignment (|=)

The bitwise OR assignment operator (|=) uses the binary representation of both operands, does a bitwise OR operation on them and assigns the result to the variable.

let a = 5;      // 00000000000000000000000000000101
a |= 3;         // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000111
output: 7

__

Bitwise XOR (^)

The bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.

const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011

console.log(a ^ b); // 00000000000000000000000000000110
output: 6

The truth table for the XOR operation is:

a	b	a XOR b
0	0	0
0	1	1
1	0	1
1	1	0

--

Bitwise XOR assignment (^=)

The bitwise XOR assignment operator (^=) uses the binary representation of both operands, does a bitwise XOR operation on them and assigns the result to the variable.

let a = 5;      // 00000000000000000000000000000101
a ^= 3;         // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000110
output: 6

<<	
Zero fill left shift

Shifts left by pushing zeros in from the right and let the leftmost bits fall off

Operation  Result  Same As     Result
5 << 1	   10	     0101 << 1	  1010

>>	
Signed right shift	

Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off

Operation  Result  Same As     Result
5 >> 1	   2	     0101 >> 1	 0010

>>>	
Zero fill right shift	

Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

Operation  Result  Same As     Result
5 >>> 1	   2	     0101 >>> 1	 0010


*/

var reverseBits = function (n) {
  let result = 0b0;
  let curr = n;

  for (let i = 0; i < 32; i++) {
      const lastBit = curr & 0b1;
      result = result << 1;
      result = result | lastBit;
      curr = curr >> 1;
  }

  return result >>> 0;
};

const countBits = function (n) {
  let output = [0];
  for (let i = 1; i < n + 1; i++) {
      output.push(output[i >> 1] + (i & 1));
  }
  return output;
};


console.log(reverseBits(00000010100101000001111010011100))
// output: 964176192

console.log(countBits(2))
// output: [0,1,1]