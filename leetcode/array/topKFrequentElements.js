// keep track of k elements using a heap
// insert k elements into the min or max heap
// iterate through remaining numbers and if you find one larger than what we have in the heap, then remove that number and insert the larger one

// const topKFrequent = function(nums, k) {
//   let hashMap = {}
//   let result = []

//   for (let num of nums) {
//     hashMap[num] = (hashMap[num] || 0) + 1
//   }

//   let arr = Object.entries(hashMap)
  
//   arr
//   .sort((a, b) => {
//     return b[1] - a[1]
//   })
//   .slice(0, k)
//   .forEach(element => result.push(+element[0]))

//   return result
// }

const topKFrequent = function(nums, k) {
  let hashMap = {}
  let result = []

  for (let num of nums) {
    hashMap[num] = (hashMap[num] || 0) + 1
  }

  let arr = Object.entries(hashMap)

  arr
  .sort((a, b) => {
    return b[1] - a[1]
  })
  .slice(0, k)
  .forEach(element => result.push(+element[0]))

  return result
}


// const topKFrequentHeap = (nums, k) => {
//   let freqMap = new Map()
//   let result = []

//   for (let num of nums) {
//     freqMap[num] = (freqMap[num] || 0) + 1   
//   }

//   let heap = new MaxFreqHeap()

//   for (let num of freqMap) {
//     heap.insert(num[0], num[1])
//   }

//   while (k > 0) {
//     result.push(heap.remove())
//     k--
//   }

//   return result
// }

// class Node{
//   constructor(num, frequency) {
//     this.num = num
//     this.frequency = frequency
//   }
// }

// class MaxFreqHeap{
//   constructor() {
//     this.values = []
//   }
//   insert(num, frequency) {
//     let newElement = new Node(num, frequency)
//     this.values.push(newElement)
//     let currentElementIndex = this.values.length - 1

//     while (currentElementIndex > 0) {
//       let parentIndex = Math.floor((currentElementIndex - 1) / 2)
//       let parentElement = this.values[parentIndex]
//       let currentElement = this.values[currentElementIndex]

//       if (parentElement.frequency > currentElement.frequency) break
      
//       this.values[parentIndex] = currentElement
//       this.values[currentElementIndex] = parentElement
      
//       currentElementIndex = parentIndex
//     }
//     return this
//   }
//   remove() {
//     let elementToBeRemoved = this.values[0]
//     if (this.values.length > 1) {
//       this.values[0] = this.values.pop()
//     }

//     let currentElementIndex = 0
//     let lengthOfHeap = this.values.length

//     while(true) {
//       let leftChildIndex = 2 * currentElementIndex + 1
//       let rightChildIndex = 2 * currentElementIndex + 2
//       let currentElement = this.values[currentElementIndex]
//       let leftChild, rightChild
//       let swap = null

//       if (leftChildIndex < lengthOfHeap) {
//         leftChild = this.values[leftChildIndex]

//         if (currentElement.frequency < leftChild.frequency) {
//           swap = leftChildIndex
//         }
//       }

//       if (rightChildIndex < lengthOfHeap) {
//         rightChild = this.values[rightChildIndex]

//         if ((swap === null && currentElement.frequency < rightChild.frequency) || (swap !== null && rightChild.frequency > leftChild.frequency)) {
//           swap = rightChildIndex
//         }
//       }

//       if (swap === null) break

//       this.values[currentElementIndex] = this.values[swap]
//       this.values[swap] = currentElement
//       currentElementIndex = swap
//     }
//     return elementToBeRemoved.num
//   }
// }


// console.log(topKFrequentHeap([1,1,1,2,2,3], 2))