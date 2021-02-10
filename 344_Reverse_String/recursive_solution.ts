/**
 Do not return anything, modify s in-place instead.
 */

// Recursive

function reverseString(s: string[]): void {
    recursive(s, 0, s.length - 1)
};

function recursive(str: string[], left: number, right: number): void {
    if (left >= right) return

    let tmp:string = str[left]
    str[left] = str[right]
    str[right] = tmp
    left++
    right--

    recursive(str, left, right)
}

