/*
Given a string and a pattern, find all anagrams of the pattern in the given string.

Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get N!N! permutations (or anagrams) of a string having NN characters. For example, here are the six anagrams of the string “abc”:

Write a function to return a list of starting indices of the anagrams of the pattern in the given string.


examples:
Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".


approach:
  - sliding window
  - declare windowstart, result
  - hash out the values of the pattern
  - if window is larger than the pattern length, change the start, if the start was a val in pattern, add it back in.
  - return result
*/

const find_string_anagrams = (str, pattern) => {
	let hash = {};

	for (let i = 0; i < pattern.length; i++) {
		if (!hash[pattern[i]]) {
			hash[pattern[i]] = 0;
		}
		hash[pattern[i]]++;
	}

	let windowStart = 0,
		matched = 0,
		results = [];

	for (let i = 0; i < str.length; i++) {
		const rightChar = str[i];

		if (rightChar in hash) {
			hash[rightChar]--;
			if (hash[rightChar] === 0) {
				matched++;
			}
		}

		if (matched === Object.keys(hash).length) {
			results.push(windowStart);
		}

		if (i >= pattern.length - 1) {
			let left = str[windowStart];
			windowStart++;
			if (left in hash) {
				if (hash[left] === 0) {
					matched--;
				}
				hash[left]++;
			}
		}
	}

	return results;
};

/// time O(N + M) , where n is string length, m is pattern length.
//space: O(M) where m is pattern length because making a hash table
