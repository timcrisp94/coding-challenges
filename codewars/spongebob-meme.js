
/*
https://www.codewars.com/kata/5982619d2671576e90000017/train/javascript

You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(spongeMeme("stop Making spongebob Memes!"), 'StOp mAkInG SpOnGeBoB MeMeS!')
Test.assertEquals(spongeMeme("colored teens cant Be successful in tech"), 'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh')
  });
});


*/

function spongeMeme(sentence) { 
  let array = sentence.toLowerCase().split('')
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray.push(array[i].toUpperCase())
    } else {
      newArray.push(array[i])
    }
  }
  return newArray.join('')
}

// map solution

function spongeMemeMap(sentence) {
  return sentence
  .split('')
  .map((letter, i) => i % 2 ? letter.toLowerCase() : letter.toUpperCase())
  .join('')
}

console.log(spongeMeme('colored teens cant Be successful in tech'))
console.log(spongeMemeMap('colored teens cant Be successful in tech'))