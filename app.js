/*
Map is a collection of keyed data items, like an object. Map allows keys of any type

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.

*/

let map = new Map()

map.set('1', 'str1')
map.set(1, 'num1')
map.set(true, 'bool1')
console.log (map.get(1)) // 'num1'
console.log (map.get('1')) // 'str1'

// maps can use objects as keys

let john = { name: 'John' }
let visitsCountMap = new Map()

// john is the key for the map
visitsCountMap.set(john, 123)
console.log(visitsCountMap.get(john)) // 123

// Iteration over Map
// map.keys() - returns an iterable for keys
// map.values() - returns an iterable for values
// map.entries() - returns an iterable for entries [key, value]

let recipeMap = new Map([
  ['cucumber', 500], // --> insert k, v pairs as an array for initialization
  ['tomatoes', 350],
  ['onion', 50]
])

for (let veg of recipeMap.keys()) {
  console.log(veg) // cucumber, tomatoes, onion
}

for (let amount of recipeMap.values()) {
  console.log(amount) // 500, 350, 50
}

for (let entry of recipeMap) {
  console.log(entry) // key, value pairs
}

// map has a built-in forEach method
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`) // 'cucumber: 500', etc
})

/*

A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.
*/

let set = new Set()

let steve = { name: "Steve"}
let pete = { name: "Pete"}
let mary = { name: "Mary"}

// visits (some users come multiple times)
set.add(steve)
set.add(pete)
set.add(steve)
set.add(mary)
set.add(pete)
console.log(set.size) // 3

for (let user of set) {
  console.log(user.name) // Steve, Pete, Mary
}

// sets are similar to arrays, but array.find checks every element. Set works better because it is optimized internally for uniqueness checks

// Iteration over Set
// we can loop over a set either with for of or forEach

let fruitSet = new Set(["oranges", "apples", "bananas"])

for (let value of fruitSet) {
  console.log(value) // oranges, apples, bananas
}

fruitSet.forEach((value, valueAgain, set) => {
  console.log(value) // oranges, apples, bananas
})

// the callback function passed in forEach has 3 arguments: a value, the same value, and the target object. This is for compatibility with Map which also accepts 3 arguments for its cb 

/*

The same methods Map has for iterators are also supported:

set.keys() – returns an iterable object for values,
set.values() – same as set.keys(), for compatibility with Map,
set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.
*/

// Filter unique array members
// create a function unique(arr) that should return an array with unique items of arr

function uniqueBrute(arr) {
  let practiceSet = new Set()

  for (let el of arr) {
    if (!practiceSet.has(el)) {
      practiceSet.add(el)
    }
  }
  return practiceSet
}

function unique(arr) {
  return Array.from(new Set(arr)) 
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values))

// Filter anagrams
// write a function aclean(arr) that returns an array cleaned from anagrams

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map()

  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('')
    map.set(sorted, word)
  }

  return Array.from(map.values())
}

console.log(aclean(arr))

// Iterable Keys
// we'd like to get an array of map.keys() in a variable and then apply array-specific methods to it

let ikMap = new Map()

ikMap.set("name", "John")

let keys = Array.from(ikMap.keys()) // OR
let spreadKeys = [...ikMap.keys()]


keys.push("more")
spreadKeys.push("more")
console.log(keys, spreadKeys)