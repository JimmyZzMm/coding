/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let fakeNode = new ListNode();
  pre = fakeNode;
  pre.next = head;
  let cur = head;
  while (cur !== null) {
    while (cur !== null && cur.val === val) {
      pre.next = cur.next;
      cur = cur.next;
    }
    if (cur !== null) {
      pre = cur;
      cur = cur.next;
    }
  }
  return fakeNode.next;
};
