/*

Given a set of distinct numbers, find all of its permutations.

Input: [1,3,5]
Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]

approach

declare result array
have a map to see what are seen
swap function to help me swap

helper function --> takes in the array of numbers and an index.
recursive
BC: if that index is equal to the ending index, it sees if map has it, if not it'll add it to the results array but copied

else
for loop, iterate through indices to swap.
swap current idx with the i from that for loop
then recursively call helper function
swap it back!


call this recursive helper fun on nums and idx 0
return results;

*/

const find_permutations = function (nums) {
	result = [];
	const seen = new Map();

	function swap(a, b, arr) {
		let temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	}

	function helper(currArr, j) {
		if (j === nums.length - 1) {
			if (!seen.has([...currArr])) {
				result.push([...currArr]);
			}
			return;
		} else {
			for (let i = j; i < currArr.length; i++) {
				swap(j, i, currArr);
				helper(currArr, j + 1);
				swap(j, i, currArr);
			}
		}
	}

	helper(nums, 0);

	return result;
};
