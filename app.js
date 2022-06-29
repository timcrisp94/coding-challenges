/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/


function order(words) {
   return words.split(' ').sort(function(a, b) {
      return a.match(/\d/) - b.match(/\d/)
   }).join(' ')
}

console.log(order("is2 Thi1s T4est 3a"))

/*

/ nested for loop

   function order(words) {
   let array = words.split(' ')
   let sortedArray = []

   for (let i = 0; i <= array.length; i++) {
      for (let j = 0; j < array.length; j++) {
         if (array[j].indexOf(i) >= 0) {
            console.log(array[j])
            console.log(array[j].indexOf(i))
            sortedArray.push(array[j])
         }
      }
   }
   return sortedArray.join(' ')
}

/ map > sort > map > slice
   
   function order(words) {
      return words && words.split(' ').map(word => word.match(/\d/) + word).sort().map(word => word.slice(1)).join(' ')
   
   }

*/