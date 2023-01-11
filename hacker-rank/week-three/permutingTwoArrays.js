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
    let s = {}, s1sum = 0, s2sum = 0,
        left = 0, right = s1.length - 1;
    
    for (let i = 0; i < s1.length; i++) {
        s1sum += s1.charCodeAt(i);
        s2sum += s2.charCodeAt(i);
    }
    
    while (right < s2.length) {
        if (s1sum === s2sum) {
            if (isTheSameFreq(s1, s2.substring(left, right + 1))) return true
        }  
        right++;
        if (!s2[right]) return false;
        s2sum = s2sum - s2[left++].charCodeAt(0) + s2[right].charCodeAt(0);
    }
    
    return false;
    
    
    function isTheSameFreq(s1, s2) {
        let counter = 0;
        for (let i = 0; i < s1.length; i++)
            if (s2.includes(s1[i])) counter++;
        
        return counter === s1.length;
    }
};
console.log(checkInclusion("ab", "eidbaooo"))
console.log(checkInclusion("ab", "eidboaoo"))