// function isValid(s) {
//   if (s.length % 2 !== 0) return false
//   const stack = []

//   for (let i = 0; i < s.length; i++) {
//     const top = stack.at(-1)
//     if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
//       stack.push(s[i])
//     } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
//       stack.pop()
//     } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
//       stack.pop()
//     } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
//     stack.pop()
//     } else {
//       return false
//     }
//   }
//   return stack.length === 0
// }

const isValid = (s) => {
  if (s.length % 2 !== 0) return false

  const stack = []
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ])

  for (let i = 0; i < s.length; i ++) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]))
    } else if (s[i] !== stack.pop()) {
      return false
    }
  }
  return stack.length === 0
}
console.log(isValid('()[]'))