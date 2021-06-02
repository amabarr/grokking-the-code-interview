/*

given head of singly linkedlist, reutrn the middle node.

if the length is even, return the second middle node

examples:
1 - 2 -3 -4 -5 -null
return 3

1 - 2 - 3 - null
return 3

approach:
two pointers, fast and slow.
fast is always two x ahead of slow.
fast will reach the end when slow reaches the middle then.


*/

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const find_middle_of_linked_list = function (head) {
	let slow = head,
		fast = head;

	while (fast !== null && fast.next !== null) {
		fast = fast.next.next;
		slow = slow.next;
	}

	return slow;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next = new Node(6);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next.next = new Node(7);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);
