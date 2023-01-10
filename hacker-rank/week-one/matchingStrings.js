function matchingStrings(strings, queries) {
    const result = []
    const hash = {}
    
    for (let s of strings) {
        hash[s] = (hash[s] || 0) + 1
    }

    for (let q of queries) {
        hash[q] ? result.push(hash[q]) : result.push(0)
    }
    return result
}

console.log(matchingStrings(["aba","baba","aba","xzxb"],["aba","xzxb","ab"]))