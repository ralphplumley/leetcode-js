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
let reverseList = function(head) {
    if ((head === null) || (head.next === null)) return head

    let next = head.next
    let revHead = reverseList(next)
    next.next = head
    head.next = null
    return revHead

};