var maxHeight = function(C) {
    let len = C.length, dp = new Array(len)
    for (let i = 0; i < len; i++) C[i].sort((a,b) => a - b)     // Sort each box's dimensions, small to large
    C.sort(([a,b,c],[d,e,f]) => a-d ? a-d : b-e ? b-e : c-f)    // Sort all boxes by dimensions, small to large
    for (let j = 0, b = C[0]; j < len; b = C[++j]) {            // Iterate through the boxes
        dp[j] = b[2]                                            // Store the box height as the initial best value
        for (let i = 0, a = C[0]; i < j; a = C[++i])            // Then check each previous stack of boxes
            if (a[0] <= b[0] && a[1] <= b[1] && a[2] <= b[2])   // To see which ones can fit on the current box
                dp[j] = Math.max(dp[j] || b[2], dp[i] + b[2])   // And set the best value for the current box
    }
    return Math.max(...dp)                                      // Return the best possible stack
};

const input = [[50,45,20],[95,37,53],[45,23,12]]
console.log(maxHeight(input))

