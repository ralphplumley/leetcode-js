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

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

const reverseList = function(head) {
    let curr = null,
        prev = null

    while (head) {
        curr = head
        head = head.next
        curr.next = prev
        prev = curr
    }

    return prev

};

let root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)
root.next.next.next = new ListNode(4)
root.next.next.next.next = new ListNode(5)

console.log(reverseList(root))