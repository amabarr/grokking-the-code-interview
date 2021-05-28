/*

Alternative hash table pair sum solution!

Given an array of sorted numbers and a target_sum sum, find a pair in the array whose sum is equal to the given target_sum.
*/

//examples:

// [1, 2, 4] --> 5 returns [1, 4];
// [1] find 3 returns [-1, -1];

// [2, 3, 4, 5, 6] --> 11 true

const pairSum = (arr, target) => {
	const nums = {};

	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];

		if (target - num in nums) {
			return [nums[target - num], i];
		}

		nums[num] = i;
	}

	return [-1, -1];
};

// O(N) time complexity, O(N) space
