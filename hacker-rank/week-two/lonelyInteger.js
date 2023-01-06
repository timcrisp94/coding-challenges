function lonelyinteger(a) {
    const hash = {}

    for (let num of a) {
        hash[num] = (hash[num] || 0) + 1
    }

    for (let num in hash) {
        if (hash[num] === 1) return num
    }
}

console.log(lonelyinteger([1,2,3,4,3,2,1]))