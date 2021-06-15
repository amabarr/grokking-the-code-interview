/*
Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

examples:
[1, 2, 3, 4, 5] target = 5

answers: [[1, 2], [1], [2], [3], [4]]


[2, 5, 3, 10] target = 30

output: [[2], [5], [2, 5], [3], [5, 3], [10]]

//have to be continuous

approach:
two pointers
one at current starting spot,
one to move over, multiply to a product
if that product is less than target, add that array to the result list

*/

const find_subarrays = function (arr, target) {
	let result = new Set(),
		product = 1,
		left = 0;

	for (let i = 0; i < arr.length; i++) {
		product *= arr[i];

		while (product >= target && left < arr.length) {
			product /= arr[left];
			left++;
		}

		let curr = [];

		for (let j = i; j > left - 1; j--) {
			result.add(JSON.stringify([arr[j]]));
			curr.unshift(arr[j]);
		}

		result.add(JSON.stringify(curr));
	}

	return [...result].map((val) => JSON.parse(val));
};
