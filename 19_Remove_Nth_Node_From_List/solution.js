/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head,
        fast = head,
        prev = null

    // move fast n nodes ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }

    // move them both at same pace
    // when fast hits the end, slow will be at the right element
    while (fast !== null) {
        prev = slow
        fast = fast.next
        slow = slow.next
    }

    if (prev === null) {
        return slow.next
    } else {
        prev.next = slow.next
    }

    return head
};