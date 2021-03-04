/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class MaxHeap {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }

    add(element) {
        this.items.push(element)
        this.bubbleUp(this.items.length - 1)
    }

    remove() {
        this.swap(0, this.items.length - 1) // this moves the largest to the end
        const max = this.items.pop() // pop is the last element in our array, so the largest
        this.trickleDown(0) // find new home for what was the last element
        return max
    }

    bubbleUp(index) {
        const parent = Math.floor((index - 1) / 2)
        let min = index
        if (parent >= 0 && this.items[parent][0] < this.items[min][0]) min = parent
        if (min !== index) {
            this.swap(min, index)
            this.bubbleUp(min)
        }
    }

    trickleDown(index) {
        const leftChild = 2 * index + 1
        const rightChild = 2 * index + 2
        let max = index

        if (leftChild < this.items.length && this.items[leftChild][0] > this.items[max][0]) max = leftChild
        if (rightChild < this.items.length && this.items[rightChild][0] > this.items[max][0]) max = rightChild

        if (max !== index) {
            this.swap(max, index)
            this.trickleDown(max)
        }
    }

    swap(i, j) {
        [this.items[i], this.items[j]] = [this.items[j], this.items[i]]
    }

    peek() {
        return this.items[0]
    }
}

var topKFrequent = function(nums, k) {
    let dict = {}

    // setup our dictionary to see which numbers have k amount
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if(!(num in dict)) {
            dict[num] = 1
        } else {
            dict[num]++
        }
    }

    let maxHeap = new MaxHeap()
    // iterate through each dictionary key
    // if value === k, push into our heap
    for (let num in dict) {
        maxHeap.add([dict[num], num])
    }

    // at this point, our heap will contain all numbers that are repeated K times
    // will also be in maxheap order

    // now, let's add the top K elements from heap
    let topNumbers = [];
    for (let i = 0; i < k; i++) {
        let max = maxHeap.remove()
        topNumbers.push(max[1])
    }

    return topNumbers;
};