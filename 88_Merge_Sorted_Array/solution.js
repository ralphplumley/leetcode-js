/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1

    for(let p = m + n - 1; p >= 0; p--) {
        if (p2 < 0) break
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1--]
        } else {
            nums1[p] = nums2[p2--]
        }
    }
};

merge([0], 0, [1], 1) //=> [1]
merge([1], 1, [], 0)
merge([1,2,3,0,0,0], 3, [2,5,6], 3)