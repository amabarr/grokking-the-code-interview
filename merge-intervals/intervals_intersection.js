/*

Given a list of intervals, find the interseciton of these two lists. Each list consists of disjoint intervals sorted on their start time.


Examples:

input: [[1, 3], [5, 6], [7, 9]]     [[2. 3], [5, 7]]
output: [[2, 3], [5, 7]]


Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
Output: [5, 7], [9, 10]


approach: two pointers
one on first arr, one on second
declare common interval variable

compare their start times --> if they're the same, thats the common interval start + end is the smallest of the two end times.

otherwise, compare which one is larger and see if it falls in the others time period

start = max (a.start, b.start)
end = min(a.end, b.end)
and that's a common interval.

move next in arr of  whichever one is finishing first
*/

class Interval {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	print_interval() {
		process.stdout.write(`[${this.start}, ${this.end}]`);
	}
}

const merge = function (intervals_a, intervals_b) {
	let result = [],
		i = 0,
		j = 0;

	while (i < intervals_a.length && j < intervals_b.length) {
		//check if overlapping
		let a =
			intervals_a[i].start >= intervals_b[j].start &&
			intervals_a[i].start <= intervals_b[j].end;
		let b =
			intervals_b[j].start >= intervals_a[i].start &&
			intervals_b[j].start <= intervals_a[i].end;

		if (a || b) {
			result.push(
				new Interval(
					Math.max(intervals_b[j].start, intervals_a[i].start),
					Math.min(intervals_b[j].end, intervals_a[i].end)
				)
			);
		}

		if (intervals_a[i].end < intervals_b[j].end) {
			i++;
		} else {
			j++;
		}
	}

	return result;
};
