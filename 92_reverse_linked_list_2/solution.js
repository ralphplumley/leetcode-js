/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, p, q) {
    if (p === q) {
        return head;
    }

    // after skipping 'p-1' nodes, current will point to 'p'th node
    let current = head,
        previous = null;
    let i = 0;
    while (current !== null && i < p - 1) {
        previous = current;
        current = current.next;
        i += 1;
    }

    // we are interested in three parts of the LinkedList, the part before index 'p',
    // the part between 'p' and 'q', and the part after index 'q'
    const last_node_of_first_part = previous;
    // after reversing the LinkedList 'current' will become the last node of the sub-list
    const last_node_of_sub_list = current;
    let next = null; // will be used to temporarily store the next node

    i = 0;
    // reverse nodes between 'p' and 'q'
    while (current !== null && i < q - p + 1) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        i += 1;
    }

    // connect with the first part
    if (last_node_of_first_part !== null) {
        // 'previous' is now the first node of the sub-list
        last_node_of_first_part.next = previous;
        // this means p === 1 i.e., we are changing the first node (head) of the LinkedList
    } else {
        head = previous;
    }

    // connect with the last part
    last_node_of_sub_list.next = current;
    return head
};