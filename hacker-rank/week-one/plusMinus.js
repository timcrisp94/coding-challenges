/*
plusMinus(arr) {
const n = arr.length
let totals = [zero=0, pos=0, neg=0]
FOR i UPTO n
IF i === 0, zero++; > 0 ? pos++ : neg++
FOR i IN totals
(totals[i]/n).toFixed(6)
}


*/

let array = [1,1,0,-1,-1]

function plusMinus(arr) {
    const n = arr.length
    let positives = 0
    let negatives = 0
    let zeros = 0

    for (let num of arr) {
        if (num > 0) {
            positives++
        } else if (num < 0) {
            negatives++
        } else {
            zeros++
        }
    }

    let result = [positives, negatives, zeros]
    for (let r of result) {
        console.log((r/n).toFixed(6))
    }
}
console.log(plusMinus(array))