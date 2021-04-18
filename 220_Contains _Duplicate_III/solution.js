/*
TreeSet Data Structure
 */

class Node {
    constructor(x) {
        this.val = x
        this.left = null
        this.right = null
    }

    successor() {
        let node = this
        if (node && node.right) {
            node = node.right
            while (node.left) {
                node = node.left
            }
        }

        return node
    }

    predecessor() {
        let node = this
        if (node && node.left) {
            node = node.left
            while (node.right) {
                node = node.right
            }
        }
        return node
    }
}

class BST {
    constructor () {
        this.root = null
    }

    add (root, val) {
        if (!root) {
            return new Node(val)
        }

        if (root.val < val) {
            root.right = this.add(root.right, val)
        } else {
            root.left = this.add(root.left, val)
        }

        return root
    }

    search (root, val) {
        if (!root) return null
        if (root.val === val) return root
        if (root.val < val) {
            return this.search(root.right, val)
        } else {
            return this.search(root.left, val)
        }
    }

    nextBigger (root, val) {
        let nextBigger = null
        while (root) {
            if (root.val >= val) {
                nextBigger = root
                root = root.left
            } else {
                root = root.right
            }
        }
        return nextBigger
    }

    prevSmaller (root, val) {
        let prevSmaller = null
        while (root) {
            if (root.val <= val) {
                prevSmaller = root
                root = root.right
            } else {
                root = root.left
            }
        }
        return prevSmaller
    }

    delete (root, val) {
        if (!root) return null
        if (root.val < val) {
            root.right = this.delete(root.right, val)
        } else if (root.val > val) {
            root.left = this.delete(root.left, val)
        } else {
            if (root.right) {
                let next = root.successor()
                root.val = next.val
                root.right = this.delete(root.right, next.val)
            } else if (root.left) {
                let prev = root.predecessor()
                root.val = prev.val
                root.left = this.delete(root.left, prev.val)
            } else {
                root = null
            }
        }
        return root
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = function(nums, k, t) {
    let bst = new BST()
    for (let i = 0; i < nums.length; i++) {
        // get first node that is >= nums[i]
        let next = bst.nextBigger(bst.root, nums[i])
        if (next && next.val <= nums[i] + t) return true

        // get last node that is <= nums[i]
        let prev = bst.prevSmaller(bst.root, nums[i])
        if (prev && prev.val >= nums[i] -t) return true
        bst.root = bst.add(bst.root, nums[i])
        if (k <= i) {
            bst.root = bst.delete(bst.root, nums[i-k])
        }
    }
    return false
};

let arr1 = [1,2,3,1]
let arr2 = [1,0,1,1]
let arr3 = [1,5,9,1,5,9]

console.log(containsNearbyAlmostDuplicate(arr1, 3, 0))

























