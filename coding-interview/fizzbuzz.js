/*
write a program that console logs the numbers from 1 to n
-for multiples of three print fizz
-for multiples of five print buzz
-for multiples of three and five print fizzbuzz

*/

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
     } else if (i % 5 === 0) {
        console.log('buzz')
     } else if (i % 3 === 0) {
        console.log('fizz')
     } else {
        console.log(i)
     }
  }
}

console.log(fizzbuzz(15))




/*


*/