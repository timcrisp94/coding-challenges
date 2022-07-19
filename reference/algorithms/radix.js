function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr) {
  let maxDigits = 0
  for (let num of arr) {
    maxDigits = Math.max(maxDigits, digitCount(num))
  }
  return maxDigits
}

function radixSort(arr) {
  const maxDigitCount = mostDigits(arr)

  for (let k = 0; k < maxDigitCount; k++) {
    let buckets = Array.from({length: 10}, () => [])
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k)
      becket[digit].push(arr[i])
    }
    arr = [].concat(...buckets)
  }
  return arr
}