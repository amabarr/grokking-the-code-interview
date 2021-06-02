/*

Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

example: 1 - 2 - 3- 4- 5- 6- 4
// yes it does.

example: 1- 2- 3 -4 - 5 - null
no it doesnt


approach:
fast and slow pointers

one fast pointer,
one slow.

if there's no cycle, fast will reach null first, and slow will never catch up.

if they have a cycle, the two points will merge eventually.

*/

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const has_cycle = (head) => {
	let slow = head,
		fast = head;

	while (fast !== null && fast.next !== null) {
		fast = fast.next.next;
		slow = slow.next;

		if (fast === slow) {
			return true;
		}
	}

	return false;
};
