function strings_xor(one, two) {
    const oneArray = one.split('')
    const twoArray = two.split('')
    const n = oneArray.length
    const result = []

    if (n !== twoArray.length) return undefined

    for (let i = 0; i < n; i++) {
        if (oneArray[i] !== twoArray[i]) {
            result.push(1)
        } else {
            result.push(0)
        }
    }

    return result.join('')
}

console.log(strings_xor("10101", "00101"))