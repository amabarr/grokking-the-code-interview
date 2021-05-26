/*
Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.
*/

//Examples

const fruit = ["A", "B", "C", "A", "C"];
/* max will be 3 bc we put 2 'C' in one basket, and an a in the other.

another example:
const fruit = ['A, 'B', 'C, 'B', 'B', 'C']
answer: 5, three B's and two C's
*/

const fruits_into_baskets = (fruits) => {
	let count = {},
		windowStart = 0,
		max = 0;

	for (let i = 0; i < fruits.length; i++) {
		if (!count[fruits[i]]) {
			count[fruits[i]] = 0;
		}

		count[fruits[i]]++;

		while (Object.keys(count).length > 2) {
			const fruit = fruits[windowStart];
			count[fruit]--;
			if (count[fruit] === 0) delete count[fruit];

			windowStart++;
		}

		max = Math.max(max, windowStart - i + 1);
	}

	return max;
};
