function maximumPerimeterTriangle(sticks) {
    const n = sticks.length
    const sortedSticks = sticks.sort((a, b) => a-b)
    let result = []
    let i = n-3

    while (i >= 0 && sticks[i] + sticks[i+1] <= sticks[i+2]) {
        i -= 1
    }

    if (i >= 0) {
        result.push(sortedSticks[i])
        result.push(sortedSticks[i+1])
        result.push(sortedSticks[i+2])
        return result
    } else {
        result.push(-1)
        return result
    }
}

console.log(maximumPerimeterTriangle([1,2,3,4,5,10]))