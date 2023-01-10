function migratoryBirds(arr) {
    const hash = {}
    let max = 0
    let maxId = ""

    for (let bird of arr) {
        hash[bird] = (hash[bird] || 0) + 1
    }

    for (let bird in hash) {
        if (hash[bird] > max) {
            max = hash[bird]
            maxId = bird
        }
    }
    return maxId
}

console.log(migratoryBirds([1,4,4,4,5,3]))