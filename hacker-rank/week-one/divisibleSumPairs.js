function divisibleSumPairs(n, k, ar) {
    let result = 0
    let sortedArray = ar.sort((a,b) => a-b)


    for (let l = 0; l < n; l++) {
        for (let r = l + 1; r < n; r++) {
            if ((sortedArray[l] + sortedArray[r]) % k === 0) {
                result +=1                
            }
        }
    }
    return result
}

console.log(divisibleSumPairs(6, 3, [1,3,2,6,1,2]))