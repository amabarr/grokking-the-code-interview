/*

Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.


examples:
1 - 2 -3 -4 - 5 -6 - 1 - null false

2 - 4 - 6 - 4 - 2 - null true

approach:

find the middle.
reverse second half
comprare to first half.
reverse second half again to get it back to normal.
*/

const isPalindromeLL = (head) => {
	let slow = head,
		fast = head;

	while (fast != null && fast.next !== null) {
		fast = fast.next.next;
		slow = slow.next;
	}

	//now slow is the middle;
	let secondHalf = reverseLL(slow);
	let copyHead = secondHalf;

	while (head !== null && secondHalf !== null) {
		if (head.value != secondHalf.value) {
			break;
		}

		head = head.next;
		secondHalf = secondHalf.next;
	}

	reverseLL(copyHead);

	if (head === null || secondHalf === null) {
		return true;
	}

	return false;
};

const reverseLL = (head) => {
	prev = null;

	while (head !== null) {
		let temp = head.next;
		head.next = prev;
		prev = head;
		head = temp;
	}

	return prev;
};
