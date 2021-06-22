/*
Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.


examples:

Input: String="catfoxcat", Words=["cat", "fox"]
Output: [0, 3]
Explanation: The two substring containing both the words are "catfox" & "foxcat".

Input:
String = "catmousecatdog", words = ["mouse", "cat", "dog"]

output : [3]


approach

keep frequency of words in a hash map
try to match every word from every index


need to continue this one

*/

const find_word_concatenation = (str, words) => {
	//edge cases

	if (words.length === 0 || words[0].length === 0) {
		return [];
	}

	let wordFreq = {};

	words.forEach((word) => {
		if (!word in wordFreq) {
			wordFreq[word] = 0;
		}
		wordFreq[word]++;
	});

	const result = [],
		wordLength = words[0].length;

	for (let i = 0; i < str.length; i++) {
		const wordsSeen = {};
		for (let j = 0; j < words.length - 1; j++) {
			let nextWordIdx = i + j * wordLength;

			let currWord = str.substring(nextWordIdx, nextWordIdx + wordLength);

			if (!(currWord in wordFreq)) {
				break;
			}

			if (!(currWord in wordsSeen)) {
				wordsSeen[currWord] = 0;
			}

			wordsSeen[currWord]++;

			if (wordsSeen[currWord] > (wordFreq[currWord] || 0)) {
				break;
			}

			if (j + 1 === words.length) {
				result.push(i);
			}
		}
	}

	return result;
};
