/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
let search = function (reader, target) {
    // let's get the end bound first
    let start = 0
    let end = 1
    while(reader.get(end) < target) {
        let newStart = end + 1
        // we want to extend the bound by double the current distance
        end += (end - start + 1) * 2
        start = newStart
    }

    return binary_search(reader, target, start, end)
};

let binary_search = function (reader, target, start, end){
    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2)
        let num = reader.get(middle)
        if (num < target) {
            // go up
            start = middle + 1
        } else if (num > target) {
            // go down
            end = middle - 1
        } else {
            // found target
            return middle
        }
    }
    return -1
}