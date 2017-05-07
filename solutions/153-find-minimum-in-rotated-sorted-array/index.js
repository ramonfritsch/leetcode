/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function(nums) {
	var min = null;
	for (var i = 0, l = nums.length; i < l; i++) {
		var num = nums[i];

		if (min === null || num < min) {
			min = num;
		}

		if (i >= (l - 1)) {
			return min;
		} else if (i > 0 && nums[i - 1] > num) {
			return num;
		}
	}
};