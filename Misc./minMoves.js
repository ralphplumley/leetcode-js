function moves(arr) {
    /*
        Two pointer method.
        var nextSlotForOdd will start at the last even element in the input array // could be O(arr.length) worst case
        var i will start at the beginning

        while nextSLotForOdd is greater than i // might have to traverse all worst case, so another O(arr.length)
            if arr[i] is odd
                swap with nextSlotForOdd
                move nextSlotForOdd to the next even element (going backwards, right to left) // accounted for on line 40
                increment swapCount
                increment i

        Time Complexity: O(2 * arr.len) => O(arr.len)
        Space Complexity: O(1) - no extra storage used, just manipulated input array
    */

    let nextSlotForOdd
    for(let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            nextSlotForOdd = i
            break
        }
    }

    let swapCount = 0,
        i = 0

    while (nextSlotForOdd > i) {
        if (arr[i] % 2 !== 0) {
            [arr[i], arr[nextSlotForOdd]] = [arr[nextSlotForOdd], arr[i]]
            nextSlotForOdd--
            while(nextSlotForOdd >= 0 && arr[nextSlotForOdd] % 2 !== 0) {
                nextSlotForOdd--
            }
            swapCount++
        }
        i++
    }

    return swapCount
}

console.log(moves([1,2,3,4,5]))