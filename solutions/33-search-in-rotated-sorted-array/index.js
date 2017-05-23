/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
module.exports = function(nums, target) {
	for (var i = 0, l = nums.length; i < l; i++) {
		if (nums[i] == target) {
			return i;
		}
	}

	return -1;
};
