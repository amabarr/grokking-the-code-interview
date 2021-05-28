/*

Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.


examples:
[3, 2, 3, 6, 3] key = 3
output: 2

*/

const removeKey = (arr, key) => {
	let lastNum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== key) {
			arr[lastNum] = arr[i];
			lastNum++;
		}
	}

	return lastNum;
};

// O(N) time O(1) space
