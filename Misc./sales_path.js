function Node(cost) {
    this.cost = cost;
    this.children = [];
}

let root = new Node(0)
let c1 = new Node(5)
let c2 = new Node(3)
let c3 = new Node(6)
root.children = [c1, c2, c3]

let gc1 = new Node(4)
let gc2 = new Node(2)
let gc3 = new Node(0)
let gc4 = new Node(1)
let gc5 = new Node(5)

c1.children = [gc1]
c2.children = [gc2, gc3]
c3.children = [gc4, gc5]

let ggc1 = new Node(1)
let ggc2 = new Node(10)

gc2.children = [ggc1]
gc3.children = [ggc2]

ggc1.children = [new Node(1)]


function getCheapestCost(rootNode) {
    let curr = 0
    let min = 100000

    function recurse(node, curr) {
        curr += node.cost
        if (node.children.length === 0) {
            if (curr < min) {
                min = curr
            }
            curr = 0
        } else {
            node.children.forEach((child) => {
                recurse(child, curr)
            })
        }

    }

    recurse(rootNode, curr)
    return min
}

console.log(getCheapestCost(root))
























