/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
	if (!nums || !nums.length) {
		return 0;
	}

	for (var i = 0, l = nums.length; i < l; i++) {
		if (i + 1 >= l || nums[i] != nums[i + 1]) {
			return nums[i];
		}

		i += 1;
	}

	return 0;
};
