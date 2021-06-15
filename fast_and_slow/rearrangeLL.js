/*

Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.


approach:
fast + slow pointers,

find middle of LL,
reverse second half of LL

iterate through first half and second to create order

*/

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}

	print_list() {
		temp = this;
		while (temp !== null) {
			process.stdout.write(`${temp.value} `);
			temp = temp.next;
		}
		console.log();
	}
}

function reorder(head) {
	if (head === null || head.next === null) {
		return;
	}

	//find middle --> slow becomes the middle
	let slow = head,
		fast = head;

	while (fast !== null && fast.next !== null) {
		fast = fast.next.next;
		slow = slow.next;
	}

	//reverse the second half
	let secondHalf = reverse(slow);
	let firstHalf = head;

	while (firstHalf !== null && secondHalf !== null) {
		let temp = firstHalf.next;
		firstHalf.next = secondHalf;
		firstHalf = temp;

		temp = secondHalf.next;
		secondHalf.next = firstHalf;
		secondHalf = temp;
	}

	if (firstHalf !== null) {
		firstHalf.next = null;
	}
}

function reverse(head) {
	let prev = null;

	while (head !== null) {
		let next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}

	return prev;
}
