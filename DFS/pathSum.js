/*

Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

examples: tree, 10.


approach:

DFS.
go down until I hit null, add up the val to a sum as I go

DFS(node, currSum - val)

if I hit a null, see if its 0, if so return true. else, return;

return false if none of the recursive calls hit a yes!

*/

const has_path = (root, sum) => {
	if (root === null) {
		return false;
	}

	if (root.val === sum && root.left === null && root.right === null) {
		return true;
	}

	return (
		has_path(root.left, sum - root.val) || has_path(root.right, sum - root.val)
	);
};
