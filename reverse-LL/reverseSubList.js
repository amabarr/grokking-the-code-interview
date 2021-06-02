/*


Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.


example:
LL:  1 - 2 - 3 -4
p = 2
q = 3

1 - 3 - 2 - 4


LL : 1 - 2 -3 -4 -5 -6
p = 2
q = 4
1- 4- 3 -2 - 5 -6


approach:
curr and prev nodes
count

while count != p, i make the curr = curr.next., prev = curr;
store the p - 1 node in prev so i can reconnect the reversed part later
reverse the nodes from p to q with prev and curr variables, once I hit q return q

connect p - 1 and q nodes together!

reutrn list ?

*/

const reverseSubList = (head, p, q) => {
	if (p === q) {
		return head;
	}

	let i = 0;
	let curr = head,
		prev = null;

	while (curr != null && i < p - 1) {
		prev = curr;
		curr = curr.next;
		i++;
	}

	const lastNode = prev;
	const startingReverseNode = curr;
	let next = null;

	while (curr != null && i < q - p + 1) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
		i++;
	}

	if (lastNode !== null) {
		lastNode.next = prev;
	} else {
		head = prev;
	}

	startingReverseNode.next = curr;

	return head;
};
