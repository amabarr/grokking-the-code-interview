/*

Smallest Window containing Substring

Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.


approach:
declare min val
map the pattern in an obj

start window val
for loop is the end of teh window

track the matched in a val,
when i reach all matched or more, compare to min val

then see if i can get a smaller window by taking a char from the front away, increasing the window start.

return min
*/

function find_substring(str, pattern) {
	let windowStart = 0,
		matched = 0,
		substrStart = 0,
		minLength = str.length + 1,
		charFrequency = {};

	for (let i = 0; i < pattern.length; i++) {
		const char = pattern[i];
		if (!(char in charFrequency)) {
			charFrequency[char] = 0;
		}
		charFrequency[char]++;
	}

	// try to extend the range [windowStart, windowEnd]
	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		const rightChar = str[windowEnd];
		if (rightChar in charFrequency) {
			charFrequency[rightChar]--;
			if (charFrequency[rightChar] >= 0) {
				// Count every matching of a character
				matched++;
			}
		}

		while (matched === pattern.length) {
			if (minLength > windowEnd - windowStart + 1) {
				minLength = windowEnd - windowStart + 1;
				substrStart = windowStart;
			}

			const leftChar = str[windowStart];
			windowStart++;
			if (leftChar in charFrequency) {
				if (charFrequency[leftChar] === 0) {
					matched--;
				}
				charFrequency[leftChar]++;
			}
		}
	}

	return minLength <= str.length
		? str.substring(substrStart, substrStart + minLength)
		: "";
}
