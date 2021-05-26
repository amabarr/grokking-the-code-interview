/*
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

examples:

"aabbbbbccbb" -->  k = 2
output: 9

"abbc" --> k = 2
output: 3

"abccde" k = 1;
output: 3;

approach:

sliding window

find longest substring where second letter -- at most k.

declare map, windowstart, maxLength, firstLetter, secondLetter.
loop through the str -->

keep count of the maxRepeatLetterCount -- math.max it with itself and the currentChars count

if current window size - max repeat letter count is greater than k
decrease the char at the leftmost, and add to the window start

maxLength = math.max(maxlen, and i - windowstart + 1)
return maxLength || whatever the amount of the first letter is
*/

const longestSubstringSameLetters = (str, k) => {
	let map = {},
		windowStart = 0,
		maxLength = 0,
		maxRepeatLetterCount = 0;

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (!(char in map)) {
			map[char] = 0;
		}

		map[char]++;

		maxRepeatLetterCount = Math.max(maxRepeatLetterCount, map[char]);

		if (i - windowStart + 1 - maxRepeatLetterCount > k) {
			const leftChar = str[windowStart];
			map[leftChar]--;
			windowStart++;
		}

		maxLength = Math.max(maxLength, i - windowStart + 1);
	}

	return maxLength;
};
