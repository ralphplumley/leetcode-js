const twoSum = require('./solution');

test('should be 2 or more elements in array', () => {
    let sums = [1]
    let target = 9

    expect(twoSum(sums, target)).toEqual(-1);
});


test('expect [3,4]', () => {
    let sums = [2, 7, 11, 15]
    let target = 9

    expect(twoSum(sums, target)).toEqual([0, 1]);
});

test('expect [3,2,4] target 6 to equal [1,2]', () => {
    let sums = [3, 2, 4]
    let target = 6

    expect(twoSum(sums, target)).toEqual([1, 2]);
});