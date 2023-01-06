function processData(input) {
    let spiltSemi = input.split("\r\n");

    spiltSemi.forEach((res) => {
        let value = res.split(";");
        let splitOrCombine = value[0]
        let type = value[1]
        let data = value[2]        
        if(splitOrCombine == "S"){
            if(type === "M") {
                let str = "";   
                for(let i=0; i<data.length; i++){
                    if((data[i] === data[i].toUpperCase()) && !["(", ")"].includes(data[i])) 
                        str += " " + data[i].toLowerCase()
                    else if(!["(", ")"].includes(data[i]))
                        str += data[i];
                }
                console.log(str);
            } else if(["C", "V"].includes(type)) {
                let str = "";
                for(let i=0; i<data.length; i++){
                    if(data[i] === data[i].toUpperCase()){
                        str += " " + data[i].toLowerCase();
                    } else {
                        str += data[i];
                    }
                }
                console.log(str.trimStart());
            }
        }
        else if(splitOrCombine == "C") {
            if(["M","V"].includes(type)) {
                let str = "";
                for(let i=0; i<data.length; i++){
                    if(data[i-1] === " "){
                        str += data[i].toUpperCase();
                    }
                    else if(data[i] !== " ") {
                        str += data[i];
                    }
                }
                console.log(type == "M"? str+"()": str);
            } else if(["C"].includes(type)) {
                let str = data[0].toUpperCase();
                for(let i=1; i<data.length; i++){
                    if(data[i - 1] === " "){
                        str += data[i].toUpperCase();
                    } else if(data[i] !== " ") {
                        str += data[i];
                    }
                }
                console.log(str.trimStart());
            } 
        }
    });
}

console.log(processData("S;M;plasticCup()"))
console.log(processData("C;C;code swarm"))
console.log(processData("C;M;mouse pad"))
console.log(processData("S;V;iPad"))
console.log(processData("S;V;iPad"))
