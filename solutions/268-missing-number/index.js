/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	if (!nums || !nums.length) {
		return 0;
	}

	nums = nums.sort(function (a, b) {
		return a - b;
	});

	var min = -1;
	for (var i = 0, l = nums.length; i < l; i++) {
		if (nums[i] < 0) {
			continue;
		}

		if (nums[i] !== min && nums[i] - min > 1) {
			return min + 1;
		}

		min = nums[i];
	}

	return nums[nums.length - 1] + 1;
};
