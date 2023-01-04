function breakingRecords(scores) {
    const n = scores.length
    
    let min = scores[0]
    let max = scores[0]
    
    let minCount = 0
    let maxCount = 0
    
    for (let i = 1; i < n; i++) {
        if (scores[i] < min) {
            min = scores[i]
            minCount++
        }
        
        if (scores[i] > max) {
            max = scores[i]
            maxCount++
        }
    }
    return [maxCount, minCount]

}


console.log(breakingRecords([3,4,21,36,10,28,35,5,24,42]))
console.log(breakingRecords([10,5,20,20,4,5,2,25,1]))
