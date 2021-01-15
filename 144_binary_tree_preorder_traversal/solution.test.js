const preorderTraversal = require('./solution_iterative')

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

test('#1', () => {
    let root = new TreeNode(1)
    let node1 = new TreeNode(2)
    let node2 = new TreeNode(3)
    root.right = node1
    node1.left = node2
    let solution = [1,2,3]
    expect(preorderTraversal(root)).toEqual(solution)
})

test('#2', () => {
    let root = new TreeNode(1)
    let node1 = new TreeNode(2)
    root.left = node1
    let solution = [1,2]
    expect(preorderTraversal(root)).toEqual(solution)
})

test('#3', () => {
    let root = new TreeNode(1)
    let node = new TreeNode(2)
    root.right = node
    let solution = [1,2]
    expect(preorderTraversal(root)).toEqual(solution)
})