/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function(arr) {
    let nextSlotForOdd
    for(let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            nextSlotForOdd = i
            break
        }
    }

    let i = 0

    while (nextSlotForOdd > i) {
        if (arr[i] % 2 !== 0) {
            [arr[i], arr[nextSlotForOdd]] = [arr[nextSlotForOdd], arr[i]]
            nextSlotForOdd--
            while(nextSlotForOdd >= 0 && arr[nextSlotForOdd] % 2 !== 0) {
                nextSlotForOdd--
            }
        }
        i++
    }

    return arr
};
let A = [3,1,2,4]
console.log(sortArrayByParity(A))