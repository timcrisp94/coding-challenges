/*
Convert a non-negative integer num to its English words representation.

*/

const lvl1 = "Zero One Two Three Four Five Six Sever Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen".split(" ")
const lvl2 = "Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety".split(" ")
const lvl3 = "Hundred"
const lvl4 = "Thousand Million Billion".split(" ")



var numberToWords = function(num) {
  let cur = num
  let result = []

  if (num === 0) {
    return "Zero"
  }

  while (cur > 0) {
    let n = cur % 1000
    cur = Math.floor(cur / 1000)
    let words = []

    if (n > 99) {
      words.push(lvl1[Math.floor(n / 100)])
      words.push(lvl3)
      n %= 100
    }

    if (n > 19) {
      words.push(lvl2[Math.floor(n / 10) - 2])
      n %= 10
    }

    if (n > 0) {
      words.push(lvl1[n])
    }

    if (words.length > 0) {
      result.push(words.join(' '))
    }
  }

  if (result.length > 0) {
    result = result.reverse()
    return result.join(' ')
  }
}

console.log(numberToWords(4356))

/*

var numberToWords = function(num) {
  let cur = num
  let result = []
  
  while (cur > 0) {
    let n = cur % 1000
    console.log(`line 19 n = ${n}`)
    cur = Math.floor(cur / 1000)
    console.log(`cur line 21 ${cur}`)
    let words = []
    if (n > 99) {
      words.push(lvl1[Math.floor(n/100)])
      words.push(lvl3)
      n %= 100
      console.log(`line 26 words = ${words}`)
      console.log(`line 26 n = ${n}`)
    }
    if(n>19) {
      words.push(lvl2[Math.floor(n/10)- 2])
      n %= 10
      console.log(`line 26 words = ${words}`)
      console.log(`line 31 n = ${n}`)
    }
    if (n > 0) {
      words.push(lvl1[n])
      console.log(`line 37 words = ${words}`) 
    }
    
    if(words.length > 0) {
      result.push(words.join(' '))
    }
  }

  if (result.length > 0) {
    result = result.reverse()
    return result.join(' ')
  }

  return "Zero"
}

*/