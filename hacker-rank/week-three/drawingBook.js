// Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page .

// Ex n = 5, p = 3
// [blank, 1], [2, 3], [4, 5]


function pageCount(n, p) {
    const pageSpread = [[0,1]]
    let flip = 0
    
    for (let i = 1; i < n/2; i++) {
        pageSpread.push([i*2, (i*2)+1])
    }

    for (let i = 0; i < pageSpread.length; i++) {
        let left = pageSpread[i[0]]
        let right = pageSpread[i[1]]

        if (left !== p && right !== p) {
            flip += 1
        } else {
            flip += 1
            break
        }
    }
    return Math.floor(flip/2)
}

console.log(pageCount(5, 3))
console.log(pageCount(8, 4))