/*

Problem 1: Given a set of intervals, find out if any two intervals overlap.

example:
Intervals: [[1,4], [2,5], [7,9]]
Output: true
Explanation: Intervals [1,4] and [2,5] overlap

approach --> sort, if there's overlap between the start and end times --> return true. else return false;

*/

const isOverlap = (intervals) => {
	intervals = intervals.sort((a, b) => a[0] - b[0]);

	for (let i = 1; i < intervals.length; i++) {
		if (intervals[i][0] <= intervals[i - 1][1]) {
			return true;
		}
	}

	return false;
};
