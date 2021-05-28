/* Remove duplicates

Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

examples:
[2, 3, 3, 3, 6, 9, 9]
output: 4

approach:
in-place : splice.
two pointers: a fast and a slow. one reads and the other one goes to find the next num that isnt the same

*/

const removeDuplicates = function (nums) {
	let idx = 0;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] != nums[idx]) {
			idx++;
			nums[idx] = nums[i];
		}
	}

	return idx + 1;
};

// O(N) time, O(1) space
