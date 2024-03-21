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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];
  findPath(root, result);
  return result;
};

function findPath(root, result, curRes = "") {
  if (root !== null) {
    curRes += curRes.length !== 0 ? `->${root.val}` : `${root.val}`;
    if (root.left == null && root.right == null) {
      result.push(curRes);
    } else {
      findPath(root.left, result, curRes);
      findPath(root.right, result, curRes);
    }
  }
}
