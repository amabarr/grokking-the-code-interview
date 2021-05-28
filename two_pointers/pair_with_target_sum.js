/*
Given an array of sorted numbers and a target_sum sum, find a pair in the array whose sum is equal to the given target_sum.
*/

//examples:

// [1, 2, 4] --> 5 returns [1, 4];
// [1] find 3 returns [-1, -1];

// [2, 3, 4, 5, 6] --> 11 true

const pairSum = (arr, target) => {
	let p1 = 0,
		p2 = arr.length - 1;

	while (p1 < p2) {
		const currSum = arr[p1] + arr[p2];

		if (currSum === target) return [p1, p2];

		if (currSum < target) {
			p1++;
		} else {
			p2--;
		}
	}

	return [-1, -1];
};
