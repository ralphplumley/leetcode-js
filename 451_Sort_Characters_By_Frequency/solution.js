/**
 * @param {string} s
 * @return {string}
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
        if (parent >= 0 && this.items[parent][0] <= this.items[min][0]) {
            if (this.items[parent][0] === this.items[min][0]) {
                if (this.items[parent][1] > this.items[min][1]) {
                    min = parent
                }
            } else {
                min = parent
            }
        }

        if (min !== index) {
            this.swap(min, index)
            this.bubbleUp(min)
        }
    }

    trickleDown(index) {
        const leftChild = 2 * index + 1
        const rightChild = 2 * index + 2
        let max = index

        if (leftChild < this.items.length && this.items[leftChild][0] >= this.items[max][0]) {
            if (this.items[leftChild][0] === this.items[max][0]) {
                if(this.items[leftChild][1] < this.items[max][1]) {
                    max = leftChild
                }
            } else {
                max = leftChild
            }
        }

        if (rightChild < this.items.length && this.items[rightChild][0] >= this.items[max][0]) {
            if (this.items[rightChild][0] === this.items[max][0]) {
                if(this.items[rightChild][1] < this.items[max][1]) {
                    max = rightChild
                }
            } else {
                max = rightChild
            }
        }

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

var frequencySort = function(str) {
    let dict = {}
    let charCount = 0 // there will be this many different chars
    str.split('').forEach((char) => {
        if (!(char in dict)) {
            dict[char] = 1
            charCount++
        } else {
            dict[char]++
        }
    })

    let maxHeap = new MaxHeap()
    for (let char in dict) {
        maxHeap.add([dict[char], char])
    }

    let outputStr = ""
    for (let i = 0; i < charCount; i++) {
        let maxElement = maxHeap.remove()
        for (let j = 0; j < maxElement[0]; j++) {
            outputStr += maxElement[1]
        }
    }

    return outputStr
};