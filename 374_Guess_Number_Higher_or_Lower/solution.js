var guessNumber = function(n) {
    if (n === 1) return 1
    
    let low = 1,
        high = n,
        mid,
        result
    
    while (low <= high) {
        mid = Math.floor(low + (high - low) / 2)
        result = guess(mid)
        
        // correct guess
        if (result === 0) return mid
        
        //  we guessed too high
        if (result === -1) {
            high = mid - 1
        } else if (result === 1) {
        //  we guessed too low
            low = mid + 1
        } 
    }
};