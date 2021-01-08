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
var reverseList = function(head) {
    let tmp = null
    let newHead = null

    while (head) {
        tmp = head
        head = head.next
        tmp.next = newHead
        newHead = tmp
    }

    return newHead

};