// function twoArrays(k, A, B) {
//     const n = A.length
//     const hashA = {}

//     for (let num of A) {
//         hashA[num] = (hashA[num] || 0) + 1
//     }
    
//     for (let num of B) {
//         hashB[num] = (hashB[num] || 0) + 1
//     }

//     for (let num in A) {
//         if (hashB[num])
//     }
// }

function twoArrays(k, A, B) {
    const n = A.length
    A.sort((a,b) => a-b)
    B.sort((a,b) => b-a)

    let result = "YES"

    for (let i = 0; i < n; i++) {
        if (A[i] + B[i] < k) {
            result = "NO"
            break
        }    
    }
    return result
}

// console.log(twoArrays(10, [2,1,3], [7,8,9]))
// console.log(twoArrays(5, [1,2,2,1], [3,3,3,4]))

const checkInclusion = function(s1, s2) {
    const sortedOne = s1.split('').sort()
    const reverseOne = s1.split('').reverse()
    const sortedTwo = s2.split('')
    const n = sortedTwo.length
    let result = false

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < sortedOne.length; j++) {
            if (sortedOne)
        }
    }
    return result
}

console.log(checkInclusion("ab", "eidbaooo"))
console.log(checkInclusion("ab", "eidboaoo"))