function processData(input) {
    const n = input.length
    let splitSemi = input.split("\r\n")

    splitSemi.forEach((res) => {
        const inputArray = res.split(";")
        let splitOrCombine = inputArray[0]
        let type = inputArray[1]
        let string = inputArray[2]
        
        if (splitOrCombine === "S") {
            let splitOut = string.replace(/([a-zA-Z])(?=[A-Z])/g, "$1 ").toLowerCase()
            if (type === "M") {
                console.log(splitOut.replace(/[{()}]/g, ''))
            } else {
                console.log(splitOut)
            }
    
        } else {
            let combinedOut = string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())

            console.log(type === "M" ? combinedOut+"()" : combinedOut)
        }
    })
    
}


console.log(processData("S;M;plasticCup()"))
console.log(processData("C;C;code swarm"))
console.log(processData("C;M;mouse pad"))
console.log(processData("S;V;iPad"))
console.log(processData("S;V;iPad"))


