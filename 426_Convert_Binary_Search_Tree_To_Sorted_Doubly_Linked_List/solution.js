/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

function Node(val, left, right) {
     this.val = val;
     this.left = left;
     this.right = right;
};

const treeToDoublyList = function(root) {
    if (root === null) return null

    let first = null
    let last = null

    const helper = function (node) {
        if (node !== null) {
            // left
            if (node.left !== null) helper(node.left)

            // node
            if (last !== null) {
                // link the previous node (last)
                // with the current one (node)
                last.right = node
                node.left = last
            } else {
                // keep the smallest node to close later on
                first = node
            }
            last = node

            // right
            if (node.right !== null) helper(node.right)
        }
    }

    // kick it off
    helper(root)

    // connect the ends
    last.right = first
    first.left = last

    return first
}

let root = new Node(4)
let c1 = new Node(2)
let c2 = new Node(5)
root.left = c1
root.right = c2

let c3 = new Node(1)
let c4 = new Node(3)
c1.left = c3
c1.right = c4

console.log(treeToDoublyList(root))