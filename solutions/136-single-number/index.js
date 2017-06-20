/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	if (!nums || !nums.length) {
		return 0;
	}

	nums = nums.sort(function (a, b) {
		return a - b;
	});

	for (var i = 0, l = nums.length; i < l; i++) {
		if (i + 1 >= l || nums[i] != nums[i + 1]) {
			return nums[i];
		}

		i++;
	}

	return 0;
};
