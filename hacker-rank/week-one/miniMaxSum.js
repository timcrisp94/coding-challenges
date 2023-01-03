/*
Given five positive integers, 
find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

arr = [1,3,5,7,9]
minsum = 1+3+5+7 = 16
max = 3+5+7+9 = 24

miniMaxSum
n = arr.length
FOR let i UPTO n
-max = i + i + 1 UPTO 3
-min = ""
-IF arr[i] > max ? arr[i] = max
-IF arr[i] < min ? arr[i] = min

*/

function miniMaxSum(arr) {
    let sum = arr.reduce((a,b) => a+b)

    const min = sum - Math.max(...arr)
    const max = sum - Math.min(...arr)

    console.log(min + " " + max)
}

console.log(miniMaxSum([1,3,5,7,9]))