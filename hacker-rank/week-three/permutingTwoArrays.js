function twoArrays(k, A, B) {
    const n = A.length
    let diff = 0

    for (let i = 0; i < n; i++) {
        diff = (A[i] + B[i]) - k
    }
    console.log(diff, n)

    if (diff >= n - 1) {
        return "YES"
    } else {
        return "NO"
    }

}

console.log(twoArrays(10, [2,1,3], [7,8,9]))
console.log(twoArrays(5, [1,2,2,1], [3,3,3,4]))