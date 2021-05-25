/* Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Examples

example 1:
const arr = [2, 1, 5, 2, 3, 2];
const s = 7;
expected output: 2 --> [5, 2]

example 2:
const arr = [3, 4, 1, 1, 6]
s = 8

output: 3 --> 1, 1, 6

*/

const smallestSubArray = (arr, sum) => {
	let min = Infinity;

	let currentSum = 0;
	let windowStart = 0;

	for (let i = 0; i < arr.length; i++) {
		currentSum += arr[i];

		while (currentSum >= sum) {
			min = Math.min(min, i - windowStart + 1);
			currentSum -= arr[windowStart];
			windowStart++;
		}
	}

	return min;
};
