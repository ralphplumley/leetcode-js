/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

/*
// iterative
var getSum = function(a, b) {
      let carry;
      while((a & b) !== 0){
          carry = (a & b) << 1;
          a = a ^ b;
          b = carry;
      }
      return a ^ b;
};
*/

// recursive
var getSum = function(a, b) {
    if (b) {
        const newA = a ^ b,
            newB = (a & b) << 1
        return getSum(newA, newB)
    } else {
        return a
    }
};
