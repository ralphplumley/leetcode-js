/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = []

    for (let i = temperatures.length - 1; i >= 0; i--) {
        let curr = temperatures[i]
        while (stack.length && stack[stack.length - 1][0] <= curr) stack.pop()

        if (stack.length === 0) temperatures[i] = 0
        else temperatures[i] = stack[stack.length - 1][1] - i

        stack.push([curr, i])
    }

    return temperatures
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures))
