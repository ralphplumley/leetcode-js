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
var swapPairs = function(head) {
    // if the list has no node or has only one node left
    if ((head === null) || (head.next === null)) return head

    // nodes to be swapped
    let firstNode = head
    let secondNode = head.next

    // swap
    firstNode.next = swapPairs(secondNode.next)
    secondNode.next = firstNode

    // now, head is secondNode
    return secondNode
};