/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.


examples:
string: "araaci"
k  = 2;

output : 4;
"araa"

example 2:
"abc"
k = 1;
output: 2;

approach:
- sliding window with hash map
- if i have string with less than or equal to k repeating --> Math.max it with max
-- move the window over

- return max;

*/

const longest_substring_with_k_distinct = (str, k) => {
	let max = -Infinity,
		windowStart = 0,
		charFreq = {};

	for (let i = 0; i < str.length; i++) {
		const rightChar = str[i];

		if (!(rightChar in charFreq)) {
			charFreq[rightChar] = 0;
		}

		charFreq[rightChar]++;

		while (Object.keys(charFreq).length > k) {
			const left = str[windowStart];
			charFreq[left]--;

			if (charFreq[left] === 0) delete charFreq[left];
			windowStart++;
		}

		max = Math.max(max, i - windowStart + 1);
	}

	return max;
};
