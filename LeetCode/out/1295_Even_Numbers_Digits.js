/**
 * Find Numbers with Even Number of Digits
 * Author: Imran Parthib
 * Date: May 02, 2025
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    var even = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            even++;
        }
    }
    return even;
};
var nums = [12, 345, 2, 6, 7896];
var result = findNumbers(nums);
console.log(result);
