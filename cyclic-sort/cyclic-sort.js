/*
We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

Write a function to sort the objects in-place on their creation sequence number in O(n)O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

example:
[3, 2, 1, 5, 4]

output : [1, 2, 3, 4, 5]

approach:

iterate through the array,
if its in the correct place move on,
else swap it with the index it should be in.

*/

const cyclicSort = (arr) => {
	let i = 0;
	while (i < arr.length) {
		let j = arr[i] - 1;
		if (arr[i] !== arr[j]) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
		} else {
			i++;
		}
	}
	return arr;
};
