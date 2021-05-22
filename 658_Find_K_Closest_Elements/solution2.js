const findClosestElements = function(arr, k, x) {
    let lo = 0, hi = arr.length - 1;
    while (lo < hi) {
        const mid = Math.floor(lo + (hi - lo) / 2)

        // x - arr[mid] > arr[mid + k]- x ? lo = mid + 1 : hi = mid;

        let a = x - arr[mid]
        let b = arr[mid + k] - x
        // if (x - arr[mid] > arr[mid + k] - x) {
        if (a > b) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }

    return arr.slice(lo, lo + k);
};


let arr = [1,1,1,10,10,10]
let k = 1
let x = 9

console.log(findClosestElements(arr, k, x))
