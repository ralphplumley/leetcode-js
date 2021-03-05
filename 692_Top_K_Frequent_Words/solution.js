/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
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

let topKFrequent = function(words, k) {
    /*
      organize a dict
      {
          "the": 4
          "is": 3,
          ...
      }

      create a maxHeap and push each key value in (tuple? [4, "the"])

      loop through k times
          push into output array the top element

    */

    let dict = {}
    words.forEach((word) => {
        if (!(word in dict)) {
            dict[word] = 1
        } else {
            dict[word]++
        }
    })

    let maxHeap = new MaxHeap()
    for (let key in dict) {
        maxHeap.add([dict[key], key])
    }

    let output = []
    for (let i = 0; i < k; i++) {
        let maxElement = maxHeap.remove()
        output.push(maxElement[1])
    }

    return output

};

console.log(topKFrequent(["aaa", "aa", "a"], 1))
console.log(topKFrequent(["a", "aa", "aaa"], 2))
