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
    while (head && head.val === val) {
        head.next ? head = head.next : head = null
    }

    let curr = head

    while (curr) {
        if (curr.next && curr.next.val === val) curr.next = curr.next.next
        else curr = curr.next
    }

    return head
};
