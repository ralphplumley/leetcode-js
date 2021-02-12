function subsets(nums: number[]): number[][] {
    const subsets: number[][] = []
    subsets.push([])

    for (let i = 0; i < nums.length; i++) {
        let currentNumber:number = nums[i];

        // we will take all existing subsets and insert the current number in them to create new subsets
        const n:number = subsets.length;

        for (let j = 0; j < n; j++) {
            // create a new subset from the existing subset and insert the current element to it
            const set1: number[] = subsets[j].slice(0); // clone the permutation
            set1.push(currentNumber);
            subsets.push(set1);
        }
    }

    return subsets;
};