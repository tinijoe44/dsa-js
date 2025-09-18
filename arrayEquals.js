//check if 2 arrays are equal in dsa js wih possible approaches
//approach 1: Direct Element-by-Element Comparison
//When to use: Arrays of primitive values (numbers, strings, booleans).
//Step1: Check if lengths are the same.
//Step2: Loop through each index and compare values.

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
console.log(arraysEqual([1,2,3],[1,2,3])); // true
console.log(arraysEqual([1,2,3],[3,2,1])); // false

//Time Complexity: O(n) — one pass through the arrays
// Space Complexity: O(1) — no extra storage except loop counter.
//time: 1.353 seconds

//approach 2: Using JSON.stringify
//Quick way for primitives, but not robust for objects inside arrays (order of keys matters).
//Note: Fails if arrays contain objects with different key order or non-serializable values
function arraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(arraysEqual([1,2,3],[1,2,3])); // true
console.log(arraysEqual([1,2,3],[3,2,1])); // false
//Time Complexity::
// O(n) to convert both arrays to strings (serialization)
//O(n) to compare strings and Overall O(n)
//Space Complexity:: O(n) — two intermediate strings created
//time: 0.281 seconds

//approach 3:: Sorting Then Comparing (Unordered Equality)
function arraysEqualUnordered(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let sorted1 = [...arr1].sort();
  let sorted2 = [...arr2].sort();
  return sorted1.every((val, idx) => val === sorted2[idx]);
}
console.log(arraysEqualUnordered([1,2,3],[1,2,3])); // true
console.log(arraysEqualUnordered([1,2,3],[3,2,1])); // true
//Time Complexity:: Sorting each array: O(n log n), Comparing: O(n), Overall: O(n log n)
//Space Complexity:: O(n) — for the copied & sorted arrays
//time: 0.551 seconds

//approach 4:: Deep Equality for Nested Arrays / Objects
function deepEqual(a, b) {
  if (a === b) return true;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }
  if (typeof a === 'object' && typeof b === 'object') {
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (let key of keysA) {
      if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
  }
  return false;
}
console.log(deepEqual([1,2,3],[1,2,3])); // true
console.log(deepEqual([1,2,3],[3,2,1])); // false
//Time Complexity:: O(n) for n elements in the array (recursively checks nested structures)
//Worst-case can approach O(n·m) depending on depth and number of keys
//Space Complexity:: O(d) where d = depth of nested objects (call stack)
//time: 0.653 seconds

//approach 5:: Utility Libraries (Lodash _.isEqual)
//npm install lodash
const _ = require('lodash');
// Example arrays
const arr1 = [1, { x: 2, y: [3, 4] }];
const arr2 = [1, { x: 2, y: [3, 4] }];

if (_.isEqual(arr1, arr2)) {
  console.log('Arrays are deeply equal');
} else {
  console.log('Arrays are NOT equal');
}
//o/p::Arrays are deeply equal
//Time Complexity: ~O(n) (with recursion)
//Space Complexity: ~O(d) (recursion stack)

// | Approach                  | Time Complexity | Space Complexity |
// | ------------------------- | --------------- | ---------------- |
// | Direct element comparison | O(n)            | O(1)             |
// | `JSON.stringify`          | O(n)            | O(n) (strings)   |
// | Sorting then compare      | O(n log n)      | O(n)             |
// | Deep equality (nested)    | O(n)–O(n·m)\*   | O(d)             |
// | Library (`_.isEqual`)     | O(n)–O(n·m)\*   | O(d)             |

// *m = number of keys per object, d = depth of nesting
