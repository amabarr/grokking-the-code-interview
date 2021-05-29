/*

Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

examples:

[-3, 1, 5, 2, 0] closest to 7
7

[-3, 1, 5, 2, 10] closest to 100
17

approach:
sort it
store smallest difference

loop through elements
3 pointers --> this loop, and then a left and right.
if i find the sum, return it.
compare differences at each numbers --> compare to current smallest diff
if the difference is too large and psotive, reduce right
if its smaller than zero, increase left


return target - smallestDiff
*/

const tripleSum = (arr, target) => {
	arr.sort((a, b) => a - b);
	let smallestDiff = Infinity;

	for (let i = 0; i < arr.length - 2; i++) {
		let left = i + 1,
			right = arr.length - 1;

		while (left < right) {
			const currentDiff = target - arr[left] - arr[right] - arr[i];

			if (Math.abs(currentDiff) < Math.abs(smallestDiff)) {
				smallestDiff = currentDiff;
			}

			if (currentDiff > 0) {
				left++;
			} else {
				right--;
			}
		}
	}

	return target - smallestDiff;
};
