/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function (root) {
  let pre = Number.MIN_SAFE_INTEGER;
  function dfs(root) {
    if (root === null) return true;
    if (!dfs(root.left)) {
      return false;
    }
    if (pre >= root.val) return false;
    pre = root.val;
    return dfs(root.right);
  }
  return dfs(root);
};
