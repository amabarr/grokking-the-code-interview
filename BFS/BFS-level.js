/*

Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

example:


approach:
BFS -- declare a queue with the first node inside of it

while there's length in the queue
the current nodes on level = q.length;
lvl = [];

iterate throguh the q.length, add them to a level arr,
add their children to the q

push the level array onto the overall array


return result array
*/
class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const traverse = function (root) {
	let result = [];

	if (root === null) return result;

	let queue = [root];

	while (queue.length > 0) {
		let lvl = [];
		let levelSize = queue.length;

		for (let i = 0; i < levelSize; i++) {
			let curr = queue.shift();
			lvl.push(curr.val);

			if (curr.left !== null) {
				queue.push(curr.left);
			}

			if (curr.right !== null) {
				queue.push(curr.right);
			}
		}

		result.push(lvl);
	}

	return result;
};
