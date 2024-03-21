function heapify(arr, n, i) {
  let largest = i; // 初始化最大为根
  let left = 2 * i + 1; // 左 = 2*i + 1
  let right = 2 * i + 2; // 右 = 2*i + 2

  // 如果左子节点大于根节点
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // 如果右子节点大于目前的最大节点
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // 如果最大不是根节点，交换它和根节点
  if (largest != i) {
    let swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    // 递归地定义子树的堆
    heapify(arr, n, largest);
  }
}

// 主函数来做堆排序
function heapSort(arr) {
  let n = arr.length;

  // 构建堆（重新排列数组）
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // 一个个从堆顶取出元素
  for (let i = n - 1; i > 0; i--) {
    // 移动当前根到数组的末尾
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // 调用 max heapify 在减小的堆上
    heapify(arr, i, 0);
  }
}

// 测试数据
let arr = [12, 11, 13, 5, 6, 7];
heapSort(arr);
console.log("Sorted array is", arr);
