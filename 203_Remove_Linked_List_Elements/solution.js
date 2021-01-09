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
var removeElements = function(head, val) {
    let sentinel = new ListNode()
    sentinel.next = head
    let prev = sentinel, curr = head

    while (curr !== null) {
        if (curr.val === val) prev.next = curr.next
        else prev = curr
        curr = curr.next
    }

    return sentinel.next
};