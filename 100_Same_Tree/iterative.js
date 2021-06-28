/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) return true
    if (!check(p, q)) return false

    let p_queue = [p],
        q_queue = [q]

    while (p_queue.length > 0) {
        p = p_queue.shift()
        q = q_queue.shift()

        if (!check(p, q)) return false
        if (p !== null) {
            if (!check(p.left, q.left)) return false
            if (p.left !== null) {
                p_queue.push(p.left)
                q_queue.push(q.left)
            }

            if (!check(p.right, q.right)) return false
            if (p.right !== null) {
                p_queue.push(p.right)
                q_queue.push(q.right)
            }
        }
    }

    return true

};

const check = function (p, q) {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    if (p.val !== q.val) return false
    return true
}
