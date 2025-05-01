/**
 * Find Numbers with Even Number of Digits
 * Author: Imran Parthib
 * Date: May 02, 2025
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    var evenCount = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            evenCount++;
        }
    }
    return evenCount;
};
var nums = [12, 34, 56, 677, 777, 89];
var result = findNumbers(nums);
console.log(result);
