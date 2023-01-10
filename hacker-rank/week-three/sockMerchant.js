const sockMerchant = function(n, ar) {
    const hash = {}
    let pairs = 0

    for (let sock of ar) {
        hash[sock] = (hash[sock] || 0) + 1
    }

    for (let sock in hash) {
        pairs += Math.floor(hash[sock]/2)
    }
    return pairs
}

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]))