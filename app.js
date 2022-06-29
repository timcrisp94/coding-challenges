/*
given an integer, return an integer that is the reverse ordering of the number
*/

function reverseInt(n) {
   const string = n.toString().split('').reverse().join('')   
   return parseInt(string) * Math.sign(n)   
}

console.log(reverseInt(15))
console.log(reverseInt(981))
console.log(reverseInt(-12))
console.log(reverseInt(0))

/*

/ first solution

function reverseInt(n) {
   const string = n.toString().split('').reverse().join('')
   
   if (n === 0) {
      return 0
   }

   if (Math.sign(n) === -1) {
      return parseInt(string) * -1
   } else {
      return parseInt(string)
   }  
   
}


*/