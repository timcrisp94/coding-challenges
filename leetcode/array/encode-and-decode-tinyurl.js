/*

535. Encode and Decode TinyURL

TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL.

There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

Implement the Solution class:

Solution() Initializes the object of the system.
String encode(String longUrl) Returns a tiny URL for the given longUrl.
String decode(String shortUrl) Returns the original long URL for the given shortUrl. It is guaranteed that the given shortUrl was encoded by the same object.
 

Example 1:

Input: url = "https://leetcode.com/problems/design-tinyurl"
Output: "https://leetcode.com/problems/design-tinyurl"

*/


// let codeDB = new Map(), urlDB = new Map()
// const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

// const getCode = () => {
//     let code = new Array(6).fill()
//         .map(_ => chars.charAt(~~(Math.random() * 62)))
//     return "http://tinyurl.com/" + code.join("")
// }

// const encode = longUrl => {
//     if (urlDB.has(longUrl)) return urlDB.get(longUrl)
//     let code = getCode()
//     while (codeDB.has(code)) code = getCode()
//     codeDB.set(code, longUrl)
//     urlDB.set(longUrl, code)
//     return code
// }

// const decode = shortUrl => codeDB.get(shortUrl)

let codeDB = new Map()
let urlDB = new Map()
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

const getCode = () => {
  let code = new Array(6).fill().map(_ => chars.charAt(~~(Math.random() * 62)))
  return "http://tinyurl.com/" + code.join("")
}

const encode = longUrl => {
  if (urlDB.has(longUrl)) return urlDB.get(longUrl)
  let code = getCode()
  while (codeDB.has(code)) code = getCode()
  codeDB.set(code, longUrl)
  urlDB.set(longUrl, code)
  return code
}

const decode = shortUrl => codeDB.get(shortUrl)

console.log(encode("https://leetcode.com/problems/design-tinyurl"))
console.log(decode(encode("https://leetcode.com/problems/design-tinyurl"))) 