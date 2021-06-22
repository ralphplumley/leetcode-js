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
var sortList = function(head) {
    if (head === null || head.next === null) return head

    const [left, right] = split(head)

    // temporary sentinel node to link all the sorted nodes
    const root = new ListNode(null)
    return merge(root, sortList(left), sortList(right))
};

function split(node) {
    let slow = node,
        fast = node

    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }

    const left = node,
        right = slow.next

    // make sure 'left' doesn't link to 'right
    slow.next = null

    return [left, right]
}

function merge(root, left, right) {
    let pointer = root

    while (left !== null || right !== null) {
        if (left === null) {
            pointer.next = right
            right = right.next
        } else if (right === null) {
            pointer.next = left
            left = left.next
        } else {
            if (left.val < right.val) {
                pointer.next = left
                left = left.next
            } else {
                pointer.next = right
                right = right.next
            }
        }
        pointer = pointer.next
    }
    return root.next
}
