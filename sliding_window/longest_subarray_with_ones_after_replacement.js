/*

Given a n array containing 0 and 1s, if you are allowed to replace no more than "k" 0s with 1s, find the length of the longest continguous subarray having all 1s

examples:

1)
[0, 1, 1, 1, 0] k = 2
output = 5


2)
[0, 1, 0 , 0, 1, 1, 0, 1, 1, 0, 0, 1, 1]
k = 3
output = 9

declare window start
max

loop through, count ones, 

substract from length
while 0 count is less than or equal to k, continue

while it isnt, reduce the windowStart until it is.

max = Math.max(i - windowStart + 1, max)
*/

const longest_subarray_with_ones_after_replacement = (arr, k) => {
	let windowStart = 0,
		max = 0,
		maxOnesCount = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 1) {
			maxOnesCount++;
		}

		if (i - windowStart + 1 - maxOnesCount > k) {
			if (arr[windowStart] === 1) {
				maxOnesCount--;
			}
			windowStart++;
		}

		max = Math.max(max, i - windowStart + 1);
	}

	return max;
};
