/**
 * Find Numbers with Even Number of Digits
 * Author: Imran Parthib
 * Date: May 02, 2025
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums: number[]): number => {
    let evenCount: number = 0;
    for(let i: number = 0 ; i<nums.length; i++){
        if(nums[i].toString().length %2===0){
            evenCount++;
        }
    }
    return evenCount;
};

let nums = [12, 34, 56, 677, 777, 89];
const result: number = findNumbers(nums);
console.log(result)
