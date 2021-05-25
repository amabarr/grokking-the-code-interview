const max_sub_array_of_size_k = function (k, arr) {
	let max = -Infinity;

	let currentSum = 0;
	let windowStart = 0;

	for (let i = 0; i < arr.length; i++) {
		currentSum += arr[i];
		if (i >= k - 1) {
			max = Math.max(currentSum, max);
			currentSum -= arr[windowStart];
			windowStart++;
		}
	}

	return max;
};
