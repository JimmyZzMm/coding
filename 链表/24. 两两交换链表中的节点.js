/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummyHead = new ListNode();
  dummyHead.next = head;
  let pre = dummyHead;

  let cur = head;
  while (cur && cur.next !== null) {
    let temp = cur.next.next;
    cur.next.next = cur;
    pre.next = cur.next;
    cur.next = temp;
    pre = cur;
    cur = temp;
  }
  return dummyHead.next;
};
