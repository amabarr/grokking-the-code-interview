/*

Make Squares [] [] []

Given a sorted array, create a new array containing squares of al lthe numbers of hte inptu array in the sroted order.

examples:

1)
[-2, -1, 0, 2, 3]
[0, 1, 4, 4, 9]



//two pointers
one in front, one in back.
compare their squares. whichever one is larger, unshift onto the array, move that pointer.

*/

const makeSquares = (arr) => {
	const squares = new Array(arr.length).fill(0);
	let p1 = 0,
		p2 = arr.length - 1,
		currIdx = squares.length - 1;

	while (p1 <= p2) {
		let left = arr[p1] * arr[p1];
		let right = arr[p2] * arr[p2];

		if (left > right) {
			squares[currIdx] = left;
			currIdx--;
			p1++;
		} else {
			squares[currIdx] = right;
			currIdx--;
			p2--;
		}
	}

	return squares;
};

// O(N) depends on the elements in the array.
// space is O(N) because making new array from those elements.
