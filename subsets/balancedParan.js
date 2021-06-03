/*

For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.

examples:
N: 2
(()), ()();


approach:

results array

helper function that takes in str + number of left paran. and number of right

BC : if right < left return;

BC : if right and left are zero, push onto the array of results and return

two recursive calls -->

if there are still left leftOver
one where we add a left

if there are still right
one where we add a right


return results

*/

const generate_valid_parentheses = function (num) {
	let result = [];

	const helper = (str, left, right) => {
		if (right < left) return;

		if (left === 0 && right === 0) {
			result.push(str);
			return;
		}

		if (left > 0) {
			helper(str + "(", left - 1, right);
		}

		if (right > 0) {
			helper(str + ")", left, right - 1);
		}
	};

	helper("(", num - 1, num);

	return result;
};
