/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class MinHeap {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }

    add(node) {
        this.items.push(node)
        this.bubbleUp(this.items.length - 1)
    }

    remove() {
        this.swap(0, this.items.length - 1)
        const min = this.items.pop()
        this.trickleDown(0)
        return min
    }

    bubbleUp(index) {
        const parent = Math.floor((index - 1) / 2)
        let max = index

        if (parent >= 0 && this.items[parent].val > this.items[max].val) {
            max = parent
        }

        if (max !== index) {
            this.swap(max, index)
            this.bubbleUp(max)
        }
    }

    trickleDown(index) {
        const leftChild = 2 * index + 1
        const rightChild = 2 * index + 2
        let min = index

        if(leftChild < this.items.length && this.items[leftChild].val < this.items[min].val) min = leftChild;
        if(rightChild < this.items.length && this.items[rightChild].val < this.items[min].val) min = rightChild;

        if(min !== index) {
            this.swap(min, index);
            this.trickleDown(min);
        }
    }

    swap(i, j) {
        [this.items[i], this.items[j]] = [this.items[j], this.items[i]]
    }

    peek() {
        return this.items[0]
    }
}

const mergeKLists = function(lists) {
    let minHeap = new MinHeap()
    // put the root of each list in the min heap
    lists.forEach((a) => {
        if (a !== null) {
            minHeap.add(a);
        }
    });

    // take the smallest(top) element form the min-heap and add it to the result
    // if the top element has a next element add it to the heap
    let resultHead = null,
        resultTail = null;

    while (minHeap.items.length > 0) {
        const node = minHeap.remove();
        if (resultHead === null) {
            resultHead = resultTail = node;
        } else {
            resultTail.next = node;
            resultTail = resultTail.next;
        }
        if (node.next !== null) {
            minHeap.add(node.next);
        }
    }

    return resultHead
};