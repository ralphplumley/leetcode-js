// DP
const getRow = function(rowIndex) {
    let row = [1]

    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i; j > 0; j--) {
            if (j === i)
                row[j] = 1
            else
                row[j] = row[j-1] + row[j]
        }
    }

    return row
}

console.log(getRow(3))
/*
// Brute force Recursive
// Time: O(2^k)
// Space: O(k)

var getRow = function(rowIndex) {
    let ans = []

    for (let i = 0; i <= rowIndex; i++) {
        ans.push(getNum(rowIndex, i))
    }

    return ans
};

const getNum = function(row, col) {
    if (row === 0 || col === 0 || row === col) return 1
    return getNum(row - 1, col - 1) + getNum(row - 1, col)
}
*/
