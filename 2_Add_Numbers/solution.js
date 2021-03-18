/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

const addTwoNumbers = function(l1, l2) {
    let sentinel = new ListNode()
    let curr = sentinel
    let carry = 0

    while (l1 || l2) {
        let sum = 0

        if (l1) {
            sum += l1.val
            l1 = l1.next || null
        }

        if (l2) {
            sum += l2.val
            l2 = l2.next || null
        }

        sum += carry
        carry = 0

        if (sum >= 10) {
            carry = 1
            sum = sum % 10
        }

        let newNode = new ListNode(sum)
        curr.next = newNode
        curr = curr.next
    }

    if (carry > 0) {
        curr.next = new ListNode(1)
    }

    return sentinel.next
};

let l1 = new ListNode(9)
l1.next = new ListNode(9)
l1.next.next = new ListNode(9)
l1.next.next.next = new ListNode(9)

let l2 = new ListNode(9)

console.log(addTwoNumbers(l1, l2))