function subsetsWithDup(nums: number[]): number[][] {
    nums.sort()

    const subsets: number[][] = []
    subsets.push([])

    let startIndex:number = 0,
        endIndex:number = 0

    for (let i = 0; i < nums.length; i++) {
        startIndex = 0
        if (i > 0 && nums[i] === nums[i-1]) {
            startIndex = endIndex + 1
        }
        endIndex = subsets.length - 1

        for (let j = startIndex; j < endIndex + 1; j++) {
            const set1 = subsets[j].slice(0)
            set1.push(nums[i])
            subsets.push(set1)
        }
    }
    return subsets
};