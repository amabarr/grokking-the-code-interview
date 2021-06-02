/*

Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.


Examples:
Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"

Input: string = "aeftiol" pattern = "af"
output: "aef"

approach: sliding window
make a dictionary of the letters in the pattern
let minLength = 0;
windowstart = 0;
substringStart = 0
matched = 0

iterate through the string. windowend is i
add letters as i increase the window
if that pattern letter reaches 0, add more to matched.

check to see if matched is equal to number of letters in my dictionary --
if i have found all the letters, decrease my window and see if i still see them, if i do change the min,

at end make substring from my substring start, and to my substring start + minLength!
*/

const minWindowContainingSubString = (string, pattern) => {
	const dict = {};
	let minLength = Infinity,
		windowStart = 0,
		subStart = 0,
		matched = 0;

	for (let i = 0; i < pattern.length; i++) {
		if (!(pattern[i] in dict)) {
			dict[pattern[i]] = 0;
		}
		dict[pattern[i]]++;
	}

	for (let i = 0; i < string.length; i++) {
		if (dict[string[i]]) {
			dict[string[i]]--;

			if (dict[string[i]] >= 0) matched++;
		}

		while (matched === pattern.length) {
			minLength = Math.min(minLength, i - windowStart + 1);
			subStart = windowStart;

			const left = str[windowStart];
			windowStart++;

			if (left in dict) {
				if (dict[left] === 0) {
					matched--;
				}
				dict[left]++;
			}
		}
	}

	return minLength < string.length
		? string.substring(subStart, subStart + minLength)
		: "";
};
