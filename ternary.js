// conditional operator fun

/*
condition ? (execute if) truthy : (execute if) falsy
condition ? truthy : falsy
condition ? expIfTrue : expIfFalse
*/

let age = 26
let beverage = (age >= 21) ? "Beer" : "Juice"

let sober = true
let beverageTwo = (sober === true) ? "NA" : "Beer"

console.log(beverage + ' ; ' + beverageTwo)

let greeting = person => {
  let name = person ? person.name : `stranger`
  return `Howdy, ${name}`
}

console.log(greeting({name: `Alice`}) + ' ; ' + greeting(null))

let shoe = 11
let size = (shoe <= 11 && shoe > 10) ? 'buy' : 'sell' 

console.log(size)


let message = ''
let hobbies = ['sailing', 'biking', 'coding']

// do not do a variable assignment inside the ternary; do the assignment afterwords
hobbies.includes('baking') ? message = 'hobby found!' : message = 'hobby not found'

console.log(message)

let face = ''
let masked = ['Excalibur', 'Spiderman']

masked.includes('Excalibur') ? face = 'no face' : face = 'know that face'

console.log(face)


// program to check pass or fail

// let marks = prompt('Enter your marks :')

// // check the solution

// let result = (marks >= 40) ? 'pass' : 'fail'

// console.log(`You ${result} the exam`)


let a = 3
let rezult = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative"

console.log(`The number is ${rezult}`)