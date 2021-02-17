/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    return function(n) {
        let start = 0
        let end = n

        while (end - start !== 1) {
            let mid = Math.floor(start + (end - start) / 2)
            if (isBadVersion(mid)) {
                end = mid
            } else {
                start = mid
            }
        }
        return end
    };

};