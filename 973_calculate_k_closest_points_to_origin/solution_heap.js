class MaxHeap {
    constructor(capacity) {
        this.items = []
    }

    add(point) {
        this.items.push(point) // add to the end
        if (this.items.length > 1) {
            this.bubbleUp(this.items.length - 1) // take the last element index, and bubble up
        }
    }

    bubbleUp(index) {
        const parent = Math.floor((index - 1) / 2)
        let max = index

        if (parent >= 0 && (distance_from_origin(this.items[parent]) < distance_from_origin(this.items[max]))) {
            max = parent
        }

        if (max !== index) {
            this.swap(max, index)
            this.bubbleUp(max)
        }
    }

    swap(i, j) {
        [this.items[i], this.items[j]] = [this.items[j], this.items[i]]
    }

    peek() {
        return this.items[0]
    }
}

let distance_from_origin = function(point) {
    // ignoring sqrt to calculate the distance
    return (point[0] * point[0]) + (point[1] * point[1]);
}


let kClosest = function(points, k) {
    let maxHeap = new MaxHeap()

    for (let i = 0; i < points.length; i++) {
        maxHeap.add(points[i])
    }

    return maxHeap.items.slice(-k)
};

let arr = [[1,3],[-2,2]]
let k = 1
let arr2 = [[3,3],[5,-1],[-2,4]]
let k2 = 2
console.log(kClosest(arr2, k2))