/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
	var result = [];

	if (!nums || !nums.length) {
		return result;
	}

	nums = nums.sort(function (a, b) {
		return a - b;
	});

	for (var i = 0, l = nums.length; i < l; i++) {
		if (i + 1 >= l || nums[i] != nums[i + 1]) {
			result.push(nums[i]);

			continue;
		}

		i += 1;
	}

	return result;
};
