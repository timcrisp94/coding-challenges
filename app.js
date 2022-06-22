function paperwork(n, m) {
   if (n < 0 || m < 0) {
     return 0
   } 
 
   return n * m
}

function paperTern(n, m) {
   return n < 0 || m < 0 ? 0 : n * m
}

console.log(paperwork(5, 2) + ' ; ' + paperTern(5, 2))