/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let rotateRight = function(head, rotations) {
    if (head === null || head.next === null || rotations <= 0) return head

    // find the length and last node of the list
    let last_node = head
    let list_length = 1

    while (last_node.next !== null) {
        last_node = last_node.next
        list_length += 1
    }

    last_node.next = head // this creates a circular list now
    rotations %= list_length // no need to do rotations more than the length of the list

    let skip_length = list_length - rotations // this is the number of nodes to move forward

    // let's find the last node of rotated list
    let last_node_of_rotated_list = head
    for (let i = 0; i < skip_length - 1; i++) {
        last_node_of_rotated_list = last_node_of_rotated_list.next
    }

    // now, the last node of rotated list's next is the new head
    head = last_node_of_rotated_list.next
    // and we can now point next to null
    last_node_of_rotated_list.next = null

    return head

};