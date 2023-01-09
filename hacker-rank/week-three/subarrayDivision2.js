function birthday(s, d, m) {
    const n = s.length
    let matches = 0

    for (let i = 0; i < n; i++) { 
        let sum = s.slice(i, i+m).reduce((a,b) => a + b)
        if (sum === d) matches++
    }
    return matches
}


// console.log(birthday([2,2,1,3,2], 4, 2))
// console.log(birthday([4], 4, 1))
console.log(birthday([2,5,1,3,4,4,3,5,1,1,2,1,4,1,3,3,4,2,1], 18, 7))