/*
Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.


Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

examples:
Input: [4, 6, 10], key = 10
Output: 2

i: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], key = 8
ans =3


approach:

Binary Search

left, right, mid

right = last index
left = first index
mid = inbetween that. if mid is equal to the key, return its index.

otherwise, if its less than the key, i'm going
to see if the right is less than the left --> if so its descending order and I want to move the right pointer, otherwise I'll move the left.

if its greater than the key --> see if the right is
to see if the right is less than the left --> if so its descending order and I want to move the right pointer, otherwise I'll move the left.

*/

const binary_search = (arr, key) => {
	let start = 0,
		end = arr.length - 1;

	const isAscending = arr[0] < arr[arr.length - 1];

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		if (arr[mid] === key) {
			return mid;
		}

		if (isAscending) {
			if (key < arr[mid]) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		} else {
			if (key > arr[mid]) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		}
	}

	return -1;
};
