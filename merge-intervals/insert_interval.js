/*


Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

examples:
Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
Output: [[1,3], [4,7], [8,12]]
Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].

approach:

have a new array called merged
insert all of the things that go before that interval.

after im done inserting all that go before --> merge all intervals that overlap with it together into one new interval.

add that new interval.

push whatever is left

return merged array

*/

const insertInterval = (intervals, newInterval) => {
	let i = 0,
		merged = [];

	while (i < intervals.length && intervals[i][1] <= newInterval[0]) {
		merged.push(intervals[i]);
		i++;
	}

	//merge all intervals that overlap it -- whatever is left that has a start time less than my end time
	while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
		newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
		newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
		i++;
	}

	merged.push(newInterval);

	while (i < intervals.length) {
		merged.push(intervals[i]);
		i++;
	}

	return merged;
};
