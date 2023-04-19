// Blind 75 - 1

/**
 * My Solution:
 * Time: O(n^2)
 * Space: O(1)
 */
// var containsDuplicate = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         let temp = nums[i];
//         for (let j = 0; j < nums.length; j++) {
//             if (i === j) {
//                 j++;
//             } else {
//                 if (temp === nums[j]) {
//                     return true;
//                 }
//             }
//         }
//     }
//     return false
// };


/**
 * Ideal Solution
 * Time: O(n)
 * Space: O(n)
 */
var containsDuplicate = function(nums) {
  const set = new Set;
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}