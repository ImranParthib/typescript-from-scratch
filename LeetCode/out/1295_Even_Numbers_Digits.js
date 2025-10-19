"use strict";
/**
 * Find Numbers with Even Number of Digits
 * Author: Imran Parthib
 * Date: May 02, 2025
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums) => {
    let evenCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            evenCount++;
        }
    }
    return evenCount;
};
let nums = [12, 34, 56, 677, 777, 89];
const result = findNumbers(nums);
console.log(result);
//# sourceMappingURL=1295_Even_Numbers_Digits.js.map