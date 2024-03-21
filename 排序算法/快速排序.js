function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let partitionedIndex = partition(arr, left, right);
    quickSort(arr, left, partitionedIndex - 1);
    quickSort(arr, partitionedIndex + 1, right);
  }
  return arr;
}
function partition(arr, left, right) {
  let pivot = left;
  let index = left + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, index, i);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}
function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
