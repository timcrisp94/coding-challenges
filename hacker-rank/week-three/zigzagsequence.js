function findZigZagSequence(arr) {
    const n = arr.length
    const sortedArray = arr.sort((a,b) => a-b)
    const mid = Math.floor(n/2)
    const result = [...sortedArray.slice(0, mid), ...sortedArray.slice(mid, n).sort((a,b) => b-a)]

    console.log(result.join(' '))
}

