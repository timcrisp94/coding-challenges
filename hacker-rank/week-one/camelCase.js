function processData(input) {
    const n = input.length
    const inputArray = input.split(";")
    let splitOrCombine = inputArray[0]
    let type = inputArray[1]
    let string = inputArray[2]
    
    if (splitOrCombine === "S") {
        let splitOut = string.replace(/([a-zA-Z])(?=[A-Z])/g, "$1 ").toLowerCase()
        if (type === "M") {
            return splitOut.replace(/[{()}]/g, '')
        } else {
            return splitOut
        }

    } else {
        return string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    }
}


console.log(processData("S;M;plasticCup()"))
console.log(processData("C;C;code swarm"))
console.log(processData("C;M;mouse pad"))
console.log(processData("S;V;iPad"))
console.log(processData("S;V;iPad"))


