/*
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

example:
Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
one [1,5].

*/

class Interval {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	get_interval() {
		return "[" + this.start + ", " + this.end + "]";
	}
}

const merge = function (intervals) {
	merged = [];

	intervals = intervals.sort((a, b) => a.start - b.start);
	let start = intervals[0].start,
		end = intervals[0].end;

	for (let i = 1; i < intervals.length; i++) {
		if (intervals[i].start <= end) {
			end = Math.max(end, intervals[i].end);
		} else {
			merged.push(new Interval(start, end));
			start = intervals[i].start;
			end = intervals[i].end;
		}
	}

	merged.push(new Interval(start, end));
	return merged;
};
