function pivot(arr, start = 0) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + i; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)
    quickSort(arr, left, pivotIdx - 1)
    quickSort(arr, pivotIdx + 1, right)
  }
  return arr
}