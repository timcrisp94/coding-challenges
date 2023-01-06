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