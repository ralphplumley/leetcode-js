/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
let kClosest = function(points, K) {
    points.sort(function(a,b) {
        return calc(a[0], a[1]) - calc(b[0], b[1])
    })

    return points.slice(0, K)
};

let calc = function(a,b) {
    // distance is a^2 + b^2 = c^2
    let c = Math.sqrt((a**2) + (b**2))
    return c
}

module.exports = kClosest