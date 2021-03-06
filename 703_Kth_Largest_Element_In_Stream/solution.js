class MinHeap {
    constructor(capacity) {
        this.items = []
        this.capacity = capacity
    }

    add(val) {
        this.items.push(val)
        this.bubbleUp(this.items.length - 1)
        if (this.items.length > this.capacity) this.remove()
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

        if (parent >= 0 && this.items[parent] > this.items[max]) max = parent

        if (max !== index) {
            this.swap(max, index)
            this.bubbleUp(max)
        }
    }

    trickleDown(index) {
        const leftChild = 2 * index + 1
        const rightChild = 2 * index + 2
        let min = index

        if(leftChild < this.items.length && this.items[leftChild] < this.items[min]) min = leftChild;
        if(rightChild < this.items.length && this.items[rightChild] < this.items[min]) min = rightChild;

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
