/**
 * @param {number[]} nums
 * @return {SparseVector}
 */

class SparseVector {
    constructor(nums) {
        this.nums = nums
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let sum = 0
    for (let i = 0; i < vec.nums.length; i++) {
        sum += (this.nums[i] * vec.nums[i])
    }
    return sum
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);