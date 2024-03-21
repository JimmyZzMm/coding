/**
 * 1.确定dp数组和下标含义：dp数组下标i对应的就是第i个位置的最长递增子序列长度
 * 2.确定递推公式：if (nums[i] > nums[j]) dp[i]=max(dp[j]+1,dp[i]) 如果下标i的元素大于下标j的元素，则更新dp[i]，经过第二轮遍历之后，就能找出当前位置的最大值
 * 3.dp数组初始化：所有位置初始化为1
 * 4.确定遍历顺序：从前往后推
 * 5.举例推导dp数组
 * 还可以用贪心加二分：整个算法流程为：
设当前已求出的最长上升子序列的长度为 len\textit{len}len（初始时为 111），从前往后遍历数组 nums\textit{nums}nums，在遍历到 nums[i]\textit{nums}[i]nums[i] 时：

如果 nums[i]>d[len]\textit{nums}[i] > d[\textit{len}]nums[i]>d[len] ，则直接加入到 ddd 数组末尾，并更新 len=len+1\textit{len} = \textit{len} + 1len=len+1；

否则，在 ddd 数组中二分查找，找到第一个比 nums[i]\textit{nums}[i]nums[i] 小的数 d[k]d[k]d[k] ，并更新 d[k+1]=nums[i]d[k + 1] = \textit{nums}[i]d[k+1]=nums[i]。

作者：力扣官方题解
链接：https://leetcode.cn/problems/longest-increasing-subsequence/solutions/147667/zui-chang-shang-sheng-zi-xu-lie-by-leetcode-soluti/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = Array(nums.length).fill(1);
  let result = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
        result = Math.max(dp[i], result);
      }
    }
  }
  return result;
};

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
