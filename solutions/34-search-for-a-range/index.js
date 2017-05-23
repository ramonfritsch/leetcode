/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
module.exports = function(nums, target) {
	var start = -1;
	var end = -1;

	for (var i = 0, l = nums.length; i < l; i++) {
		if (nums[i] == target) {
			if (start == -1) {
				start = i;
			}

			end = i;
		} else if (start !== -1) {
			break;
		}
	}

	return [ start, end ];
};
