/*

Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.


example:
[3, 1, 2, 6, 7] target = 10
answers : [1, 2, 3], [1, 2, 6]
return 2;

Input: [-1, 0, 2, 3], target=3
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

approach:
sort it
let count = 0;
three pointers --> loop and then pair sum!
if the sum is less than the target, add one to the list!
and left ++,
else right--;

*/
// [-1, 0, 2, 3], target=3]
const tripleSumSmaller = (arr, target) => {
	arr.sort((a, b) => a - b);
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		let left = i + 1;
		let right = arr.length - 1;

		while (left < right) {
			if (arr[left] + arr[right] < target - arr[i]) {
				count += right - left;
				left++;
			} else {
				right--;
			}
		}
	}

	return count;
};
