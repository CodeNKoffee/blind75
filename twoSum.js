// Blind75 - 3

/**
 * My Solution:
 * Time: O(n^2)
 * Space: O(1)
 */
// var twoSum = function(nums, target) {
//   arr = new Array();
//   for (let i = 0; i < nums.length; i++) {
//     val = nums[i];
//     if (val <= target) {
//       arr.push(val);
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; i < arr.length; j++) {
//       if (i === j) {
//         j++;
//       }
//       if (nums[i] + nums[j] === target) {
//         return [i , j];
//       }
//     }
//   }
//   return false;
// };


/**
 * Ideal Solution
 * Time: O(n)
 * Space: O(n)
 */
var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return false;
};
