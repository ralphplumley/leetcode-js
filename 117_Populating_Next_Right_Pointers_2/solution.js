/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

/*
    Time: O(N)
    Space: O(1)
*/

var connect = function(root) {
    if (!root) return null
    let leftMost = root

    while (leftMost !== null) {
        let head = leftMost,
            prev = null

        while (head !== null) {
            if (head.left !== null && head.right !== null) {
                if (prev !== null) {
                    prev.next = head.left
                } else {
                    leftMost = head.left
                }

                head.left.next = head.right
                prev = head.right
            } else if (head.left !== null && head.right === null) {
                if (prev !== null) {
                    prev.next = head.left
                } else {
                    leftMost = head.left
                }
                prev = head.left
            } else if (head.left === null && head.right !== null) {
                if (prev !== null) {
                    prev.next = head.right
                } else {
                    leftMost = head.right
                }
                prev = head.right
            } else {
                if (prev === null) leftMost = null
            }
            head = head.next
        }
    }

    return root
};

/*
this solution is:
Time: O(N)
Space: O(N) - because of the queue

var connect = function(root) {
    if (!root) return null
    const queue = [root]

    while (queue.length > 0) {

        const size = queue.length

        for (let i = 0; i < size; ++i) {
            const node = queue.shift()
            if (i < size - 1) node.next = queue[0]
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }

    return root
}

*/
