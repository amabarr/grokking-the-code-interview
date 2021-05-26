/*
Given a string, find the length of the longest substring, which has no repeating characters.

Examples:

"abc" --> "abc" 3

"a" --> "a" 1

"amanda" -> "mand" 4

"aabccbb" ==> "abc" 3

Approach:
sliding window
declare charCount obj
declare windowStart = 0
max = -infinity

loop through the string
if ive seen this character before, i will windowStart++ the window.
else i'll add it to my character count.
Math.max = (max, i - windowStart + 1)
at end I will return the max!

//edge case: string has all unique chars!
*/

//my solution using sets!
const norepeat = (str) => {
	const char = new Set();
	let max = 0,
		windowStart = 0;

	for (let i = 0; i < str.length; i++) {
		while (char.has(str[i])) {
			max = Math.max(max, i - windowStart);
			char.delete(str[windowStart]);
			windowStart++;
		}

		char.add(str[i]);
	}

	return Math.max(char.size, max);
};

//my soltution using a hash map for indices

const non_repeat_substring = (str) => {
	const charIdxs = {};
	let max = 0,
		charStart = 0;

	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		//check to see if we've seen this char before
		if (char in charIdxs) {
			//checking to see if the window start is ahead of the last index of the character we're looking at or not.
			charStart = Math.max(charStart, charIdxs[char] + 1);
		}

		charIdxs[char] = i;

		max = Math.max(max, i - charStart + 1);
	}

	return max;
};
