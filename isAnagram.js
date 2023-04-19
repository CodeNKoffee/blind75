// Blind 75 - 2

/**
 * My Solution:
 * Time: O(n^3)
 * Space: O(1)
 */
// var isAnagram = function(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   else {
//     for (let i = 0; i < s.length; i++) {
//       let val = s[i];
//       let occurenceS = 1;
//       for (let j = 0; j < s.length; j++) {
//         if (i === j) {
//           j++;
//         }
//         if (val === s[j]) {
//           occurenceS++;
//         }
//       }
//       for (let j = 0; j < t.length; j++) {
//         let newVal = t[j];
//         let occurenceT = 1;
//         for (let k = 0; k < t.length; k++) {
//           if (j === k) {
//             k++;
//           }
//           if (newVal === t[k]) {
//             occurenceT++;
//           }
//           if (occurenceS === occurenceT) {
//             return true
//           }
//         }
//       } 
//     }
//   }
//   return false;
// };


/**
 * Ideal Solution
 * Time: O(n)
 * Space: O(1)
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let freq = new Array(26).fill(0); // Initialize an array of 26 zeroes to represent character frequency

  // Count the frequency of each character in s
  for (let i = 0; i < s.length; i++) {
    let idx = s.charCodeAt(i) - 97; // Convert character to index (a=0, b=1, etc.)
    freq[idx]++;
  }

  // Decrement the frequency of each character in t
  for (let i = 0; i < t.length; i++) {
    let idx = t.charCodeAt(i) - 97; // Convert character to index (a=0, b=1, etc.)
    freq[idx]--;
    if (freq[idx] < 0) {
      return false; // If any frequency is negative, the strings are not anagrams
    }
  }

  return true; // If we get this far, the strings are anagrams
}
