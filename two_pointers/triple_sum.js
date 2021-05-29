/*

Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

examples:
[-3, 1, 2, 0, 1, 2] -> [-3, 1, 2]


approach:
sort the array
declare a triplets array

iterate through the array -- currently looking at x
try to find a pair thats equal to -x

return triplets array
*/

const search_triplets = function (arr) {
	arr.sort((a, b) => a - b);
	const triplets = [];

	for (let i = 0; i < arr.length; i++) {
		if (i > 0 && arr[i] === arr[i - 1]) {
			continue;
		}

		const current = arr[i];

		let left = i + 1,
			right = arr.length - 1;

		while (left < right) {
			let currentSum = arr[left] + arr[right];
			if (currentSum === -current) {
				triplets.push([current, arr[left], arr[right]]);
				left++;
				right--;
			} else if (currentSum < -current) {
				left++;
			} else {
				right--;
			}
		}
	}

	return triplets;
};
