//remove duplicates from an array
// Approach-01:: Using a Set (most common & simplest)
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1,2,3,4]
//Time Complexity: O(n) (iterating + inserting into Set is average O(1) per element)
//Space Complexity: O(n) (new Set + new array of unique values)
//time: 6.535 seconds

// Approach-02:: Using a Map / Object for frequency counting
//manually track seen elements and push only once
// function removeDuplicates(arr) {
//   let seen = {};
//   let result = [];
//   for (let val of arr) {
//     if (!seen[val]) {
//       seen[val] = true;
//       result.push(val);
//     }
//   }
//   return result;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1,2,3,4]
//Time Complexity: O(n) (one pass, object lookups are O(1))
//Space Complexity: O(n) (object + new array)
//time: 5.548 seconds

//Approach-03:: Sorting First, Then Removing Adjacent Duplicates
// function removeDuplicates(arr) {
//   arr.sort((a, b) => a - b);
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0 || arr[i] !== arr[i - 1]) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(removeDuplicates([3, 1, 2, 2, 3, 1])); // [1,2,3]
//Time Complexity: O(n log n) (sorting dominates)
//Space Complexity: O(n) for the result (if sorting in-place, O(1) extra beyond result arra
//time: 1.534 secs

//Approach-04::In-place Removal (if allowed, sorted array)
//If array is sorted already, you can remove duplicates in-place using two pointers:
// function removeDuplicatesInPlace(arr) {
//   if (arr.length === 0) return 0;
//   let j = 0; // index for unique elements
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[j]) {
//       j++;
//       arr[j] = arr[i];
//     }
//   }
//   return arr.slice(0, j + 1);
// }

// console.log(removeDuplicatesInPlace([1,1,2,2,3,3])); // [1,2,3]
//Time Complexity: O(n)
//Space Complexity: O(1) extra (in-place)
//time:: 1.13 secs

// Summary Table
// Approach	Time Complexity	Space Complexity	Order Preserved?
// Set	O(n)	O(n)	✅
// Map/Object	O(n)	O(n)	✅
// Sort + check neighbors	O(n log n)	O(n)	❌ (order lost)
// In-place (sorted array)	O(n)	O(1)	❌ (needs sorted input)


//Approach: Hashmap / Object Counting
//hashmap approach where you not only remove duplicates but also count their frequency