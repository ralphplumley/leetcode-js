class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }


function sumNumbers(root: TreeNode | null): number {
    return recursion(root, 0)
};

function recursion(node: TreeNode, pathSum: number): number {
    if (!node) return 0

    pathSum = 10 * pathSum + node.val

    if (!node.left && !node.right) {
        return pathSum
    }

    return recursion(node.left, pathSum) + recursion(node.right, pathSum)
}