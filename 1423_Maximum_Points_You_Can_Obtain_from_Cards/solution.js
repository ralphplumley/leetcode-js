/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = function(cardPoints, k) {
    let max = 0;
    let total = 0;
    let start = cardPoints.length - k;

    for(let end = cardPoints.length - k; end < k + cardPoints.length; end++) {
        total += cardPoints[end % cardPoints.length];
        if (end - start + 1 > k) {
            total -= cardPoints[start % cardPoints.length];
            start++;
        }
        max = Math.max(max, total);
    }
    return max;
};

//                             0,1,2,3,4,5,6
console.log(maxScore([1,2,3,4,5,6,1], 3))