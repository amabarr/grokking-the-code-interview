/*
Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.



examples:

I: [1, 0 , 1, 2]
O: [0, 1, 1, 2]

I: [0, 1 ,2, 1 ,0]
O: [0, 0, 1, 1, 2]

Input: [2, 2, 0, 1, 2, 0]
Output: [0 0 1 2 2 2 ]

approach:
two pointers
one at the front, and one at the end
if the front is 0, go to next num
if end is two go to next num

if its 0 swap with the front, if its two swap with the end.
*/

[2, 2, 0, 1, 2, 0];

const dutch_flag_sort = function (arr) {
	let low = 0,
		high = arr.length - 1,
		i = 0;

	while (i <= high) {
		if (arr[i] === 0) {
			[arr[i], arr[low]] = [arr[low], arr[i]];
			low++;
			i++;
		} else if (arr[i] === 2) {
			[arr[i], arr[high]] = [arr[high], arr[i]];
			high--;
		} else {
			i++;
		}
	}
};
