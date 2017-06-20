/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
	var len = nums.length;

	for (var i = 0; i < len; i++) {
		for (var j = i + 1; j < len; j++) {
			if (nums[i] == nums[j]) {
				return nums[i];
			}
		}
	}

	return 0;
};
