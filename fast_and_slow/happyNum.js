/*

happy number is any number that is defined by the following process:

- starting with any pos integer, replace the nuber of the sum of the squares of its digits

repeat the process until the number equals 1, or if it loops endlessly

those numbers that end in 1 are happy



examples:

n = 19;
output : true;

n = 2;
output = false.
loops at 4 ?


approach:
slow and fast pointers to find the cycle

slow will find the square sum
fast will find the square sums square
if they equal each other we hit a cycle
then return if its one or not
once the cycle is found see if the number is stuck on one or not.

*/

const happyNumberFinder = (num) => {
	let slow = num,
		fast = num;

	while (true) {
		slow = findSquare(slow); //40
		fast = findSquare(findSquare(fast)); //37

		if (slow === fast) {
			break;
		}
	}

	return slow === 1;
};

//16
const findSquare = (num) => {
	let sum = 0; //36 + 1
	while (num > 0) {
		digit = num % 10; //0
		sum += digit * digit; //0
		num = Math.floor(num / 10); //4
	}

	return sum;
};
