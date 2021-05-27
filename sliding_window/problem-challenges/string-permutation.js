/*
Given a string and a pattern, find out if the string contains any permutation of the pattern.

If a string has ‘n’ distinct characters, it will have n!n! permutations.

Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

*/

const findPermutation = (str, pattern) => {
	//hash out the pattern
	let windowStart = 0,
		matched = 0,
		charFreq = {};

	for (let i = 0; i < pattern.length; i++) {
		const char = pattern[i];
		if (!(char in charFreq)) {
			charFreq[char] = 0;
		}
		charFreq[char]++;
	}

	for (let i = 0; i < str.length; i++) {
		const rightChar = str[i];

		if (rightChar in charFreq) {
			charFreq[rightChar]--;
			if (charFreq[rightChar] === 0) {
				matched++;
			}
		}

		if (matched === Object.keys(charFreq).length) return true;

		if (i >= pattern.length - 1) {
			let left = str[windowStart];
			windowStart++;
			if (left in charFreq) {
				if (charFreq[left] === 0) {
					matched--;
				}
				charFreq[left]++;
			}
		}
	}

	return false;
};
