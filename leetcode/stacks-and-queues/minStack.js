class MinStack {
  constructor() {
    this.stack = []
    this.minStack = []
  }

  push(val) {
    if (!this.stack.length) {
      this.stack.push(val)
      this.minStack.push(val)
    } else {
      this.stack.push(val)
      this.minStack.push(Math.min(this.minStack.at(-1), val))
    }
  }
  pop() {
    if (!this.stack.length) return null
    this.minStack.pop()
    return this.stack.pop()
  }
  top() {
    return this.stack.at(-1)
  }
  getMin() {
    return this.minStack.at(-1)
  }
}