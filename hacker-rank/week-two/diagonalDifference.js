function diagonalDifference(arr) {
    const n = arr.length
    let leftDiagonal = 0
    let rightDiagonal = 0

    for (let i = 0; i < n; i++) {
        leftDiagonal = leftDiagonal + arr[i][i]
    }
    
    for (let i = 0; i < n; i++) {
        rightDiagonal = rightDiagonal + arr[i][n - 1 - i]
    }
    return Math.abs(rightDiagonal - leftDiagonal)
}


console.log(diagonalDifference([[1,2,3,4],[4,5,6,8],[9,8,9,9]]))

function countingSort(arr) {
    const n = arr.length
    let max = 0
    
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    
    const result = Array(max + 1).fill(0)
    for (let i = 0; i < n; i++) {
        result[arr[i]] += 1
    }
    return result
}


console.log(countingSort([1,1,3,2,1]))

function countingValleys(steps, path) {
    let valleyCount = 0
    let seaLevel = 0
    let valleyStatus = false

    for (let step of path) {
        if (step === "U") {
            seaLevel += 1
        } else {
            seaLevel -= 1
        }

        if (seaLevel < 0 && !valleyStatus) {
            valleyCount += 1
            valleyStatus = true
        } else if (seaLevel >= 0 && valleyStatus) {
            valleyStatus = false
        }

    }
    return valleyCount
}

console.log(countingValleys(8, "UDDDUDUU"))
console.log(countingValleys(8, "DDUUUUDD"))
console.log(countingValleys(12, "DDUUDDUDUUUD"))

function marsExploration(s) {
    let count = 0
    let array = s.split('')
    const n = array.length
    let messageArray = []
    
    for (let i = 0; i < n; i+=3) {
        messageArray.push(array.slice(i, i + 3))
    }

    for (let m of messageArray) {
        if (m[0] !== "S") count += 1
        if (m[1] !== "O") count += 1
        if (m[2] !== "S") count += 1
    }
    
    return count
}

console.log(marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS"))