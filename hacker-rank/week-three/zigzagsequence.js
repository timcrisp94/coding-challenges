function findZigZagSequence(arr) {
    const n = arr.length
    const mid = (n-1)/2
    arr[mid], arr[n-1] = arr[n-1], arr[mid]

    let start = mid+1
    let end = n-1

    while (start <= end) {
        arr[start], arr[end] = arr[end], arr[start]
        start = start + 1
        end = end + 1

        for (let i = 0; i < n; i++) {
            if (i == n-1) {
                console.log(arr[i])
            } else {
                console.log(arr[i], end = '')
            }
        }
        return
    }
}

console.log(findZigZagSequence([7,2,5,4,3,6,1]))