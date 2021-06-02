/*

Given a head of a singly linked list that contains a cycle, write a function to find the starting node of the cycle.

examples:
1 - 2 -3 - 4 -5 -6 - 3

3 is what i should return

fast and slow pointers approach:

find cycle by increasing fast until it equals slow
then im going to calculate the cycles length

ill move ahead the pointer by the length nodes,
and keep on incremnting until they meet. and thats the head of the cycle

*/

const findCycleStart = (head) => {
	let cycleLength = 0,
		slow = head,
		fast = head;

	while (fast != null && fast.next != null) {
		fast = fast.next.next;
		slow = slow.next;

		if (slow === fast) {
			cycleLength = findCycleDepth(slow);
			break;
		}
	}

	(slow = head), (fast = head);

	while (cycleLength > 0) {
		fast = fast.next;
		cycleLength--;
	}

	while (slow !== fast) {
		slow = slow.next;
		fast = fast.next;
	}

	return slow;
};

const findCycleDepth = (head) => {
	let curr = head,
		depth = 0;

	while (true) {
		curr = curr.next;
		depth++;
		if (curr === head) {
			break;
		}
	}

	return depth;
};
