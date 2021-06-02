/*

Given the head of a LinkedList with a cycle, find the length of the cycle.

find the cycle, with a fast and slow pointer.
when fast === slow we found the start of our cycle.
then count its length from there by going through it until it reaches slow again.



*/

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const findCycleDepth = (head) => {
	let slow = head,
		fast = head;

	while (fast != null && fast.next !== null) {
		fast = fast.next.next;
		slow = slow.next;

		if (slow === fast) {
			return findLength(slow);
		}
	}

	return 0;
};

const findLength = (head) => {
	let curr = slow,
		length = 0;

	while (true) {
		curr = curr.next;
		length++;
		if (curr === head) {
			break;
		}
	}

	return length;
};
