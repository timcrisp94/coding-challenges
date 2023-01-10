// function divisibleSumPairs(n, k, ar) {
//     let result = 0
//     let sortedArray = ar.sort((a,b) => a-b)


//     for (let l = 0; l < n; l++) {
//         for (let r = l + 1; r < n; r++) {
//             if ((sortedArray[l] + sortedArray[r]) % k === 0) {
//                 result +=1                
//             }
//         }
//     }
//     return result
// }

// function divisibleSumPairs(n, k, ar) {
//     // create a frequency array
//     let freq = new Array(k)
//     freq.fill(0)

//     // count occurrences of all remainders
//     for (let i = 0; i < n; i++)
//         ++freq[ar[i] % k]
    
//     let sum = freq[0] * parseInt((freq[0] - 1) / 2, 10)

//     for (let i = 1; i <= k / 2 && i !== (k - i); i++)
//         sum += freq[i] * freq[k - i]

//     if (k % 2 === 0)
//         sum += parseInt(freq[parseInt(k / 2, 10)] * (freq[parseInt(k / 2, 10)] - 1) / 2, 10);
//         return sum;
    
// }

console.log(divisibleSumPairs(6, 3, [1,3,2,6,1,2]))