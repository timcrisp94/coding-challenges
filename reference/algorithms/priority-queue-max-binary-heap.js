// max binary heap //

class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  swap(index1, index2) {
    let temp = this.values[index1]
    this.values[index1] = this.values[index2]
    this.values[index2] = temp
    return this.values
  }
  // "bubble up" values from end
  bubbleUp() {
    // get index of last element
    let index = this.values.length - 1
    // decrement
    while (index > 0) {
      let parentIndex = Math.floor((index - 1)/2)
      // if values is greater than parent, swap
      if (this.values[parentIndex] < this.values[index]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
    return 0
  }
  // adds new value to end (new value calls bubbleUp)
  insert(value) {
    this.values.push(value)
    this.bubbleUp();
    return this.values
  }
  // readjust heap after moving max element
  bubbleDown() {
    let parentIndex = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIndex = (2 * parentIndex) + 1
      let rightChildIndex = (2 * parentIndex) + 2
      let leftChild, rightChild
      let swapIndex = null
      
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild > element) {
          swapIndex = leftChildIndex
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if ((rightChild > element && indexToSwap === null) || rightChild > leftChild && indexToSwap !== null) {
          indexToSwap = rightChildIndex
        }
      }
      if (indexToSwap === null) {
        break
      }
      this.swap(parentIndex, indexToSwap)
      parentIndex = indexToSwap
    }
  }
  removeMax() {
    // swap first and last element
    this.swap(0, this.values.length - 1)
    // pop max value
    let poppedValue = this.values.pop()
    //re-adjust heap if length is greater than 1
    if(this.values.length > 1){
      this.bubbleDown();
    }
    return poppedValue;
  }
}

const heap = new MaxBinaryHeap()

function createHeap(nums) {
  for (let num of nums) {
    heap.insert(num)
  }
  console.log(nums)
  return heap
}

console.log(createHeap([16,4,10,14,7,9,3,2,8,1]))