function simpleMultiplication(number) {
   if (number % 2 === 0) {
     return number * 8
   } else {
     return number * 9
   }
 }
 
 
function simplifyTern(n) {
   return n % 2 === 0 ? n * 8 : n * 9
}
   
console.log(simpleMultiplication(3) + ' ; ' + simplifyTern(3))